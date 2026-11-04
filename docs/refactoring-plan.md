# Evolução da experiência dos convidados — plano e registro

**Objetivo:** executar o pedido de 2026-11-03 em cinco lotes, preservando os gates de integrações, conteúdo/finanças, testes externos e publicação.

**Base:** `9e163d852ce637852349bb69f55e9dea210ab755`, checkout inicialmente limpo em `main`. Trabalho em `codex/ux-acessibilidade-casamento`, no workspace solicitado. A implementação foi preparada localmente; commit/push foram autorizados depois, conforme registro ao final.

**Arquitetura:** preservar Astro estático, TypeScript, Tailwind, componentes e gerador Pix existentes. A decisão posterior dos noivos definiu Web3Forms como única fonte de confirmações, com retirada da cópia para Sheets. Não instalar serviços ou bibliotecas de aplicação.

**Esforço:** rigoroso nas fronteiras de confirmação, dinheiro e segurança; alterações incrementais de interface no restante. Especificação: pedido anexado pelo usuário nesta conversa (2026-11-03). Gates 0 e 1 autorizados; 2–5 exigem autorização específica. O pedido autoriza executar diretamente os lotes independentes, sem novos gates de planejamento.

## Restrições e invariantes

- Manter IDs, títulos, descrições, preços, dados bancários/Pix, telefone e regras reais do evento. Propostas editoriais sensíveis ficam em documento.
- Não alterar indexação, endpoints operacionais, credenciais ou fonte oficial de RSVP sem autorização.
- Não enviar formulários, mensagens, pagamentos ou dados de convidados reais. Testes de rede usam respostas sintéticas locais.
- Chegada às 16h30; cerimônia às 17h; casamento em 19/12/2026; confirmação até 04/12/2026.
- Preservar a identidade botânica; mudanças de acessibilidade ocorrem na interface principal.
- Conservar o Pix livre sem mínimo. Cópia e recado jamais significam pagamento recebido.

## Lotes e interfaces

### 1. RSVP e confiabilidade

Arquivos: `RsvpSection.astro`, utilitário de envio/validação se necessário, testes nativos Node.

- [x] Reproduzir com testes: sucesso por memória do navegador, validação, respostas negativas/malformadas e requisições sem resposta.
- [x] Remover deduplicação por nome e bloqueio silencioso por rapidez; impedir somente submissão concorrente.
- [x] Diferenciar solicitação aceita de presença persistida. Preservar os destinos atuais até Gate A.
- [x] Comparar Web3Forms, Netlify Forms e Sheets verificável; apresentar decisão concreta para autorização.

### 2. Informações e acessibilidade

Arquivos: dados/tipos centrais, Hero, Ceremony, Navbar, Footer, convite, layouts, CSS.

- [x] Centralizar horários/prazo aprovados; agenda como lembrete da data, com horários na descrição e sem encerramento inventado.
- [x] Hero compacto com resumo, três ações, ajuda e fotografia; manter a ordem original das seções conforme correção posterior do usuário.
- [x] Tipografia legível, menu com nome visível, foco, estados, redução de animação e funcionamento básico sem JS.
- [x] Convite coerente, com prioridade para presença/local e impressão.

### 3. Presentes e Pix

Arquivos: GiftsSection, GiftCard, PixModal, pix.ts; relatório editorial.

- [x] Testar Pix sintético: TLV, CRC conhecido, valores, normalização e rejeição de campos inválidos.
- [x] Modal com beneficiário/valor/cópia antes das alternativas, passos persistentes, ajuda e recado sem afirmar pagamento.
- [x] Preservar catálogo e conteúdo sensível; aplicar somente a reorganização de presentes autorizada no Gate D e manter alternativas editoriais como propostas.
- [x] Preservar valor livre informado no banco e tornar o significado explícito.

### 4. Testes

- [x] Testes determinísticos, sem dependência de serviços reais; `npm run check` e `npm run build`.
- [x] Inspeção visual em 320, 360, 390, 768 e 1280 px, teclado, contraste, ampliação e estados principais.
- [x] Evidências antes/depois quando disponíveis; registrar limitações em vez de simular validação.
- [x] Roteiro reproduzível para convidados reais, ainda não executado.

### 5. Consolidação

- [x] README/DESIGN fiéis ao código, rollback, matriz de achados, testes e decisões pendentes.
- [x] Revisão independente única do diff; corrigir achados relevantes e verificar novamente o escopo afetado.
- [x] Classificar a entrega local sem declarar prontidão de publicação com integração crítica pendente.

## Dependências e decisões de execução

- Dados centrais são consumidos por Hero, convite, Ceremony, calendário e metadados; seus contratos devem mudar juntos.
- RSVP e modal compartilham somente estilo/ajuda; mocks não podem chamar os serviços reais.
- Testes carregam o TypeScript existente usando o compilador já instalado e o runner nativo do Node, sem nova dependência.
- Trabalhar na branch local do checkout solicitado; não criar worktree adicional nem executar commits como efeito das skills.
- Nenhuma ordem alternativa de presentes será aplicada sem Gate D, mesmo sendo tecnicamente reversível.

## Registro de progresso e recuperação

- Diagnóstico inicial: árvore limpa, branch criada; arquitetura e revisão dos 24 presentes delegadas somente como análise documental, sem edição da aplicação.
- Linha de base: `npm run check` da análise anterior na mesma base passou sem erros (2 hints); build atual em execução.
- Rollback: revisar `git diff` contra a base, guardar o diff se necessário e reverter somente arquivos deste trabalho; não usar reset/clean global. Nenhum dado externo é migrado neste escopo.

- Correção de escopo do usuário: manter a ordem original das seções (Hero, contagem, história, cerimônia, presentes, confirmação). A autorização anterior para reorganizar os presentes permanece válida.

- Gate A: após a escolha inicial de manter os dois serviços, os noivos autorizaram Web3Forms como único destino e remoção do Sheets. Endpoint/chave Web3Forms e CSP preservados. Gate D: abertura dos presentes mantida; o parágrafo explicativo geral foi retirado por solicitação posterior. Manter a ordem original das seções.
- Núcleo: testes reproduziram falhas e verificaram correções locais de RSVP/Pix. Revisão independente identificou quatro questões de estado assíncrono, carregamento e foco, corrigidas com testes adicionais; resultados finais no relatório de auditoria.

- Validação final: 46 testes de lógica/cliente passaram; check sem erros/warnings, com 2 hints preexistentes; build estático de 3 páginas passou. Testes do build e resultados visuais detalhados em audit-report.md. Nenhuma aprovação de publicação ou integração real foi inferida.

- Ajustes posteriores solicitados em 03/11/2026: uma confirmação por adulto convidado, inclusive acompanhantes; crianças contadas pela mensagem. Local conhecido, sem novas verificações de infraestrutura exigidas. Festa sem horário definido para terminar; agenda como lembrete da data e metadados sem fim. Parágrafo geral dos presentes removido e introdução revisada. Nenhuma mudança adicional na ordem das seções ou nos botões do convite. Resultados atualizados no relatório.

## Envio para revisão — 03/11/2026

- Autorização: “Pode realizar o commit e push da maneira recomendada”, após explicar que o push pode acionar publicação automática. Execução contínua do envio autorizado, sem novo gate para repetir essa decisão.
- Destino: `talesgomes27/talesecamila2026`, remoto `origin`, branch `codex/ux-acessibilidade-casamento`, base `main`. Repositório público; base remota consultada e ainda em `9e163d852ce637852349bb69f55e9dea210ab755`.
- Modo: commit/push da branch de trabalho e pull request em rascunho para revisão. Preview depende das regras externas da Netlify; não há workflow GitHub Actions no checkout nem check registrado no commit base. Configuração de produção da conta não foi acessada.
- Conjunto preparado: aplicação, README/DESIGN, relatórios/evidências e testes desta tarefa. Sem dependências novas, alteração de lockfile ou build `dist` versionado. Inspeção delimitada por padrões não encontrou tokens/chaves privadas nos arquivos a enviar; não equivale a auditoria completa de segredos.
- Verificação fresca: 45/45 testes de lógica/cliente, 3/3 testes do build, check sem erros/warnings e com 2 hints preexistentes, build de 3 páginas e `git diff --check` aprovado.
- Estado deste registro: preparado para commit e push. Hash, URL do PR e eventual resultado do preview serão conferidos após o envio e informados na entrega; não se declara deploy a partir do build local.
- Recuperação: a base está preservada em `main`; corrigir a branch por novo commit se necessário. Sem reescrita de histórico, exclusão de registros ou migração de dados. Um eventual rollback de produção exigiria decisão específica sobre o deployment.
- Fora desta etapa: merge em `main`, publicação manual de produção, submissão Web3Forms, mensagem ou pagamento. O próximo teste de formulário continua dependendo de autorização própria.
