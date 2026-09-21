# 💍 Site de Casamento - Elegante & Responsivo

Site completo de casamento inspirado no design visual do **casar.com**, com paleta de cores off-white/linho e verde oliva, tipografia romântica serifada, cronômetro regressivo em tempo real, carrossel de fotos, lista de presentes interativa com geração de QR Code PIX e formulário RSVP com Netlify Forms.

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
     - QR Code PIX gerado dinamicamente.
     - Código PIX Copia e Cola com botão de cópia em 1 clique e feedback visual.
     - Campo de recado aos noivos com botão direto para envio via WhatsApp.
7. **Confirmação de Presença (RSVP)**:
   - Formulário nativo com suporte a **Netlify Forms** (`data-netlify="true"`).
   - Suporte alternativo a iframe do Google Forms configurável.
8. **Pronto para Netlify**: Configurado com `netlify.toml` e `_redirects` para deploy estático imediato.

---

## ⚙️ Como Personalizar (Tudo em `js/config.js`)

Abra o arquivo `js/config.js` para alterar qualquer informação do casamento:

```javascript
const CONFIG = {
  couple: {
    groom: "Tales",
    bride: "Camila",
    names: "Tales & Camila",
    displayDate: "19 | 12 | 2026",
    heroPhoto: "URL_DA_FOTO_DO_CASAL"
  },
  weddingDate: "2026-12-19T18:00:00", // Data para a contagem regressiva
  pix: {
    key: "suachavepix@email.com", // Sua chave PIX (CPF, e-mail, telefone ou chave aleatória)
    recipientName: "Tales e Camila",
    city: "SAO PAULO",
    whatsappNumber: "5511999999999" // Número com DDD para receber recados no WhatsApp
  },
  ceremony: {
    venueName: "Nome do Local",
    address: "Endereço Completo",
    mapsUrl: "https://maps.google.com/?q=...",
    wazeUrl: "https://waze.com/ul?q=..."
  },
  gifts: [
    // Seus presentes personalizados aqui
  ]
};
```

---

## 🚀 Como Testar Localmente

Você pode abrir o arquivo `index.html` diretamente em qualquer navegador, ou rodar um servidor HTTP simples:

```bash
# Com Python 3
python3 -m http.server 8000

# Ou com Node.js (npx)
npx serve .
```
Acesse: `http://localhost:8000`

---

## 🌐 Como Fazer Deploy na Netlify

### Opção 1: Drag & Drop (Mais Rápido)
1. Acesse [app.netlify.com](https://app.netlify.com).
2. Arraste e solte a pasta `site-casamento` na área "Sites".
3. Pronto! Seu site estará no ar em segundos com HTTPS gratuito.

### Opção 2: Conectar com Git (GitHub / GitLab)
1. Suba esta pasta para um repositório no seu GitHub.
2. No painel da Netlify, clique em **"Add new site" > "Import an existing project"**.
3. Selecione o repositório.
4. Deixe o comando de build vazio e o diretório de publicação como `.` (ou em branco).
5. Clique em **"Deploy"**. As confirmações de presença do formulário RSVP cairão automaticamente na aba **Forms** do painel da Netlify!
