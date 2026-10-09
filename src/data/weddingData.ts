import type { WeddingData } from '../types/wedding';

export const weddingData: WeddingData = {
  couple: {
    groom: "Tales",
    bride: "Camila",
    names: "Tales & Camila",
    displayDate: "19 | 12 | 2026",
    heroSubtitle: "VAMOS NOS CASAR!",
    heroPhoto: "/assets/imagens/casal.jpg"
  },

  weddingDate: "2026-12-19T16:00:00",

  story: {
    title: "O Casal",
    subtitle: "Nossa História de Amor",
    groomName: "Tales",
    groomPhoto: "/assets/imagens/noivo.jpg",
    brideName: "Camila",
    bridePhoto: "/assets/imagens/noiva.jpg",
    text: "Histórias de amor existem, e, às vezes, nem nós mesmos acreditamos todo o tempo que já estamos juntos. Porém, o brilho intenso e apaixonado dos nossos olhares nos fazem lembrar o porquê de chegarmos até aqui sem sentir tanto o tempo passar... Vamos nos casar! Estamos preparando tudo com muito carinho para curtirmos cada momento com nossos amigos e familiares queridos!",
    gallery: [
      {
        url: "/assets/imagens/carrossel/01.jpg.jpeg",
        caption: "Caminhando de mãos dadas pelo pátio histórico"
      },
      {
        url: "/assets/imagens/carrossel/02.png",
        caption: "O abraço seguro e acolhedor"
      },
      {
        url: "/assets/imagens/carrossel/03.png",
        caption: "O carinho em cada detalhe"
      },
      {
        url: "/assets/imagens/carrossel/04.jpg.jpeg",
        caption: "Nossos sorrisos sob o céu aberto"
      },
      {
        url: "/assets/imagens/carrossel/05.png",
        caption: "A leveza e a alegria de estarmos juntos"
      },
      {
        url: "/assets/imagens/carrossel/06.png",
        caption: "Cumplicidade e muito afeto"
      },
      {
        url: "/assets/imagens/carrossel/08.png",
        caption: "Construindo nossa história passo a passo"
      },
      {
        url: "/assets/imagens/carrossel/09.png",
        caption: "Quando o olhar revela tudo que sentimos"
      },
      {
        url: "/assets/imagens/carrossel/10.png",
        caption: "Parceria e companheirismo para toda a vida"
      },
      {
        url: "/assets/imagens/carrossel/11.png",
        caption: "Na beira do rio ao entardecer"
      },
      {
        url: "/assets/imagens/carrossel/12.png",
        caption: "O dourado do pôr do sol abençoando nossa união"
      },
      {
        url: "/assets/imagens/carrossel/13.png",
        caption: "Celebrando cada momento desse sonho"
      },
      {
        url: "/assets/imagens/carrossel/14.jpg.jpeg",
        caption: "Sob o charme das luzes noturnas"
      },
      {
        url: "/assets/imagens/carrossel/15.png",
        caption: "Contando os dias para o nosso sim!"
      }
    ]
  },

  ceremony: {
    title: "Cerimônia & Recepção",
    venueName: "Beira Rio, no antigo Empresa Bar",
    venuePhoto: "/assets/imagens/cerimonia.jpeg",
    dateFormatted: "19 de Dezembro de 2026",
    time: "16h00",
    notes: "Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! A cerimônia será rápida e tentaremos ser extremamente pontuais. Contamos com vocês!",
    address: "Av. Lauro Sodré, 146 - São Miguel do Guamá, PA, 68660-000",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.0542474066214!2d-47.486152430384315!3d-1.6233647593308864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a55f1f8b0f612f%3A0xd5abf900193d4723!2sAv.%20Lauro%20Sodr%C3%A9%2C%20146%20-%20S%C3%A3o%20Miguel%20do%20Guam%C3%A1%2C%20PA%2C%2068660-000!5e0!3m2!1spt-BR!2sbr!4v1789923462646!5m2!1spt-BR!2sbr",
    mapsUrl: "https://maps.google.com/?q=Av.+Lauro+Sodr%C3%A9,+146+-+S%C3%A3o+Miguel+do+Guam%C3%A1,+PA,+68660-000",
    wazeUrl: "https://waze.com/ul?q=Av.+Lauro+Sodr%C3%A9,+146+-+S%C3%A3o+Miguel+do+Guam%C3%A1"
  },

  pix: {
    key: "f3050a56-c7b2-48f5-b369-df2f9a43641a",
    recipientName: "Tales Wilhame Gomes da Silva",
    bank: "Nubank",
    city: "SAO MIGUEL DO GUAMA",
    whatsappNumber: "5511999999999"
  },

  gifts: [
    {
      id: 1,
      title: "Deus tocou no seu coração!",
      description: "Para os padrinhos e amigos generosos que desejam nos abençoar com essa cota especial!",
      price: 6627.50,
      image: "/assets/imagens/presentes/01-deus-tocou.jpg"
    },
    {
      id: 2,
      title: "Ajuda para a aposentadoria dos noivos",
      description: "Garantindo nosso cafezinho e tranquilidade para quando ficarmos velhinhos juntos.",
      price: 4422.21,
      image: "/assets/imagens/presentes/02-aposentadoria.jpg"
    },
    {
      id: 3,
      title: "Cota 'amigos para sempre'",
      description: "Uma contribuição para celebrar a nossa amizade que atravessa todas as fases!",
      price: 3690.96,
      image: "/assets/imagens/presentes/03-amigos.jpg"
    },
    {
      id: 4,
      title: "Jantar romântico à luz de velas na lua de mel",
      description: "Uma noite inesquecível com vista para o mar e o melhor da gastronomia local.",
      price: 350.00,
      image: "/assets/imagens/presentes/04-jantar-romantico.jpg"
    },
    {
      id: 5,
      title: "Passeio de barco ao pôr do sol, lua de mel",
      description: "Para brindarmos ao início dessa nova jornada com um cenário cinematográfico.",
      price: 520.00,
      image: "/assets/imagens/presentes/05-passeio-barco.jpg"
    },
    {
      id: 6,
      title: "Um ano de café da manhã na cama para a noiva",
      description: "Garantindo que a doçura e os mimos continuem todos os fins de semana.",
      price: 180.00,
      image: "/assets/imagens/presentes/06-cafe-cama.jpg"
    },
    {
      id: 7,
      title: "Kit sobrevivência aos primeiros dias de casados",
      description: "Pizzas de emergência, café reforçado e muita paciência para organizar a casa nova!",
      price: 250.00,
      image: "/assets/imagens/presentes/07-kit-sobrevivencia.jpg"
    },
    {
      id: 8,
      title: "Cota para o noivo não lavar a louça por 1 mês",
      description: "Uma ajuda humanitária valiosa para a harmonia do lar recém-formado!",
      price: 150.00,
      image: "/assets/imagens/presentes/08-louca.jpg"
    },
    {
      id: 9,
      title: "Brinde com champanhe na praia, lua de mel",
      description: "Duas taças e um champanhe gelado para brindar à felicidade sem fim.",
      price: 280.00,
      image: "/assets/imagens/presentes/09-champanhe.jpg"
    },
    {
      id: 10,
      title: "Cota de Padrinho",
      description: "Uma bênção e contribuição especial dos padrinhos queridos para marcar o início dessa nova etapa!",
      price: 950.00,
      image: "/assets/imagens/presentes/10-padrinho.jpg"
    },
    {
      id: 11,
      title: "Curso de Culinária para a noiva",
      description: "Para a noiva preparar banquetes maravilhosos (ou pelo menos garantir que o arroz não queime)!",
      price: 300.00,
      image: "/assets/imagens/presentes/11-culinaria.jpg"
    },
    {
      id: 12,
      title: "Cueca sexy para o noivo",
      description: "Garantindo que a lua de mel comece com muito estilo, charme e boas risadas!",
      price: 100.00,
      image: "/assets/imagens/presentes/12-cueca-noivo.jpg"
    },
    {
      id: 13,
      title: "Lingerie sexy para a noiva",
      description: "Um mimo especial e charmoso para a mala da lua de mel ficar completa!",
      price: 120.00,
      image: "/assets/imagens/presentes/13-lingerie-noiva.jpg"
    },
    {
      id: 14,
      title: "Open de engov para a festa",
      description: "Garantindo a dignidade e a animação de todos os convidados durante e após a comemoração!",
      price: 180.00,
      image: "/assets/imagens/presentes/14-open-engov.jpg"
    },
    {
      id: 15,
      title: "Ajuda para mobiliar a casa",
      description: "Uma contribuição especial para transformar o nosso cantinho em um lar acolhedor e confortável.",
      price: 1500.00,
      image: "/assets/imagens/presentes/15-mobiliar-casa.jpg"
    },
    {
      id: 16,
      title: "Garanta o jantar do noivo durante o 1º mês de casado",
      description: "Salvando o recém-casado de viver à base de miojo e delivery nos primeiros 30 dias!",
      price: 650.00,
      image: "/assets/imagens/presentes/16-jantar-noivo.jpg"
    },
    {
      id: 17,
      title: "Um ano de cabelo feito para o noivo",
      description: "Para o noivo manter o corte na régua, a barba impecável e a noiva sempre admirada!",
      price: 480.00,
      image: "/assets/imagens/presentes/17-cabelo-noivo.jpg"
    },
    {
      id: 18,
      title: "Kit ressaca para os noivos",
      description: "Água de coco, café reforçado e glicose na veia para nos recuperarmos da melhor festa da vida!",
      price: 320.00,
      image: "/assets/imagens/presentes/18-kit-ressaca.jpg"
    },
    {
      id: 19,
      title: "Tampão de ouvido pra noiva enquanto noivo ronca",
      description: "Item de utilidade pública essencial para a paz matrimonial e o sono sagrado da noiva!",
      price: 120.00,
      image: "/assets/imagens/presentes/19-tampao-ouvido.jpg"
    },
    {
      id: 20,
      title: "Cota para pedir um bebê para os noivos",
      description: "Para incentivar a fábrica da cegonha e garantir a futura fofura da família!",
      price: 500.00,
      image: "/assets/imagens/presentes/20-pedir-bebe.jpg"
    },
    {
      id: 21,
      title: "Ajuda para pagar a terapia da noiva depois de organizar o casamento",
      description: "Uma contribuição humanitária para devolver a paz de espírito após planejar a festa do século!",
      price: 200.00,
      image: "/assets/imagens/presentes/21-terapia-noiva.jpg"
    }
  ],

  rsvp: {
    title: "Confirmação de Presença",
    subtitle: "Sua presença é muito importante para nós!",
    deadlineText: "Por favor, confirme sua presença até o dia 20 de Novembro de 2026.",
    mode: "netlify",
    googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true"
  },

  meta: {
    siteUrl: "https://talesecamila2026.netlify.app",
    ogImage: "/assets/imagens/preview-convite.jpg",
    description: "Site de Casamento de Tales & Camila. Informações da cerimônia, lista de presentes com PIX e confirmação de presença."
  }
};
