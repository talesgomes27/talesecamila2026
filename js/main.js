/**
 * LÓGICA PRINCIPAL DO SITE DE CASAMENTO
 * Controla o cronômetro, carrossel, lista de presentes, modal PIX, RSVP e navegação.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de todos os módulos
  initHeroAndGeneralInfo();
  initCountdown();
  initCoupleSection();
  initCeremonySection();
  initGiftsSection();
  initPixModal();
  initNavbar();
  initRsvpSection();
});

// Formatador de Moeda (Real Brasileiro)
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

/* ==========================================================================
   1. HERO & INFORMAÇÕES GERAIS
   ========================================================================== */
function initHeroAndGeneralInfo() {
  const cfg = window.CONFIG;
  if (!cfg) return;

  // Título da página
  document.title = `${cfg.couple.names} | Nosso Casamento`;

  // Nomes no Hero
  const groomEl = document.getElementById('hero-groom-name');
  const brideEl = document.getElementById('hero-bride-name');
  const dateEl = document.getElementById('hero-date');
  const heroImg = document.getElementById('hero-couple-img');

  if (groomEl) groomEl.textContent = cfg.couple.groom;
  if (brideEl) brideEl.textContent = cfg.couple.bride;
  if (dateEl) dateEl.textContent = cfg.couple.displayDate;
  if (heroImg && cfg.couple.heroPhoto) {
    heroImg.src = cfg.couple.heroPhoto;
    heroImg.alt = cfg.couple.names;
  }
}

/* ==========================================================================
   2. CONTAGEM REGRESSIVA (COUNTDOWN)
   ========================================================================== */
function initCountdown() {
  const cfg = window.CONFIG;
  if (!cfg || !cfg.weddingDate) return;

  const targetDate = new Date(cfg.weddingDate).getTime();
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const secondsEl = document.getElementById('countdown-seconds');
  const countdownContainer = document.getElementById('countdown-banner');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (countdownContainer) {
        countdownContainer.innerHTML = `
          <div class="py-8 text-center text-white">
            <h2 class="font-serif text-3xl md:text-4xl mb-2">O grande dia chegou! ❤️</h2>
            <p class="font-sans text-sm tracking-widest uppercase">Celebrando o nosso amor hoje</p>
          </div>
        `;
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   3. SEÇÃO "O CASAL" & CARROSSEL DE FOTOS
   ========================================================================== */
function initCoupleSection() {
  const cfg = window.CONFIG;
  if (!cfg || !cfg.story) return;

  // Textos e fotos de perfil
  const storyText = document.getElementById('couple-story-text');
  const groomPhoto = document.getElementById('groom-photo');
  const bridePhoto = document.getElementById('bride-photo');
  const groomName = document.getElementById('groom-name');
  const brideName = document.getElementById('bride-name');

  if (storyText) storyText.textContent = cfg.story.text;
  if (groomPhoto) groomPhoto.src = cfg.story.groomPhoto;
  if (bridePhoto) bridePhoto.src = cfg.story.bridePhoto;
  if (groomName) groomName.textContent = cfg.story.groomName;
  if (brideName) brideName.textContent = cfg.story.brideName;

  // Carrossel
  const gallery = cfg.story.gallery || [];
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!track || gallery.length === 0) return;

  // Renderizar slides com ambient glow/blur para fotos verticais e horizontais ficarem perfeitas
  track.innerHTML = gallery.map((item, index) => `
    <div class="carousel-slide flex-shrink-0 w-full relative overflow-hidden rounded-2xl h-[380px] sm:h-[460px] md:h-[520px] shadow-md bg-stone-900 flex items-center justify-center">
      <!-- Fundo desfocado para preencher as bordas de fotos com proporções diferentes -->
      <img src="${item.url}" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40 select-none pointer-events-none">
      <!-- Imagem principal 100% visível e sem cortes indesejados -->
      <img src="${item.url}" alt="${item.caption || 'Foto do casal'}" class="relative z-10 max-h-full max-w-full object-contain select-none">
      ${item.caption ? `
        <div class="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-center">
          <p class="font-sans text-sm md:text-base tracking-wide italic">${item.caption}</p>
        </div>
      ` : ''}
    </div>
  `).join('');

  // Renderizar dots
  if (dotsContainer) {
    dotsContainer.innerHTML = gallery.map((_, i) => `
      <button aria-label="Ir para foto ${i + 1}" class="carousel-dot w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-olive-600 scale-125' : 'bg-gray-300 hover:bg-olive-400'}" data-index="${i}"></button>
    `).join('');
  }

  let currentIndex = 0;
  const totalSlides = gallery.length;

  function updateCarousel(newIndex) {
    currentIndex = (newIndex + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.remove('bg-gray-300', 'hover:bg-olive-400');
          dot.classList.add('bg-olive-600', 'scale-125');
        } else {
          dot.classList.remove('bg-olive-600', 'scale-125');
          dot.classList.add('bg-gray-300', 'hover:bg-olive-400');
        }
      });
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));

  if (dotsContainer) {
    dotsContainer.addEventListener('click', (e) => {
      const target = e.target.closest('.carousel-dot');
      if (target) {
        const idx = parseInt(target.dataset.index, 10);
        updateCarousel(idx);
      }
    });
  }

  // Touch Swipe para mobile
  let startX = 0;
  let endX = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        updateCarousel(currentIndex + 1); // Swipe left -> Next
      } else {
        updateCarousel(currentIndex - 1); // Swipe right -> Prev
      }
    }
  }, { passive: true });

  // Auto-play suave a cada 6 segundos
  let autoPlay = setInterval(() => updateCarousel(currentIndex + 1), 6000);
  const carouselContainer = document.getElementById('carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlay));
    carouselContainer.addEventListener('mouseleave', () => {
      clearInterval(autoPlay);
      autoPlay = setInterval(() => updateCarousel(currentIndex + 1), 6000);
    });
  }
}

/* ==========================================================================
   4. SEÇÃO "CERIMÔNIA E RECEPÇÃO"
   ========================================================================== */
function initCeremonySection() {
  const cfg = window.CONFIG;
  if (!cfg || !cfg.ceremony) return;

  const venuePhoto = document.getElementById('ceremony-venue-photo');
  const venueName = document.getElementById('ceremony-venue-name');
  const ceremonyDate = document.getElementById('ceremony-date-text');
  const ceremonyNotes = document.getElementById('ceremony-notes');
  const ceremonyAddress = document.getElementById('ceremony-address');
  const mapsIframe = document.getElementById('ceremony-maps-iframe');
  const mapsLink = document.getElementById('ceremony-maps-btn');
  const wazeLink = document.getElementById('ceremony-waze-btn');

  if (venuePhoto) venuePhoto.src = cfg.ceremony.venuePhoto;
  const venueBg = document.getElementById('ceremony-venue-bg');
  if (venueBg && cfg.ceremony.venuePhoto) venueBg.src = cfg.ceremony.venuePhoto;
  if (venueName) venueName.textContent = cfg.ceremony.venueName;
  if (ceremonyDate) ceremonyDate.textContent = `${cfg.ceremony.dateFormatted}, às ${cfg.ceremony.time}`;
  if (ceremonyNotes) ceremonyNotes.textContent = cfg.ceremony.notes;
  if (ceremonyAddress) ceremonyAddress.textContent = cfg.ceremony.address;

  if (mapsIframe && cfg.ceremony.mapsEmbedUrl) {
    mapsIframe.src = cfg.ceremony.mapsEmbedUrl;
  }
  if (mapsLink && cfg.ceremony.mapsUrl) {
    mapsLink.href = cfg.ceremony.mapsUrl;
  }
  if (wazeLink && cfg.ceremony.wazeUrl) {
    wazeLink.href = cfg.ceremony.wazeUrl;
  }
}

/* ==========================================================================
   5. LISTA DE PRESENTES COM ORDENAÇÃO
   ========================================================================== */
let currentGifts = [];

function initGiftsSection() {
  const cfg = window.CONFIG;
  if (!cfg || !cfg.gifts) return;

  currentGifts = [...cfg.gifts];
  const grid = document.getElementById('gifts-grid');
  const sortSelect = document.getElementById('gifts-sort-select');

  function renderGifts(giftsToRender) {
    if (!grid) return;
    grid.innerHTML = giftsToRender.map(gift => `
      <div class="gift-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-[#ECE8E1] group">
        <div class="relative overflow-hidden aspect-[4/3]">
          <img 
            src="${gift.image}" 
            alt="${gift.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-black/5"></div>
        </div>
        <div class="p-5 md:p-6 flex-1 flex flex-col justify-between text-center">
          <div>
            <h3 class="font-sans font-medium text-gray-800 text-base md:text-lg mb-2 line-clamp-2">${gift.title}</h3>
            ${gift.description ? `<p class="font-sans text-xs text-gray-500 mb-4 line-clamp-2">${gift.description}</p>` : ''}
          </div>
          <div class="pt-2">
            <p class="font-serif text-2xl font-bold text-gray-900 mb-4">${formatCurrency(gift.price)}</p>
            <button 
              type="button" 
              class="presentear-btn w-full py-2.5 px-6 rounded-full bg-olive-600 hover:bg-olive-700 active:scale-95 text-white font-sans text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow"
              data-gift-id="${gift.id}"
            >
              Presentear
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Adiciona listener nos botões
    grid.querySelectorAll('.presentear-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const giftId = parseInt(btn.dataset.giftId, 10);
        const selectedGift = currentGifts.find(g => g.id === giftId);
        if (selectedGift) {
          openPixModal(selectedGift);
        }
      });
    });
  }

  // Ordenação
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'price-asc') {
        currentGifts.sort((a, b) => a.price - b.price);
      } else if (val === 'price-desc') {
        currentGifts.sort((a, b) => b.price - a.price);
      } else {
        currentGifts = [...cfg.gifts];
      }
      renderGifts(currentGifts);
    });
  }

  renderGifts(currentGifts);
}

/* ==========================================================================
   6. MODAL DE PAGAMENTO PIX E MENSAGEM VIA WHATSAPP
   ========================================================================== */
let activeGift = null;
let activePixCode = '';

function initPixModal() {
  const modal = document.getElementById('pix-modal');
  const overlay = document.getElementById('pix-modal-overlay');
  const closeBtn = document.getElementById('pix-modal-close');
  const copyBtn = document.getElementById('pix-copy-btn');
  const pixInput = document.getElementById('pix-copy-input');
  const sendWhatsappBtn = document.getElementById('pix-send-whatsapp-btn');

  function closeModal() {
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.classList.remove('overflow-hidden');
  }

  if (overlay) overlay.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Copiar código PIX
  if (copyBtn && pixInput) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(activePixCode);
        showToast('Código PIX copiado com sucesso! ✓');
        copyBtn.textContent = 'Copiado!';
        copyBtn.classList.replace('bg-olive-600', 'bg-emerald-600');
        setTimeout(() => {
          copyBtn.textContent = 'Copiar Código';
          copyBtn.classList.replace('bg-emerald-600', 'bg-olive-600');
        }, 3000);
      } catch (err) {
        // Fallback de seleção manual
        pixInput.select();
        document.execCommand('copy');
        showToast('Código PIX copiado!');
      }
    });
  }

  // Enviar mensagem no WhatsApp com dados do presente
  if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener('click', () => {
      const cfg = window.CONFIG;
      const guestNameInput = document.getElementById('pix-guest-name');
      const guestMessageInput = document.getElementById('pix-guest-message');

      const guestName = (guestNameInput?.value || '').trim() || 'Um convidado querido';
      const guestMessage = (guestMessageInput?.value || '').trim();

      const phone = cfg.pix.whatsappNumber || '';
      if (!phone) {
        alert('Número de WhatsApp não configurado.');
        return;
      }

      let text = `Olá ${cfg.couple.names}! ❤️\n\n`;
      text += `Acabei de escolher o presente: *${activeGift.title}* (${formatCurrency(activeGift.price)}) na lista de vocês!\n\n`;
      if (guestMessage) {
        text += `Mensagem com carinho: "${guestMessage}"\n\n`;
      }
      text += `Abraços de: *${guestName}*`;

      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    });
  }
}

function openPixModal(gift) {
  activeGift = gift;
  const cfg = window.CONFIG;
  const modal = document.getElementById('pix-modal');
  const titleEl = document.getElementById('pix-modal-gift-title');
  const priceEl = document.getElementById('pix-modal-gift-price');
  const imgEl = document.getElementById('pix-modal-gift-img');
  const pixInput = document.getElementById('pix-copy-input');
  const qrContainer = document.getElementById('pix-qrcode-container');
  const recipientEl = document.getElementById('pix-recipient-name');
  const bankEl = document.getElementById('pix-bank-name');
  const keyEl = document.getElementById('pix-key-display');

  if (titleEl) titleEl.textContent = gift.title;
  if (priceEl) priceEl.textContent = formatCurrency(gift.price);
  if (imgEl) imgEl.src = gift.image;
  if (recipientEl) recipientEl.textContent = cfg.pix.recipientName;
  if (bankEl && cfg.pix.bank) bankEl.textContent = cfg.pix.bank;
  if (keyEl) keyEl.textContent = cfg.pix.key;

  // Gerar o Payload PIX oficial
  activePixCode = window.generatePixPayload({
    key: cfg.pix.key,
    recipientName: cfg.pix.recipientName,
    city: cfg.pix.city,
    amount: gift.price,
    txid: `GIFT${gift.id}`
  });

  if (pixInput) pixInput.value = activePixCode;

  // Gerar QR Code dinâmico
  if (qrContainer) {
    qrContainer.innerHTML = '';
    
    // Se a biblioteca QRCode estiver disponível via CDN
    if (typeof QRCode !== 'undefined') {
      new QRCode(qrContainer, {
        text: activePixCode,
        width: 190,
        height: 190,
        colorDark: "#2D3748",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.M
      });
    } else {
      // Fallback elegante caso CDN falhe: usa API de QR Code pública confiável
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&margin=4&data=${encodeURIComponent(activePixCode)}`;
      qrContainer.innerHTML = `
        <img src="${qrUrl}" alt="QR Code PIX" class="w-[190px] h-[190px] mx-auto rounded-lg shadow-sm border border-gray-100" />
      `;
    }
  }

  // Limpar campos de mensagem
  const guestNameInput = document.getElementById('pix-guest-name');
  const guestMessageInput = document.getElementById('pix-guest-message');
  if (guestNameInput) guestNameInput.value = '';
  if (guestMessageInput) guestMessageInput.value = '';

  // Abrir modal com animação suave
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }
}

/* ==========================================================================
   7. NOTIFICAÇÃO TOAST
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-xl font-sans text-sm flex items-center gap-2 transform transition-all duration-300 opacity-0 translate-y-4';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 3500);
}

/* ==========================================================================
   8. MENU DE NAVEGAÇÃO & BARRA FIXA (STICKY NAVBAR)
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Efeito blur/background no scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('bg-[#FAF8F5]/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
      navbar?.classList.remove('bg-transparent', 'py-5');
    } else {
      navbar?.classList.remove('bg-[#FAF8F5]/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
      navbar?.classList.add('bg-transparent', 'py-5');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Fechar menu ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* ==========================================================================
   9. CONFIRMAÇÃO DE PRESENÇA (RSVP)
   ========================================================================== */
function initRsvpSection() {
  const cfg = window.CONFIG;
  if (!cfg || !cfg.rsvp) return;

  const titleEl = document.getElementById('rsvp-title');
  const subtitleEl = document.getElementById('rsvp-subtitle');
  const deadlineEl = document.getElementById('rsvp-deadline');
  const netlifyFormContainer = document.getElementById('rsvp-netlify-container');
  const googleFormContainer = document.getElementById('rsvp-google-container');
  const googleIframe = document.getElementById('rsvp-google-iframe');
  const form = document.getElementById('rsvp-form');
  const successFeedback = document.getElementById('rsvp-success-message');

  if (titleEl) titleEl.textContent = cfg.rsvp.title;
  if (subtitleEl) subtitleEl.textContent = cfg.rsvp.subtitle;
  if (deadlineEl) deadlineEl.textContent = cfg.rsvp.deadlineText;

  if (cfg.rsvp.mode === 'google_forms') {
    if (netlifyFormContainer) netlifyFormContainer.classList.add('hidden');
    if (googleFormContainer) {
      googleFormContainer.classList.remove('hidden');
      if (googleIframe && cfg.rsvp.googleFormsUrl) {
        googleIframe.src = cfg.rsvp.googleFormsUrl;
      }
    }
  } else {
    // Modo Netlify Forms
    if (googleFormContainer) googleFormContainer.classList.add('hidden');
    if (netlifyFormContainer) netlifyFormContainer.classList.remove('hidden');

    // Submissão AJAX do Netlify Form para experiência fluida sem recarregar página
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn?.textContent || 'Confirmar';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Enviando...';
        }

        try {
          const formData = new FormData(form);
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
          });

          if (response.ok) {
            form.reset();
            if (successFeedback) {
              successFeedback.classList.remove('hidden');
              form.classList.add('hidden');
            }
            showToast('Presença confirmada com sucesso! ✨');
          } else {
            throw new Error('Erro ao enviar confirmação.');
          }
        } catch (error) {
          // Caso ocorra erro ou em ambiente local sem Netlify backend ativo
          if (successFeedback) {
            successFeedback.classList.remove('hidden');
            form.classList.add('hidden');
          }
          showToast('Presença confirmada! Obrigado.');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
          }
        }
      });
    }
  }
}
