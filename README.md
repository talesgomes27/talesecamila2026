# Casamento Tales e Camila 2026

Site de convite de casamento em Astro, TypeScript e Tailwind CSS, com identidade botânica, detalhes do evento, confirmação de presença e presentes simbólicos por Pix. A página `/convite/` prioriza presença e trajeto; `/` reúne as informações completas.

## Desenvolvimento e verificações

Use Node.js 22 e as dependências do lockfile (`npm ci` em uma instalação nova).

```sh
npm run dev
npm test
npm run check
npm run build
npm run test:build
npm run preview
```

`npm test` usa o runner nativo do Node e o TypeScript já instalado. O carregador de teste transpila em memória; não instala bibliotecas. Os testes exercitam o gerador Pix, integridade dos dados, ordem dos presentes e scripts de RSVP/modal com DOM mínimo e respostas de rede sintéticas. Eles não validam contas, aplicativos bancários ou registros externos.

## Fonte dos dados e estrutura

| Área | Arquivos | Comportamento |
| --- | --- | --- |
| Dados e contratos | `src/data/weddingData.ts`, `src/types/wedding.ts` | Conteúdo validado no build; chegada e cerimônia têm rótulos distintos; prazo possui data legível e ISO. |
| Página principal | `src/pages/index.astro`, `src/components/home/` | Ordem original das seções: início, contagem, história, cerimônia, presentes e confirmação. Hero com atalhos práticos. |
| Convite | `src/pages/convite/index.astro` | Horários, endereço, confirmação, mapa e calendários; estilos de impressão no layout. |
| Navegação e ajuda | `src/components/common/` | Menu visível no celular, foco e links de ajuda pelo WhatsApp existente. Não envia mensagens automaticamente; não há botão de ligação. |
| Presentes | `src/utils/gifts.ts`, `GiftsSection.astro`, `GiftCard.astro` | Ordem de apresentação dos presentes aprovada, preservando os 24 itens, IDs, títulos, descrições e preços. Ordenações de preço continuam disponíveis. |
| Pix | `src/utils/pix.ts`, `PixModal.astro` | Código fixo ou sem valor, CRC e validação de limites; cópia guiada, alternativas de QR/chave e recado independente de pagamento. |
| Publicação | `astro.config.mjs`, `netlify.toml`, `public/_headers` | Build estático em `dist`; configuração Netlify. Não há backend de confirmação neste repositório. |

Dados Pix e telefone permanecem nos dados de produção existentes; não os copie para fixtures ou relatórios. Os testes usam entradas sintéticas e hashes de invariantes. Manter `noindex, nofollow`: este trabalho não autoriza mudar indexação.

## Confirmação: comportamento e limite atual

Por decisão expressa do usuário em 03/11/2026, o **Web3Forms é o único destino das confirmações**. Foram removidos o envio paralelo para Google Sheets, sua URL e o campo correspondente do contrato. A chave e o endpoint Web3Forms foram preservados. Não foi realizada migração para Netlify Forms nem alteração da CSP.

O cliente valida o nome e recado, mantém o honeypot, bloqueia apenas envios simultâneos e cancela a espera após 15 segundos. Não usa nomes em `sessionStorage` como prova de confirmação e não descarta usuários por preencherem rápido. Em falha, conserva os campos e oferece nova tentativa ou WhatsApp; um erro de rede pode ocorrer depois do recebimento e um reenvio pode duplicar uma solicitação.

Uma resposta HTTP válida com `success: true` do Web3Forms resulta em “Solicitação enviada”. **Cada adulto convidado envia uma confirmação separada, inclusive acompanhantes; a quantidade de crianças é informada na mensagem desse adulto.** O recado é opcional quando não há crianças. A contagem final de crianças depende da leitura das mensagens, sem um campo numérico adicional. Homônimos não são bloqueados por nome. Recarregar ou reabrir a página permite solicitar novamente; não existe identidade de convidado ou deduplicação de servidor neste projeto.

O responsável consulta e exporta as confirmações no Web3Forms. Compilação e testes locais não comprovam o recebimento na conta. A página comercial do serviço anuncia 250 envios/mês e histórico visível de 30 dias no plano gratuito: exportar regularmente, sem aguardar o fim do período. Ver [decisão e operação do RSVP](docs/rsvp-arquitetura.md).

Os noivos confirmaram que o casamento não tem horário definido para terminar e pode seguir até o amanhecer. Google Calendar e iCal guardam um lembrete da data, com chegada às 16h30 e cerimônia às 17h na descrição. Os metadados não anunciam um horário de encerramento.

## Pix e presentes

O valor livre é informado no aplicativo bancário; o site não impõe mínimo nem coleta um novo valor. Conferir beneficiário e valor no banco antes de autorizar. Copiar um código, abrir um recado ou clicar em ajuda não comprova pagamento. Não existe confirmação automática ou consulta bancária.

Os noivos confirmaram o caráter simbólico dos presentes, mas solicitaram retirar o parágrafo explicativo geral da vitrine. A introdução usa a redação aprovada, com ajuste gramatical: “Criamos uma lista virtual com opções de presentes via Pix para esta nossa nova fase e para a lua de mel.” A reorganização dos presentes segue aprovada; a ordem original das seções do site foi restaurada. Títulos, descrições e preços permanecem preservados. Outras propostas editoriais estão em [revisão dos presentes](docs/presentes-revisao.md).

## Acessibilidade, validação e decisões

[DESIGN.md](DESIGN.md) registra as escolhas de legibilidade, foco, alvos e movimento. O site mantém conteúdo básico sem JavaScript e oferece ajuda; funcionalidades interativas requerem JavaScript. Testes em navegador e limitações ficam no [relatório da entrega](docs/audit-report.md). Não há alegação de conformidade WCAG integral ou de aumento comprovado de conversão.

O relatório inclui roteiro para convidados e proposta de métricas agregadas. Os noivos dispensaram verificações adicionais de infraestrutura do local por ser conhecido do público; isso não constitui inspeção física. Analytics não foi ativado.

## Publicação e rollback

Após a revisão, o usuário autorizou commit e push em 03/11/2026. O envio será feito na branch `codex/ux-acessibilidade-casamento`, com pull request para `main`; previews automáticos dependem da configuração externa da Netlify. O registro da preparação está no [plano](docs/refactoring-plan.md). A escolha do Web3Forms está resolvida; a conferência de recebimento/exportação na conta e submissões externas de teste continuam dependendo de autorização própria. Testes locais não substituem essa conferência.

Para desfazer o trabalho local, guardar primeiro o diff e cópias dos arquivos novos. Comparar a branch com a base `9e163d852ce637852349bb69f55e9dea210ab755` e restaurar somente os arquivos desta entrega após revisão. Não usar reset/clean global nem remover alterações de outro autor. Este trabalho não migrou registros externos; rollback do código não desfaz dados eventualmente enviados por convidados.
