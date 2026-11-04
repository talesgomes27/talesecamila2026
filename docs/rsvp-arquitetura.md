# RSVP — decisão de arquitetura e operação

## Decisão vigente — 03/11/2026

Os noivos escolheram **Web3Forms como único destino das confirmações** e autorizaram remover a cópia para Google Sheets. Pretendem consultar e baixar os registros no próprio Web3Forms. Não há migração para Netlify Forms, nova planilha ou novo backend pendente.

Essa decisão substitui tanto a recomendação inicial de Netlify Forms quanto a primeira escolha de manter os dois serviços. O motivo informado pelos noivos foi a franquia Web3Forms de 250 envios/mês para um evento de aproximadamente 120 pessoas. A conta e a franquia específica da Netlify não foram consultadas; limites variam por plano e não fundamentam uma mudança neste trabalho.

## Contrato implementado

- `RsvpSection.astro` envia um único POST para o endpoint Web3Forms existente. Chave e endpoint foram preservados.
- Dados/tipos não contêm mais URL de Apps Script; o HTML não publica essa configuração. Não há envio paralelo, resposta opaca `no-cors` ou dependência de Google Sheets.
- A CSP já permite Web3Forms e permanece inalterada. Nenhuma origem adicional foi liberada.
- Nome e mensagem são normalizados e limitados. Honeypot preservado; trava de envio simultâneo e espera de até 15 segundos.
- Sucesso exige HTTP válido e JSON com `success: true`. Recusa, resposta inválida, falha de rede ou timeout oferecem recuperação e preservam o conteúdo para nova tentativa.
- A mensagem de erro informa que um envio pode ter sido recebido mesmo sem resposta. Não há autenticação de convidados nem deduplicação no servidor deste projeto; um reenvio pode gerar duplicata.
- O formulário só fica disponível após instalar seu listener. Sem o script, a ajuda pelo WhatsApp permanece disponível, sem envio automático de mensagem.

Retirar a integração não apaga nem migra registros que eventualmente já existam na planilha ou no Web3Forms. Nenhuma conta ou base externa foi alterada.

## Regra de contagem aprovada

Uma confirmação por adulto convidado, inclusive acompanhantes. Se esse adulto levar crianças, deve informar a quantidade no campo de mensagem da sua confirmação. Quando não há crianças, o recado é opcional. A instrução aparece antes dos campos, na ajuda da mensagem e na FAQ.

Não foi criado contador numérico de crianças. Os noivos devem ler as mensagens e reconciliar a contagem, inclusive possíveis menções repetidas às mesmas crianças. O formulário não amplia a lista de convidados: a política de convite pessoal foi preservada.

## Consulta e exportação

A página comercial atual anuncia 250 envios por mês, exportação CSV e histórico visível de 30 dias no plano gratuito. Histórico visível e retenção interna são conceitos diferentes; o responsável deve exportar regularmente e acompanhar o uso da conta. As condições e o recebimento na conta específica não foram verificados. [Preços e limites Web3Forms](https://web3forms.com/pricing).

Para uma validação externa futura, enviar um registro claramente sintético apenas após autorização específica, conferir nome/mensagem no painel e na exportação e combinar a limpeza. Testes locais usam respostas simuladas e não consomem a franquia do serviço. Nenhum registro de convidado foi consultado ou enviado nesta entrega.

## Alternativas avaliadas anteriormente — histórico

| Alternativa | Resultado |
| --- | --- |
| Web3Forms | Escolhida como única fonte pelos noivos; aproveita o serviço existente e sua operação de consulta/exportação. |
| Netlify Forms | Recomendação inicial não adotada. Não há autorização nem necessidade de preparar essa migração. Limites dependem do plano da conta. [Cobrança oficial](https://docs.netlify.com/manage/forms/usage-and-billing/). |
| Google Sheets verificável | Descartada como requisito pelos noivos. A antiga tentativa direta era bloqueada pela CSP e `no-cors` não comprovava gravação; foi removida em vez de ampliar permissões ou criar infraestrutura. [Padrão Fetch](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque). |

Commit e push da branch foram autorizados posteriormente em 03/11/2026, com fluxo de revisão por pull request. Integração na produção, ações de conta, pagamentos e submissões externas de teste continuam fora desta etapa.
