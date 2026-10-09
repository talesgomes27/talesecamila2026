# 💍 Site de Casamento Tales & Camila 2026 (Astro + TypeScript + Tailwind)

Site completo de casamento desenvolvido com **Astro**, **TypeScript** e **Tailwind CSS**, inspirado no design visual do **casar.com**.

O projeto conta com paleta de cores off-white/linho e verde oliva, tipografia romântica serifada, cronômetro regressivo em tempo real, carrossel de fotos, lista de presentes interativa com geração dinâmica de QR Code PIX e formulário RSVP com Netlify Forms.

---

## ✨ Recursos & Seções

1. **Cabeçalho Hero**: Nomes dos noivos em destaque com tipografia serifada, data formatada e foto emoldurada em recorte orgânico/artístico fluido com folhagens botânicas.
2. **Barra Fixa de Navegação**: Menu sticky com efeito blur (*glassmorphism*) ao rolar a página e menu drawer para celulares.
3. **Contagem Regressiva**: Faixa em verde oliva suave com contagem regressiva em tempo real (Dias, Horas, Minutos, Segundos) calculada automaticamente.
4. **O Casal**: Fotos de perfil em molduras orgânicas, história de amor e carrossel de fotos interativo (com suporte a gestos touch/swipe em smartphones).
5. **Cerimônia & Recepção**: Foto do local, informações de data/horário/pontualidade, mapa interativo do Google Maps e botões diretos para Google Maps e Waze.
6. **Lista de Presentes com PIX Dinâmico**:
   - Grid de cotas com títulos bem-humorados e itens de lua de mel.
   - Ordenação por maior e menor preço.
   - **Modal de Pagamento PIX**:
     - Resumo do item e valor.
     - QR Code PIX gerado dinamicamente no padrão oficial do Banco Central (EMVCo).
     - Código PIX Copia e Cola com botão de cópia em 1 clique e feedback visual.
     - Campo de recado aos noivos com botão direto para envio via WhatsApp.
7. **Confirmação de Presença (RSVP)**:
   - Formulário nativo com suporte a **Netlify Forms** (`data-netlify="true"`).
   - Envio assíncrono (AJAX) com mensagens de feedback instantâneas.
8. **Convite Digital Completo (`/convite`)**:
   - Página exclusiva para envio via WhatsApp, com prévia elegante e botões de ação rápida.
   - QR code para acesso ao site, link para o Google Maps, botão de adicionar ao Google Calendar e atalho para impressão/PDF (`@media print`).

---

## 📁 Estrutura do Projeto

```text
├── public/                 # Assets estáticos servidos na raiz (imagens, SVGs, _redirects)
├── src/
│   ├── components/         # Componentes Astro reutilizáveis
│   │   ├── common/         # Navbar, Footer, Toast, LeafIcon
│   │   └── home/           # Hero, Countdown, Carousel, Ceremony, Gifts, PixModal, RSVP
│   ├── data/               # Dados desacoplados e tipados (weddingData.ts)
│   ├── layouts/            # Layouts principais (BaseLayout, InvitationLayout)
│   ├── pages/              # Rotas estáticas: / (index.astro) e /convite (convite/index.astro)
│   ├── styles/             # CSS global e diretivas do Tailwind (global.css)
│   ├── types/              # Definições de tipos TypeScript (wedding.ts)
│   └── utils/              # Utilitários (formatação de moeda BRL, gerador PIX EMVCo)
├── legacy/                 # Código original legado (HTML/CSS/JS) arquivado com segurança
├── astro.config.mjs        # Configuração do Astro (modo static)
├── tailwind.config.mjs     # Configuração dos tokens de cores e tipografia
├── tsconfig.json           # Configurações do TypeScript
└── netlify.toml            # Configuração de build e publicação do Netlify
```

---

## ⚙️ Como Personalizar Dados (`src/data/weddingData.ts`)

Todos os dados do casamento estão centralizados e fortemente tipados em **`src/data/weddingData.ts`**:

```typescript
export const weddingData: WeddingData = {
  couple: {
    names: "Tales & Camila",
    displayDate: "19 | 12 | 2026",
    heroSubtitle: "VAMOS NOS CASAR!",
    heroPhoto: "/assets/imagens/casal.jpg"
  },
  weddingDate: "2026-12-19T16:00:00",
  ceremony: {
    venueName: "Beira Rio, no antigo Empresa Bar",
    dateFormatted: "19 de Dezembro de 2026",
    time: "16h00",
    address: "Av. Lauro Sodré, 146 - São Miguel do Guamá, PA, 68660-000",
    // links do Google Maps e Waze...
  },
  pix: {
    key: "f3050a56-c7b2-48f5-b369-df2f9a43641a",
    recipientName: "Tales Wilhame Gomes da Silva",
    bank: "Nubank",
    whatsappNumber: "5511999999999"
  },
  gifts: [
    // Cotas de presentes personalizadas
  ]
};
```

---

## 🚀 Como Executar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18+) instalado.

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:4321` (ou a porta exibida no terminal).

3. **Gerar a build estática de produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais otimizados serão gerados na pasta `dist/`.

4. **Pré-visualizar a build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy na Netlify

O repositório já está configurado via **`netlify.toml`**:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

1. Conecte este repositório no seu painel da Netlify.
2. A Netlify executará automaticamente o comando `npm run build` e publicará a pasta `dist/`.
3. Os formulários RSVP funcionarão de forma nativa e automática, registrando os nomes e recados no painel **Forms** da Netlify sem necessidade de servidor backend.
