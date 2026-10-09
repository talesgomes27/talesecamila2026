# PLANO DE IMPLEMENTAÇÃO: MIGRAÇÃO PARA ASTRO FRAMEWORK
**Projeto:** Site de Casamento — Tales & Camila 2026  
**Autor:** Arquiteto de Software & Engenheiro Frontend Sênior  
**Versão:** 1.0.0  
**Status:** Pronto para Execução  
**Alvo Arquitetural:** Astro (Pure Static SSG) + TypeScript + Tailwind CSS + Netlify Hosting  

---

## 1. DIAGNÓSTICO DO ESTADO ATUAL

### 1.1. Inventário de Arquivos e Recursos

| Caminho Relativo | Tipo | Linhas / Tamanho | Responsabilidade Atual |
| :--- | :--- | :--- | :--- |
| `index.html` | Página | 667 linhas (~34.4 KB) | SPA estática com Hero, Cronômetro, O Casal, Carrossel, Cerimônia, Presentes com PIX, RSVP e Footer. Contém configuração inline do Tailwind CDN. |
| `convite/index.html` | Página | 386 linhas (~18.0 KB) | Convite digital interativo e imprimível (`@media print`), bordas duplas nobres, moldura orgânica, QR Code dinâmico e botões de ação social. |
| `css/style.css` | Folha de Estilo | 183 linhas (~4.0 KB) | Variáveis CSS de tema (`--color-*`), molduras orgânicas artísticas (`.organic-hero-frame`, `.organic-profile-frame`), transições do carrossel e texturas. |
| `js/config.js` | Configuração | 294 linhas (~12.8 KB) | Objeto global `window.CONFIG` contendo todos os dados do casal, 14 fotos do carrossel, dados da cerimônia, chaves PIX, 19 cotas de presentes e RSVP. |
| `js/pix.js` | Script / Utilitário | 90 linhas (~2.4 KB) | Algoritmo puro de montagem de payload EMVCo e cálculo CRC16-CCITT padronizado pelo Banco Central do Brasil para PIX Copia e Cola. |
| `js/main.js` | Script / Lógica | 602 linhas (~23.6 KB) | Bootstrap do DOM, cronômetro regressivo, transição e touch-swipe do carrossel, filtro da lista de presentes, modal PIX com QR code e envio de RSVP. |
| `assets/imagens/` | Assets | 7 arquivos (~13.0 MB) | `casal.jpg`, `noiva.jpg`, `noivo.jpg`, `cerimonia.jpeg`, `preview-convite.jpg` e originais de alta resolução (`noiva.jpeg`, `noivo.jpeg`). |
| `assets/imagens/carrossel/` | Assets | 14 arquivos (~38.0 MB) | Fotos do ensaio pré-wedding (`01.jpg.jpeg` a `15.png`). |
| `assets/svgs/` | Assets Vetoriais | 3 arquivos (~8.2 KB) | `botanical-branch.svg`, `hero-frame-leaves.svg`, `leaf-icon.svg`. |
| `netlify.toml` | Infraestrutura | 16 linhas | Configuração de headers HTTP de segurança e política de cache imutável de assets. |
| `_redirects` | Infraestrutura | 4 linhas | Roteamento limpo das URLs `/convite` e SPA fallback. |

---

### 1.2. Mapeamento de Dependências Externas

1. **Tailwind CSS CDN (`https://cdn.tailwindcss.com`)**:
   - *Uso Atual:* Compilação JIT no navegador do cliente via script síncrono.
   - *Impacto:* Bloqueio de renderização (FOUC), overhead de processamento no dispositivo móvel e bundle de ~350 KB transferido em tempo de execução.
   - *Destino no Astro:* Migração para integração oficial `@astrojs/tailwind` com compilação zero-runtime no build.
2. **Google Fonts (CDN)**:
   - *Fontes:* `Playfair Display` (Serif títulos), `Cormorant Garamond` (Itálico & elegância), `Montserrat` (Textos e botões).
   - *Destino no Astro:* Pré-carregamento otimizado com tags `<link rel="preload">` ou integração self-hosted via `@fontsource`.
3. **QRCode.js (`https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js`)**:
   - *Uso Atual:* Geração de imagem canvas/table para QR Code PIX e QR Code do convite com fallback para API pública `api.qrserver.com`.
   - *Destino no Astro:* Pacote npm tipado `qrcode` utilizado em script isolado ou gerado estaticamente em build.
4. **Google Maps Embed (Iframe)**:
   - *Uso Atual:* Iframe responsivo para localização do evento no Beira Rio, São Miguel do Guamá - PA.
   - *Destino no Astro:* Componente Astro isolado com `loading="lazy"` nativo.

---

### 1.3. Funcionalidades Interativas Identificadas no JS Original

1. **Contagem Regressiva em Tempo Real (`initCountdown`)**:
   - Cálculo contínuo (intervalo de 1s) para `2026-12-19T16:00:00`.
   - Formatação `padStart(2, '0')` para Dias, Horas, Minutos e Segundos.
   - Estado final reativo com mensagem *"O grande dia chegou! ❤️"*.
2. **Carrossel Pré-Wedding (`initCoupleSection`)**:
   - Trilho com transição suave via CSS Transform `translateX(-${currentIndex * 100}%)`.
   - Ambient Glow: fundo desfocado com `blur-2xl` e imagem principal centralizada com `object-contain`.
   - Suporte a toque móvel (Touch Events: `touchstart`, `touchend`, detecção de swipe > 40px).
   - Autoplay com pausa no hover e navegação direta por indicadores clicáveis (dots).
3. **Catálogo de Presentes e Ordenação (`initGiftsSection`)**:
   - Renderização dos 19 itens da lista.
   - Ordenação dinâmica no cliente: "Menor Preço" (`price-asc`), "Maior Preço" (`price-desc`) e ordem padrão.
4. **Modal PIX e Integração WhatsApp (`initPixModal`)**:
   - Emissão dinâmica de carga útil EMVCo via `generatePixPayload()`.
   - Renderização de QR Code instantâneo.
   - Cópia para área de transferência (`navigator.clipboard.writeText`) com feedback visual no botão e notificação Toast.
   - Disparo de mensagem personalizada via WhatsApp com valor e nome do convidado.
5. **Barra de Navegação Sticky (`initNavbar`)**:
   - Detecção de scroll (`window.scrollY > 40`) aplicando glassmorphism (`backdrop-blur-md`, fundo translúcido e sombra).
   - Menu hambúrguer móvel retrátil.
6. **Confirmação de Presença RSVP (`initRsvpSection`)**:
   - Submissão assíncrona via `fetch` para o endpoint estático do Netlify Forms (`method: 'POST'`).
   - Exibição condicional de mensagem de agradecimento sem reload da página.
7. **Convite Digital Interativo (`convite/index.html`)**:
   - Geração de QR Code do site principal.
   - Links diretos para adição de evento no Google Calendar e rotas no Google Maps/Waze.
   - Compartilhamento no WhatsApp com template de texto pré-codificado.

---

## 2. ARQUITETURA ALVO (ASTRO FRAMEWORK)

### 2.1. Princípios Arquiteturais
- **Output Estático:** `output: 'static'` garantindo geração de arquivos HTML/CSS puros sem dependência de runtime Node.js no Netlify.
- **Islands Architecture com Zero JS por Padrão:** Todo HTML e estilização serão gerados no momento do build. Scripts JavaScript serão restritos a tags `<script>` isoladas apenas onde há interatividade necessária (cronômetro, modal PIX, carrossel e formulário).
- **Desacoplamento de Conteúdo:** Separação estrita entre dados estruturados (`src/data/weddingData.ts`), tipagem (`src/types/wedding.ts`) e camada visual (`.astro`).
- **Compatibilidade CSS 100%:** Preservação integral das classes utilitárias, seletores e regras personalizadas de moldura orgânica.

---

### 2.2. Árvore de Diretórios Alvo

```
talesecamila2026/
├── public/
│   ├── assets/
│   │   ├── imagens/
│   │   │   ├── carrossel/
│   │   │   │   ├── 01.jpg.jpeg
│   │   │   │   ├── ... (14 fotos)
│   │   │   │   └── 15.png
│   │   │   ├── casal.jpg
│   │   │   ├── noiva.jpg
│   │   │   ├── noivo.jpg
│   │   │   ├── noiva.jpeg
│   │   │   ├── noivo.jpeg
│   │   │   ├── cerimonia.jpeg
│   │   │   └── preview-convite.jpg
│   │   └── svgs/
│   │       ├── botanical-branch.svg
│   │       ├── hero-frame-leaves.svg
│   │       └── leaf-icon.svg
│   ├── _redirects
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── LeafIcon.astro
│   │   │   └── Toast.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── Countdown.astro
│   │   │   ├── CoupleStory.astro
│   │   │   ├── Carousel.astro
│   │   │   ├── Ceremony.astro
│   │   │   ├── GiftsSection.astro
│   │   │   ├── GiftCard.astro
│   │   │   ├── PixModal.astro
│   │   │   └── RsvpSection.astro
│   │   └── convite/
│   │       ├── InvitationCard.astro
│   │       ├── InvitationActions.astro
│   │       └── InvitationQrCode.astro
│   ├── data/
│   │   └── weddingData.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── InvitationLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── convite/
│   │       └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── wedding.ts
│   └── utils/
│       ├── currency.ts
│       ├── date.ts
│       └── pix.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── netlify.toml
└── package.json
```

---

### 2.3. Mapeamento de Componentes: HTML Original ➔ Componentes Astro

| Seção no HTML Original | Componente Astro Destino | Tipo de Renderização | Responsabilidade |
| :--- | :--- | :--- | :--- |
| `<nav id="navbar">` | `src/components/common/Navbar.astro` | Estático + Script | Navbar com logo, links de rolagem suave e menu mobile. |
| `<section id="hero">` | `src/components/home/Hero.astro` | Estático puro | Título, nomes, data e moldura orgânica com foto do casal. |
| `<section id="countdown-banner">` | `src/components/home/Countdown.astro` | Estático + Script | Faixa verde com contagem regressiva em tempo real. |
| `<section id="casal">` (História) | `src/components/home/CoupleStory.astro` | Estático puro | Fotos individuais em molduras orgânicas e texto da história. |
| `#carousel-container` | `src/components/home/Carousel.astro` | Estático + Script | Carrossel de 14 fotos com blur, touch-swipe e dots. |
| `<section id="cerimonia">` | `src/components/home/Ceremony.astro` | Estático puro | Card do local, data, notas, botões Maps/Waze e iframe Google Maps. |
| `<section id="presentes">` | `src/components/home/GiftsSection.astro` | Estático + Script | Cabeçalho da seção, select de ordenação e grid de presentes. |
| `.gift-card` | `src/components/home/GiftCard.astro` | Estático puro | Card individual de cota de presente com botão "Presentear". |
| `#pix-modal` | `src/components/home/PixModal.astro` | Estático + Script | Modal com cálculo de carga PIX, QR code dinâmico e cópia. |
| `<section id="rsvp">` | `src/components/home/RsvpSection.astro` | Estático + Script | Formulário com suporte nativo ao Netlify Forms e envio AJAX. |
| `<footer>` | `src/components/common/Footer.astro` | Estático puro | Rodapé com mensagem de carinho e créditos. |
| `/convite/index.html` | `src/pages/convite/index.astro` | Estático + Script | Página do convite com bordas nobres, QR Code e botões. |

---

### 2.4. Especificação de Tipagem TypeScript (`src/types/wedding.ts`)

```typescript
export interface CoupleInfo {
  groom: string;
  bride: string;
  names: string;
  displayDate: string;
  heroSubtitle: string;
  heroPhoto: string;
}

export interface GalleryPhoto {
  url: string;
  caption: string;
}

export interface CoupleStory {
  title: string;
  subtitle: string;
  groomName: string;
  groomPhoto: string;
  brideName: string;
  bridePhoto: string;
  text: string;
  gallery: GalleryPhoto[];
}

export interface CeremonyInfo {
  title: string;
  venueName: string;
  venuePhoto: string;
  dateFormatted: string;
  time: string;
  notes: string;
  address: string;
  mapsEmbedUrl: string;
  mapsUrl: string;
  wazeUrl: string;
}

export interface PixConfig {
  key: string;
  recipientName: string;
  bank: string;
  city: string;
  whatsappNumber: string;
}

export interface GiftItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface RsvpConfig {
  title: string;
  subtitle: string;
  deadlineText: string;
  mode: 'netlify' | 'google_forms';
  googleFormsUrl?: string;
}

export interface WeddingData {
  couple: CoupleInfo;
  weddingDate: string; // Formato ISO 8601: "YYYY-MM-DDTHH:MM:SS"
  story: CoupleStory;
  ceremony: CeremonyInfo;
  pix: PixConfig;
  gifts: GiftItem[];
  rsvp: RsvpConfig;
  meta: {
    siteUrl: string;
    ogImage: string;
    description: string;
  };
}
```

---

## 3. FASES DE EXECUÇÃO PASSO A PASSO

### Fase 1: Preparação do Ambiente e Assets

1. **Inicialização do Projeto Astro:**
   - Criar `package.json` com dependências estritas:
     - `astro`: `^4.x` ou `^5.x`
     - `@astrojs/tailwind`: `^5.x`
     - `tailwindcss`: `^3.4.x`
     - `qrcode`: `^1.5.3` (para tipagem e geração robusta de QR Code)
     - `typescript`: `^5.x`
     - `@types/qrcode`: `^1.5.5`
2. **Configuração do `astro.config.mjs`:**
   ```javascript
   import { defineConfig } from 'astro/config';
   import tailwind from '@astrojs/tailwind';

   export default defineConfig({
     output: 'static',
     site: 'https://talesecamila2026.netlify.app',
     integrations: [tailwind({ applyBaseStyles: false })],
   });
   ```
3. **Configuração do `tailwind.config.mjs`:**
   - Migrar toda a extensão de tema existente no script CDN para o arquivo de configuração compilado:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
     theme: {
       extend: {
         colors: {
           linen: {
             DEFAULT: '#FAF8F5',
             light: '#F5F3EF',
             dark: '#ECE8E1'
           },
           olive: {
             50: '#F2F6F3',
             100: '#E3ECE4',
             200: '#C8D9C9',
             500: '#628E64',
             600: '#507552',
             700: '#406042',
             800: '#324B34',
             900: '#233524'
           },
           gold: {
             accent: '#A39B75'
           }
         },
         fontFamily: {
           serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
           cormorant: ['"Cormorant Garamond"', 'serif'],
           sans: ['"Montserrat"', 'system-ui', 'sans-serif']
         }
       }
     },
     plugins: []
   };
   ```
4. **Migração de Assets:**
   - Copiar pasta `assets/` para `public/assets/`, mantendo rigorosamente os nomes e caminhos de imagens e SVGs.
   - Manter `public/_redirects` para preservar rotas limpas no Netlify.
5. **CSS Global (`src/styles/global.css`):**
   - Importar Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`).
   - Importar Google Fonts e transferir regras existentes de `css/style.css` (`:root`, `.organic-hero-frame`, `.organic-profile-frame`, `.bg-linen-texture`, etc.).

---

### Fase 2: Layout Base e Centralização de Dados

1. **Criação de `src/data/weddingData.ts`:**
   - Migrar todo o conteúdo de `js/config.js` tipado com `WeddingData`.
   - Garantir paridade dos 19 presentes e das 14 fotos do carrossel.
2. **Criação de `src/layouts/BaseLayout.astro`:**
   - Template HTML estrutural comum (`<!DOCTYPE html>`, `<html lang="pt-BR">`).
   - Head completo: meta charset, viewport, título dinâmico, meta description, favicon e tags Open Graph / Twitter Card completas (`og:image`, `og:title`, etc.).
   - Preconnect e carregamento otimizado de fontes.
   - Slot para injeção de conteúdo das páginas (`<slot />`).
   - Inclusão dos componentes globais `<Navbar />`, `<Toast />` e `<Footer />`.
3. **Criação de `src/layouts/InvitationLayout.astro`:**
   - Layout dedicado para `/convite` contendo estilos de background com padrão pontilhado radial e regras `@media print`.

---

### Fase 3: Componentização da Página Principal (`/`)

1. **`Hero.astro`:**
   - Recebe `couple` como prop.
   - Renderiza ramos botânicos em SVG, nomes e moldura orgânica com `casal.jpg`.
2. **`Countdown.astro`:**
   - Renderiza markup estático dos quatro blocos (Dias, Horas, Minutos, Segundos).
   - Tag `<script>` embutida consumindo `weddingData.weddingDate` via dataset ou variável injetada, recalculando em tempo real.
3. **`CoupleStory.astro` & `Carousel.astro`:**
   - `CoupleStory.astro`: renderiza fotos circulares dos noivos com as classes `.organic-profile-frame`, textos e nomes.
   - `Carousel.astro`: itera sobre `weddingData.story.gallery` gerando slides com a técnica de ambient blur (`blur-2xl` no fundo + `object-contain` na foto principal), botões prev/next e dots com quebra responsiva.
4. **`Ceremony.astro`:**
   - Card estático com foto do Beira Rio, horário, endereço, botões de ação e iframe lazy do Google Maps.
5. **`GiftsSection.astro`, `GiftCard.astro` & `PixModal.astro`:**
   - `GiftCard.astro`: componente reutilizável com imagem, título, preço formatado e botão "Presentear".
   - `GiftsSection.astro`: renderiza a lista e script de ordenação.
   - `PixModal.astro`: modal com inputs, dados bancários, botão copiar e QR code gerado dinamicamente.
6. **`RsvpSection.astro`:**
   - Formulário HTML com atributos `data-netlify="true"`, `name="rsvp"`, inputs ocultos para bots (`bot-field`) e script de envio AJAX com feedback toast.
7. **Página `src/pages/index.astro`:**
   - Composição de todos os blocos em um arquivo limpo e declarativo:
   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import Hero from '../components/home/Hero.astro';
   import Countdown from '../components/home/Countdown.astro';
   import CoupleStory from '../components/home/CoupleStory.astro';
   import Ceremony from '../components/home/Ceremony.astro';
   import GiftsSection from '../components/home/GiftsSection.astro';
   import RsvpSection from '../components/home/RsvpSection.astro';
   import PixModal from '../components/home/PixModal.astro';
   import { weddingData } from '../data/weddingData';
   ---

   <BaseLayout title={`${weddingData.couple.names} | Nosso Casamento`}>
     <Hero couple={weddingData.couple} />
     <Countdown targetDate={weddingData.weddingDate} />
     <CoupleStory story={weddingData.story} />
     <Ceremony ceremony={weddingData.ceremony} />
     <GiftsSection gifts={weddingData.gifts} />
     <RsvpSection rsvp={weddingData.rsvp} />
     <PixModal pix={weddingData.pix} />
   </BaseLayout>
   ```

---

### Fase 4: Migração da Página do Convite (`/convite`)

1. **Página `src/pages/convite/index.astro`:**
   - Utiliza `<InvitationLayout.astro />`.
   - Renderiza a moldura nobre com borda dupla (`.card-border`), ramos decorativos em SVG e detalhes do evento.
   - **Suporte a Parâmetro de Convidado:**
     - Leitura de parâmetro de query string no cliente (`?convidado=Nome` ou `?nome=Nome`) via script embutido:
     ```html
     <h3 id="guest-greeting" class="font-cormorant italic text-xl text-olive-700 hidden">
       Querido(a) <span id="guest-name"></span>,
     </h3>
     ```
     - Caso o parâmetro esteja presente, personaliza a saudação do convite automaticamente.
2. **Componentes do Convite:**
   - `<InvitationCard.astro />`: container com moldura artística e informações essenciais.
   - `<InvitationActions.astro />`: links para RSVP, Google Calendar, Maps e WhatsApp.
   - `<InvitationQrCode.astro />`: QR Code do site principal gerado dinamicamente.

---

### Fase 5: Migração da Lógica Interativa (Scripts Isolados em TypeScript)

1. **Módulo PIX (`src/utils/pix.ts`):**
   - Converter `js/pix.js` para TypeScript estrito com tipagem de parâmetros:
   ```typescript
   export interface PixPayloadParams {
     key: string;
     recipientName: string;
     city: string;
     amount?: number;
     txid?: string;
   }
   export function generatePixPayload(params: PixPayloadParams): string;
   ```
2. **Scripts no Cliente (Client-Side Scripts no Astro):**
   - Utilizar `<script>` no final de cada componente Astro. O Astro compila e empacota automaticamente o TypeScript cliente sem necessidade de carregar bibliotecas externas pesadas.
   - Separar handlers em eventos limpos (`DOMContentLoaded` não é obrigatório em scripts Astro empacotados, mas pode ser usado com segurança).

---

### Fase 6: Otimização e Deploy no Netlify

1. **Configuração de Build no `netlify.toml`:**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"

   [[headers]]
     for = "/assets/*"
     [headers.values]
       Cache-Control = "public, max-age=31536000, immutable"

   [[headers]]
     for = "/_astro/*"
     [headers.values]
       Cache-Control = "public, max-age=31536000, immutable"
   ```
2. **Preservação de Netlify Forms:**
   - Como o Astro gera arquivos HTML estáticos no diretório `dist/`, o robô de deploy do Netlify indexa o formulário `<form name="rsvp" data-netlify="true">` normalmente durante a fase de pós-processamento.
   - Garantir a presença do input `<input type="hidden" name="form-name" value="rsvp" />`.
3. **Verificação de Roteamento:**
   - As rotas `/` e `/convite/` serão geradas como `dist/index.html` e `dist/convite/index.html`, eliminando qualquer necessidade de redirects complexos e garantindo carregamento instantâneo.

---

## 4. CHECKLIST DE VALIDAÇÃO VISUAL E FUNCIONAL

### 4.1. Paridade Visual e Responsividade
- [ ] **Paleta de Cores Fiel:** Fundos `#FAF8F5` / `#F5F3EF`, verde oliva `#507552`, dourado `#A39B75` e bordas `#C8D9C9`.
- [ ] **Tipografia:** Fontes Playfair Display, Cormorant Garamond e Montserrat renderizando idênticas em desktop e mobile.
- [ ] **Molduras Orgânicas:**
  - [ ] Moldura Hero (`.organic-hero-frame`) com folhas decorativas em volta e foto `casal.jpg` com `object-position: center 38%`.
  - [ ] Molduras dos noivos (`.organic-profile-frame`) com os retratos de Tales e Camila perfeitamente alinhados e centralizados.
- [ ] **Responsividade em Dispositivos Móveis:**
  - [ ] Teste em telas ultra-compactas (360px - 390px): sem scroll horizontal indesejado.
  - [ ] Teste em smartphones padrão (390px - 430px): padding equilibrado e legibilidade de textos.
  - [ ] Dots do carrossel organizados com quebra suave sem estourar a largura da tela.
- [ ] **Impressão do Convite (`@media print`):** Acesso à rota `/convite` e comando de impressão sem quebras de layout ou botões desnecessários visíveis.

### 4.2. Paridade Funcional
- [ ] **Cronômetro:** Contagem regressiva decrescendo a cada segundo com cálculo exato de dias, horas, minutos e segundos até 19/12/2026.
- [ ] **Carrossel Pré-Wedding:**
  - [ ] 14 fotos presentes e navegáveis.
  - [ ] Ambient blur ativo no background dos slides.
  - [ ] Touch-swipe funcional em dispositivos móveis.
  - [ ] Autoplay de 6s pausando quando o cursor estiver sobre o carrossel.
- [ ] **Lista de Presentes:**
  - [ ] 19 cotas carregadas corretamente a partir de `weddingData.ts`.
  - [ ] Filtro por menor preço ordenando de forma crescente.
  - [ ] Filtro por maior preço ordenando de forma decrescente.
- [ ] **Modal PIX:**
  - [ ] Abertura suave ao clicar em "Presentear" em qualquer card.
  - [ ] QR Code renderizado nitidamente.
  - [ ] Botão "Copiar Código" inserindo a string EMVCo na área de transferência com toast de feedback.
  - [ ] Botão de envio no WhatsApp abrindo conversa com texto contendo o presente e o valor.
- [ ] **Confirmação de Presença (RSVP):**
  - [ ] Envio assíncrono capturado pelo painel da Netlify.
  - [ ] Mensagem de confirmação exibida sem recarregar a página.
- [ ] **Convite Digital:**
  - [ ] QR Code do site funcional ao escanear com a câmera.
  - [ ] Botão "Adicionar ao Calendário Google" abrindo evento preenchido com data e local.
  - [ ] Botão "Como Chegar" direcionando para rota do Beira Rio.
  - [ ] Botão "Compartilhar Convite no WhatsApp" com template pronto.
- [ ] **Console do Navegador:** Zero erros ou avisos de recursos ausentes (404) ou scripts não resolvidos.

---

## 5. BENEFÍCIOS TÉCNICOS DA MIGRAÇÃO

1. **Performance:** Redução drástica do payload inicial através da compilação do Tailwind e eliminação de scripts CDN não cacheados.
2. **Manutenibilidade:** Qualquer alteração em nomes, endereços, fotos, presentes ou chaves PIX ocorre em um único ponto centralizado (`src/data/weddingData.ts`) com validação de tipos TypeScript em tempo de compilação.
3. **Escalabilidade de Componentes:** Código HTML desacoplado em blocos semânticos e testáveis, tornando fácil adicionar novas seções (músicas, timeline ou padrinhos).
4. **Deploy Robusto no Netlify:** Build estático padronizado (`npm run build`) compatível com pré-visualizações de pull requests e CDN global instantâneo.
