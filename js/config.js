/**
 * ==============================================================================
 * CONFIGURAÇÃO CENTRAL DO SITE DE CASAMENTO
 * ==============================================================================
 * Edite os dados abaixo para personalizar o site com os dados do seu casamento.
 * Todos os textos, datas, fotos, endereços e chave PIX são lidos automaticamente daqui.
 */

const CONFIG = {
  // ----------------------------------------------------------------------------
  // DADOS DOS NOIVOS & HERO
  // ----------------------------------------------------------------------------
  couple: {
    groom: "Tales",
    bride: "Camila",
    names: "Tales & Camila",
    displayDate: "19 | 12 | 2026",
    heroSubtitle: "VAMOS NOS CASAR!",
    // Foto principal emoldurada na seção Hero
    heroPhoto: "assets/imagens/casal.jpg"
  },

  // ----------------------------------------------------------------------------
  // DATA E HORA DO EVENTO (Para o Cronômetro de Contagem Regressiva)
  // Formato: AAAA-MM-DDTHH:MM:SS
  // ----------------------------------------------------------------------------
  weddingDate: "2026-12-19T16:00:00",

  // ----------------------------------------------------------------------------
  // SEÇÃO "O CASAL"
  // ----------------------------------------------------------------------------
  story: {
    title: "O Casal",
    subtitle: "Nossa História de Amor",
    groomName: "Tales",
    groomPhoto: "assets/imagens/noivo.jpg",
    brideName: "Camila",
    bridePhoto: "assets/imagens/noiva.jpg",
    text: "Histórias de amor existem, e, às vezes, nem nós mesmos acreditamos todo o tempo que já estamos juntos. Porém, o brilho intenso e apaixonado dos nossos olhares nos fazem lembrar o porquê de chegarmos até aqui sem sentir tanto o tempo passar... Vamos nos casar! Estamos preparando tudo com muito carinho para curtirmos cada momento com nossos amigos e familiares queridos!",
    
    // Fotos do carrossel/ensaio pré-wedding
    gallery: [
      {
        url: "assets/imagens/carrossel/carrossel-1.jpg",
        caption: "O início da nossa caminhada juntos"
      },
      {
        url: "assets/imagens/carrossel/carrossel-2.jpg",
        caption: "Momentos inesquecíveis a dois"
      },
      {
        url: "assets/imagens/carrossel/carrossel-3.jpg",
        caption: "A cumplicidade em cada detalhe"
      },
      {
        url: "assets/imagens/carrossel/carrossel-4.jpg",
        caption: "Contando os dias para o nosso sim!"
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // SEÇÃO CERIMÔNIA E RECEPÇÃO
  // ----------------------------------------------------------------------------
  ceremony: {
    title: "Cerimônia & Recepção",
    venueName: "Beira Rio, no antigo Empresa Bar",
    venuePhoto: "assets/imagens/cerimonia.jpeg",
    dateFormatted: "19 de Dezembro de 2026",
    time: "16h00",
    notes: "Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! A cerimônia será rápida e tentaremos ser extremamente pontuais. Contamos com vocês!",
    address: "Av. Lauro Sodré, 146 - São Miguel do Guamá, PA, 68660-000",
    
    // Iframe de incorporação do Google Maps
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.0542474066214!2d-47.486152430384315!3d-1.6233647593308864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a55f1f8b0f612f%3A0xd5abf900193d4723!2sAv.%20Lauro%20Sodr%C3%A9%2C%20146%20-%20S%C3%A3o%20Miguel%20do%20Guam%C3%A1%2C%20PA%2C%2068660-000!5e0!3m2!1spt-BR!2sbr!4v1789923462646!5m2!1spt-BR!2sbr",
    
    // Links para aplicativos de rota
    mapsUrl: "https://maps.google.com/?q=Av.+Lauro+Sodr%C3%A9,+146+-+S%C3%A3o+Miguel+do+Guam%C3%A1,+PA,+68660-000",
    wazeUrl: "https://waze.com/ul?q=Av.+Lauro+Sodr%C3%A9,+146+-+S%C3%A3o+Miguel+do+Guam%C3%A1"
  },

  // ----------------------------------------------------------------------------
  // DADOS PARA O PIX (Utilizado no Modal de Presentes)
  // ----------------------------------------------------------------------------
  pix: {
    // Chave PIX: pode ser CPF, e-mail, telefone (ex: +5511999999999) ou chave aleatória
    key: "f3050a56-c7b2-48f5-b369-df2f9a43641a",
    recipientName: "Tales Wilhame Gomes da Silva",
    bank: "Nubank",
    city: "SAO MIGUEL DO GUAMA",
    // Número do WhatsApp dos noivos (com código do país e DDD, apenas números)
    // Usado para o botão de envio de comprovante/mensagem após presentear
    whatsappNumber: "5511999999999"
  },

  // ----------------------------------------------------------------------------
  // LISTA DE PRESENTES VIRTUAIS COM PIX
  // ----------------------------------------------------------------------------
  gifts: [
    {
      id: 1,
      title: "Deus tocou no seu coração!",
      description: "Para os padrinhos e amigos generosos que desejam nos abençoar com essa cota especial!",
      price: 6627.50,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Ajuda para a aposentadoria dos noivos",
      description: "Garantindo nosso cafezinho e tranquilidade para quando ficarmos velhinhos juntos.",
      price: 4422.21,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Cota 'amigos para sempre'",
      description: "Uma contribuição para celebrar a nossa amizade que atravessa todas as fases!",
      price: 3690.96,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Jantar romântico à luz de velas na lua de mel",
      description: "Uma noite inesquecível com vista para o mar e o melhor da gastronomia local.",
      price: 350.00,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Passeio de barco ao pôr do sol",
      description: "Para brindarmos ao início dessa nova jornada com um cenário cinematográfico.",
      price: 520.00,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Um ano de café da manhã na cama",
      description: "Garantindo que a doçura e os mimos continuem todos os fins de semana.",
      price: 180.00,
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Kit sobrevivência aos primeiros dias de casados",
      description: "Pizzas de emergência, café reforçado e muita paciência para organizar a casa nova!",
      price: 250.00,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "Cota para o noivo não lavar a louça por 1 mês",
      description: "Uma ajuda humanitária valiosa para a harmonia do lar recém-formado!",
      price: 150.00,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      title: "Brinde com champanhe na praia",
      description: "Duas taças e um champanhe gelado para brindar à felicidade sem fim.",
      price: 280.00,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      title: "Cota de Padrinho",
      description: "Uma bênção e contribuição especial dos padrinhos queridos para marcar o início dessa nova etapa!",
      price: 950.00,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11,
      title: "Curso de Culinária para a noiva",
      description: "Para a noiva preparar banquetes maravilhosos (ou pelo menos garantir que o arroz não queime)!",
      price: 300.00,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 12,
      title: "Cueca sexy para o noivo",
      description: "Garantindo que a lua de mel comece com muito estilo, charme e boas risadas!",
      price: 100.00,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 13,
      title: "Lingerie sexy para a noiva",
      description: "Um mimo especial e charmoso para a mala da lua de mel ficar completa!",
      price: 120.00,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 14,
      title: "Open de engov para a festa",
      description: "Garantindo a dignidade e a animação de todos os convidados durante e após a comemoração!",
      price: 180.00,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 15,
      title: "Ajuda para mobiliar a casa",
      description: "Uma contribuição especial para transformar o nosso cantinho em um lar acolhedor e confortável.",
      price: 1500.00,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 16,
      title: "Garanta o jantar do noivo durante o 1º mês de casado",
      description: "Salvando o recém-casado de viver à base de miojo e delivery nos primeiros 30 dias!",
      price: 650.00,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 17,
      title: "Um ano de cabelo feito para o noivo",
      description: "Para o noivo manter o corte na régua, a barba impecável e a noiva sempre admirada!",
      price: 480.00,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 18,
      title: "Kit ressaca para os noivos",
      description: "Água de coco, café reforçado e glicose na veia para nos recuperarmos da melhor festa da vida!",
      price: 320.00,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 19,
      title: "Tampão de ouvido pra noiva enquanto noivo ronca",
      description: "Item de utilidade pública essencial para a paz matrimonial e o sono sagrado da noiva!",
      price: 120.00,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // ----------------------------------------------------------------------------
  // CONFIRMAÇÃO DE PRESENÇA (RSVP)
  // ----------------------------------------------------------------------------
  rsvp: {
    title: "Confirmação de Presença",
    subtitle: "Sua presença é muito importante para nós!",
    deadlineText: "Por favor, confirme sua presença até o dia 20 de Novembro de 2026.",
    
    // Modo de funcionamento:
    // 'netlify'      -> Formulário nativo HTML com Netlify Forms (dados salvos no painel da Netlify)
    // 'google_forms' -> Iframe incorporado do Google Forms
    mode: "netlify",
    
    // Se utilizar Google Forms, cole aqui o link de incorporação (embed)
    googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true"
  }
};

window.CONFIG = CONFIG;
