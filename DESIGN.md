---
name: Casamento Tales & Camila 2026
description: Convite de casamento editorial e experiencial com estética de papelaria botânica fina à beira do Rio Guamá
colors:
  primary: "#2B412D"
  primary-deep: "#1D2C1E"
  primary-accent: "#3B573D"
  secondary: "#524622"
  secondary-accent: "#9E9368"
  secondary-light: "#C5BC97"
  neutral-bg: "#FAF8F5"
  neutral-bg-light: "#F5F2EC"
  neutral-bg-dark: "#EAE4DA"
  neutral-text: "#1E241F"
  neutral-muted: "#5C5A54"
  neutral-subtle: "#625E57"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.85
    letterSpacing: "normal"
  label:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
  bezel: "2rem"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-pill-secondary:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary-deep}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
  card-bezel:
    backgroundColor: "{colors.neutral-bg-light}"
    rounded: "{rounded.bezel}"
    padding: "8px"
---

# Design System: Casamento Tales & Camila 2026

## Overview

**Creative North Star: "A Papelaria Botânica do Guamá"**

Este sistema visual traduz a solenidade e o afeto de um convite de papelaria de alta gramatura para o meio digital. Em vez de imitar softwares corporativos ou cair no visual pasteurizado de portais matrimoniais pré-fabricados, cada componente foi estruturado para refletir a ambientação real da cerimônia: o verde denso das copas amazônicas, o dourado solar que reflete nas águas do Rio Guamá e a textura de linho cru com toque artesanal.

O projeto recusa categoricamente ornamentos sintéticos. Não há brilho simulado, glitter em degradê, nem tipografia cursiva ilegível em pincelada (*brush script*). O layout respira com margens amplas, descansos visuais generosos e hierarquia rigorosa. A experiência foi calibrada tanto para dispositivos móveis de convidados no trânsito quanto para parentes idosos navegando em conexões instáveis.

**Key Characteristics:**
- Moldura física dupla (*Double-Bezel*) simulando baixo-relevo de prensagem tipográfica em cartolina nobre.
- Paleta orgânica terrosa ancorada em linho artesanal, verde oliva e ouro champanhe solar.
- Tipografia editorial refinada aliando a expressividade da Playfair Display com a legibilidade neutra da Montserrat.
- Física tátil e microinterações rápidas de 160ms orientadas pelo toque real.
- Resiliência funcional: formulários com alternativas diretas via WhatsApp e chave PIX com cópia em um toque.

## Colors

A paleta é contida e intencionalmente serena. Três famílias cromáticas estabelecem a hierarquia visual sem gerar ruído.

### Primary
- **Oliva Folhagem** (`#2B412D` / `olive-800`): Tom base para botões principais, chamadas para ação primárias e ícones representativos.
- **Oliva Escuro Botânico** (`#1D2C1E` / `olive-900`): Verde profundo para títulos com máxima presença e estados ativos de botões.
- **Oliva Equilibrado** (`#3B573D` / `olive-700`): Usado em anéis de foco, cursor temático de formulários e acentos secundários.

### Secondary
- **Ouro Champanhe Solar** (`#524622` / `gold-text`): Dourado terroso escurecido para metadados, horários, preços e etiquetas editoriais. Cumpre contraste WCAG AAA (>8.6:1) sobre fundo linho.
- **Ouro Champanhe Claro** (`#9E9368` / `gold-accent`): Dourado decorativo para pequenos divisores, folhagens e detalhes de suporte.
- **Ouro Suave** (`#C5BC97` / `gold-light`): Tom luminoso para divisores verticais com transparência e brilho suave.

### Neutral
- **Linho Artesanal Cru** (`#FAF8F5` / `linen`): Cor da tela base de todo o site, simulando papel algodão sem alvejante ótico.
- **Linho Claro** (`#F5F2EC` / `linen-light`): Camada intermediária para cabeçalhos de modais e fundos de seções de suporte.
- **Linho Envelhecido** (`#EAE4DA` / `linen-dark`): Fundo de hover para botões neutros e bordas de separação sutis.
- **Grafite Tinta Nanquim** (`#1E241F` / `ink`): Preto botânico quente para corpo de texto com leitura confortável.
- **Tinta Amortecida** (`#5C5A54` / `ink-muted`): Cinza quente para subtítulos, instruções secundárias e legendas explicativas.
- **Tinta Sutil** (`#625E57` / `ink-subtle`): Rótulos de campos, contadores e placeholders.

### Named Rules
**The Double-Bezel Rule.** Áreas centrais de conversão (formulários, cartões destacados e modais) utilizam o padrão *Doppelrand*: uma moldura externa translúcida de 6px a 8px com anel sutil (`ring-1 ring-olive-900/[0.08]`) encapsulando o cartão interno branco com cantos arredondados coordenados (`calc(2rem - 0.5rem)`). Essa estrutura delimita a informação como um cartão físico pousado sobre papel linho.

**The Contrast Sovereignty Rule.** Nenhum texto de apoio pode ter tamanho inferior a 11px (`0.6875rem`) ou taxa de contraste inferior a 4.5:1. O token `gold-text` opera em `#524622`, assegurando que mesmo convidados lendo o celular sob sol aberto consigam identificar horários e instruções.

## Typography

A tipografia organiza a leitura com contraste clássico: títulos com alma editorial histórica e corpo técnico escaneável.

**Display Font:** Playfair Display (com fallbacks `Georgia, serif`)  
**Body Font:** Montserrat (com fallbacks `system-ui, -apple-system, sans-serif`)  
**Character:** Contraste consciente entre a elegância lírica da serifa e a firmeza geométrica do corpo sem serifa.

### Hierarchy
- **Display** (Regular 400, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.15, tracking -0.02em): Nomes dos noivos no Hero e convite cerimonial. Sempre com `text-wrap: balance`.
- **Headline** (Regular 400, `clamp(1.75rem, 4vw, 2.75rem)`, line-height 1.2, tracking -0.01em): Títulos das seções principais (História, Celebração, Presentes, Presença, Dúvidas).
- **Title** (Regular 400 / Medium 500, `1.125rem` a `1.5rem`, line-height 1.3): Títulos de cartões de presente, nomes dos noivos nos perfis e títulos de modais.
- **Body** (Light 300 / Normal 400, `0.9375rem` a `1rem`, line-height 1.85): Narrativas e orientações aos convidados. Parágrafos usam `text-wrap: pretty` para eliminar viúvas tipográficas.
- **Label / Eyebrow** (Medium 500, `0.6875rem` [11px], line-height 1.4, tracking 0.2em a 0.26em, uppercase): Prazos de confirmação, horários, categorias e micro-etiquetas editoriais.
- **Numbers / Values** (Tabular-nums): Todos os números no cronômetro, preços de presentes e horários da cerimônia aplicam números tabulares (`font-feature-settings: "tnum"` / `.tabular-nums`) para evitar oscilações de layout.

### Named Rules
**The 11px Floor Rule.** O piso absoluto de renderização tipográfica em todo o site é 11px. Nunca reduza fontes de legenda para 9px ou 10px, preservando a usabilidade para visitantes de qualquer faixa etária.

## Layout

O modelo espacial estabelece fluidez responsiva com grades balanceadas e limites de leitura confortáveis.

- **Contêineres de Conteúdo:** O site adota largura máxima de leitura de `max-w-3xl` (768px) para narrativa biográfica e formulário de presença, e `max-w-7xl` (1280px) para a vitrine de presentes.
- **Grade dos Presentes:** 1 coluna no mobile (`grid-cols-1`), 2 colunas em tablets (`sm:grid-cols-2`) e 3 colunas em telas amplas (`lg:grid-cols-3`), com espaçamento `gap-7` a `gap-9`.
- **Ritmo Vertical:** Seções principais mantêm respiro de `py-24` (96px) no mobile e `py-32` (128px) no desktop, com divisores de seção em linha quase imperceptível (`border-t border-olive-900/[0.06]`).
- **Navegação Fixa:** Barra superior em ilha flutuante compacta (`bg-linen/90 backdrop-blur-md`) com anel suave de contorno, recolhendo-se e iluminando seções ativas via Intersection Observer.

## Elevation & Depth

Este sistema não emprega sombras pretas pesadas de software nem relevos falsos com chanfros 3D. A profundidade é puramente tonal e atmosférica.

- **Filosofia Tonal:** Os elementos ganham destaque através de contrastes de superfícies claras sobre linho (`#FAF8F5` base -> camada em `#F5F2EC` -> núcleo do cartão em `#FFFFFF`).
- **Textura Tátil:** O fundo geral aplica granulação fina de papel em overlay com baixa opacidade (`opacity: 0.025` na classe `.editorial-grain`), garantindo textura analógica com zero impacto no paint do navegador.
- **Vocabulário de Sombras:**
  - *Double-bezel resting:* `box-shadow: 0 24px 48px -18px rgba(29, 44, 30, 0.08), 0 4px 12px -2px rgba(29, 44, 30, 0.03)`
  - *Botão em repouso:* Plano sobre o papel; em `:hover` projeta sombra suave de elevação: `0 10px 24px -6px rgba(29, 44, 30, 0.22)`
  - *Modal `<dialog>` aberto:* Sombra profunda direcionada: `0 32px 64px -16px rgba(29, 44, 30, 0.35)` com backdrop desfocado `backdrop-blur-sm bg-black/60`

### Named Rules
**The Respectful Motion Rule.** Todas as transições espaciais (`transform`, `translateY`) e animações em cascata são rigorosamente desativadas quando o usuário sinaliza `prefers-reduced-motion: reduce`. Nessas circunstâncias, os elementos aparecem imediatamente estáticos com opacidade total, sem desorientação motora.

## Shapes

A linguagem de contornos equilibra o rigor geométrico com curvas orgânicas inspiradas na natureza:

- **Molduras Orgânicas Fotográficas (`organic-hero-frame`):** As fotos do casal no Hero e na História utilizam curvas fluidas com valores de `border-radius` assimétricos (`54% 46% 62% 38% / 48% 58% 42% 52%`), criando a sensação de um recorte botânico artesanal.
- **Cartões e Caixas:** Raio generoso de `rounded-[2rem]` (32px) na moldura externa e `calc(2rem - 0.5rem)` (24px) no núcleo interno.
- **Botões e Tags:** Formato de pílula contínua (`rounded-full` / `9999px`), transmitindo conforto ao toque e clareza de acionamento.
- **Campos de Texto:** Cantos suaves em `rounded-2xl` (16px), confortáveis para toque no mobile.

## Components

Os componentes são ferramentas de acolhimento: intuitivos, resilientes e com área de toque mínima de 44px de altura em conformidade com as Leis de Fitts e WCAG 2.5.8.

### Buttons
- **Botão Primário (`.btn-pill` com `bg-olive-800`):** Pílula de cor sólida verde oliva, texto em linho claro, tracking expandido (`tracking-[0.16em]`) e tipografia de 12px uppercase. Em dispositivos com cursor fino, eleva 1px no hover; ao toque de clique, retrai em física elástica (`scale(0.97)` em 160ms).
- **Botão Secundário / Ação Alternativa (`bg-linen text-olive-900 ring-1 ring-olive-900/15`):** Pílula neutra com anel sutil para ações secundárias como "Tentar Novamente", "Confirmar outro convidado" e "Ver mais opções".
- **Botão de WhatsApp (`bg-olive-700 hover:bg-olive-800`):** Acento botânico com ícone oficial SVG embutido, acionando a mensagem pré-formatada sem transição de contexto confusa.

### Cards / Containers
- **Cartão de Presente (`.gift-card`):** Moldura dupla leve, imagem com proporção 4:3 com zoom sutil no hover (`scale(1.035)`), título serifado e valor em ouro champanhe tabular. Possui `content-visibility: auto` para desempenho fluido de rolagem.
- **Controle de Expansão Progressiva:** O grid de presentes exibe inicialmente um lote de 9 cartões. O botão centralizado "Ver mais opções (+15)" revela os cartões restantes com animação suave e sem recarga de página.

### Inputs / Fields
- **Estilo:** Fundo linho semi-translúcido (`bg-linen/70`), anel delicado `ring-1 ring-olive-900/10` e altura mínima de 48px.
- **Foco:** Anel reforçado verde oliva (`focus:ring-2 focus:ring-olive-700`) e fundo clareado para branco puro.
- **Caret Temático:** O cursor de digitação pulsa no verde oliva da paleta (`caret-color: #3B573D`).
- **Placeholder:** Cor `#5F6359`, garantindo contraste legível com instruções contextuais claras (como orientar a menção a crianças).

### Modal PIX (`PixModal.astro`)
- **Arquitetura Dialog:** Elemento HTML5 `<dialog>` nativo. No desktop funciona como modal centralizado; no mobile ancora-se como uma folha inferior (*bottom-sheet*) com indicador táctil de puxar.
- **Duplo Acesso à Chave:** Oferece tanto o botão central de "Copiar Código" (payload completo do QR Code dinâmico com valor) quanto o botão "Copiar chave" avulso ao lado da chave aleatória, apoiando convidados idosos em bancos tradicionais.

## Do's and Don'ts

### Do:
- **Do** manter todas as molduras de cartões principais dentro da estrutura `.double-bezel` para preservar o efeito de papelaria fina.
- **Do** aplicar `text-wrap: balance` em títulos e `text-wrap: pretty` em parágrafos de narrativa.
- **Do** assegurar altura mínima de toque de 44px (ou preferencialmente 48px) em botões, campos e opções selecionáveis.
- **Do** utilizar `tabular-nums` em qualquer exibição de valor financeiro, contagem regressiva ou horário da programação.
- **Do** manter mensagens de commit em minúsculas e seguindo Conventional Commits (`feat: ...`, `fix: ...`, `docs: ...`).

### Don't:
- **Don't** introduzir gradientes coloridos tecnológicos, roxos, azuis elétricos ou padrões visuais de SaaS corporativo.
- **Don't** aplicar fontes cursivas de pincelada (*brush script*) ilegíveis ou simulações baratas de glitter/dourado brilhante.
- **Don't** usar sombras pretas sólidas (`rgba(0,0,0,0.5)`); utilize sempre sombras coloridas baseadas no verde oliva (`rgba(29, 44, 30, ...)`).
- **Don't** criar textos informativos com tamanho menor que 11px.
- **Don't** depender exclusivamente do envio online de formulário; mantenha sempre a rota de contingência via WhatsApp.
