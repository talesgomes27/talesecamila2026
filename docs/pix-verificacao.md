# Verificação local do Pix

Revisão de 03/11/2026 de `src/utils/pix.ts`, dos contratos em `src/types/wedding.ts` e dos chamadores `GiftCard.astro` e `GiftsSection.astro`. Os achados abaixo descrevem a versão anterior ao endurecimento da validação nesta tarefa. Esta revisão não alterou código de produção nem dados do casamento.

## Referências oficiais consultadas

O [Manual de Padrões para Iniciação do Pix, versão 2.10.0](https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/II_ManualdePadroesparaIniciacaodoPix.pdf), §§ 2.5–2.6, estabelece o GUI `br.gov.bcb.pix`, chave obrigatória e valor opcional no QR estático. Sem campos adicionais, a chave comporta até 77 caracteres dentro do template de até 99. O `txid` estático é `***` ou de 1 a 25 caracteres de `[A-Za-z0-9]`. Isso difere dos identificadores de cobranças dinâmicas da API Pix. O exemplo publicado tem CRC `1D3D`, calculado incluindo `6304`. O nome que o banco apresenta vem do DICT; o texto do payload não comprova titularidade.

O [Manual do BR Code, versão 2.0.1](https://www.bcb.gov.br/content/estabilidadefinanceira/spb_docs/ManualBRCode.pdf), § 2.1 e tabela 1, define objetos TLV, nome de 1–25 caracteres, cidade de 1–15 e campo de valor de 1–13. O CRC usa polinômio `0x1021` e estado inicial `0xFFFF`. ASCII é um perfil conservador adotável pelo gerador; não é uma proibição universal de Unicode pelo BCB. O histórico da versão 2.0.0 registra a remoção da restrição a caracteres alfanuméricos.

## Comportamento observado e correção mínima proposta

| Entrada sintética | Resultado antes da correção | Recomendação |
| --- | --- | --- |
| `amount: Infinity` | Campo 54 contém `Infinity` | Exigir número finito. |
| `amount: 0.001` | Emite `0.00` | Rejeitar valor inferior a um centavo. |
| `amount: 1.239` | Arredonda para `1.24` | Rejeitar casas excedentes; não alterar um preço silenciosamente. |
| `amount: 1e21` | Emite `1e+21` | Validar representação decimal final. |
| `amount: 10000000000` | Emite valor de 14 caracteres | Limitar saída a 13 caracteres; com duas casas, máximo `9999999999.99`. |
| `txid: 'AB-CD'` / 26 letras | Muda para `ABCD` / trunca | Rejeitar identificador inválido e preservar identificadores válidos. |
| Chave com 78 caracteres | Template 26 tem tamanho `100`; TLV fica malformado | Limitar chave e conferir cada valor TLV antes da concatenação. |
| Nome `TESTE😀` | Emoji permanece; CRC diverge do cálculo independente em UTF-8 | Após normalização existente, exigir ASCII imprimível e texto útil. |

Concentrar essas verificações no schema/gerador compartilhado. Para este perfil ASCII, comprimento de string e comprimento em bytes coincidem; exigir tamanho TLV entre 1 e 99 evita cabeçalhos de três dígitos. Preservar o formato atual com duas casas decimais para valores presentes e omitir o campo 54 quando o valor estiver ausente. `NaN`, zero e negativos já foram rejeitados no ensaio local.

Manter os dados originais de chave, recebedor, cidade e preços. A normalização e os cortes existentes de nome/cidade são um contrato do gerador e precisam de regressão explícita. Não substituir a cidade configurada para satisfazer o limite do payload. Os chamadores usam `GIFT${gift.id}` e `PIXLIVRE`; o modal consome o código pronto. Não é necessário adicionar um serviço de pagamentos.

## Vetores sintéticos reproduzíveis

Todos os dados desta seção são de teste. A chave fictícia publicada pelo BCB é `123e4567-e12b-12d1-a456-426655440000`; não consultar nem usar em pagamento.

| Caso | Entradas / sequência | Resultado esperado |
| --- | --- | --- |
| CRC de controle | `123456789` | `29B1` |
| CRC oficial | Payload literal de § 2.6.3, até `6304`, preservando `Fulano de Tal` | `1D3D` |
| Livre | Chave fictícia acima, nome `PESSOA TESTE`, cidade `BELEM`, demais parâmetros omitidos | 133 caracteres; campo 54 ausente; 62.05 = `***`; CRC `DC94` |
| Valor fixo | Mesmo caso, `amount: 123.45`, `txid: 'TESTE1'` | 146 caracteres; 54 = `123.45`; 62.05 = `TESTE1`; CRC `392B` |

O ensaio transpôs o TypeScript instalado apenas em memória, executou o gerador e conferiu os resultados com um leitor TLV independente e um CRC por tabela sobre bytes UTF-8. Os dois vetores sintéticos e o exemplo oficial coincidiram. Incluir nas verificações automatizadas os casos inválidos da tabela e os limites de 25 caracteres do `txid`, 77 da chave, 99 do template, valores de `0.01` e ausência de valor. Também conferir que uma mudança no conteúdo invalida o CRC anterior.

## Limites

Verificação estrutural e sintética não confirma registro da chave no DICT, titularidade, conta, nome bancário ou recebimento. Não houve consulta a banco, leitura por aplicativo bancário, transação, mensagem, commit, publicação ou deploy. A imagem do QR, o comportamento de cópia e o modal exigem validação própria; não foram cobertos por este ensaio do gerador.

## Estado após a implementação local

O gerador passou a rejeitar valores não finitos, frações de centavo, valores fora do campo de 13 caracteres, chaves que excedem o template ou não são ASCII e identificadores fora do padrão. Nome/cidade continuam normalizados e limitados, com saída ASCII neste perfil. Testes com hashes confirmam os mesmos payloads para os 24 valores e dados de produção originais sem reproduzi-los nas fixtures. Vetores sintéticos independentes foram incorporados à suíte. A validação continua sem comprovar titularidade ou recebimento bancário.
