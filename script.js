const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const faqOpenButtons = document.querySelectorAll('[data-faq-open]');
const faqModal = document.querySelector('#faq-modal');
const faqClose = document.querySelector('[data-faq-close]');

if (faqModal) {
  faqOpenButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      faqModal.showModal();
    });
  });

  if (faqClose) {
    faqClose.addEventListener('click', () => faqModal.close());
  }

  faqModal.addEventListener('click', (event) => {
    const rect = faqModal.getBoundingClientRect();
    const inDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inDialog) {
      faqModal.close();
    }
  });
}

const QUOTE_PHONE = '5493751445528';
const quoteForm = document.querySelector('#quote-form');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const modelo = document.querySelector('#modelo').value.trim();
    const problema = document.querySelector('#problema').value.trim();

    if (!nombre || !modelo || !problema) {
      alert('Por favor completá todos los campos.');
      return;
    }

    const mensaje = `Hola, soy ${nombre}. Quiero solicitar presupuesto para un ${modelo}. Problema: ${problema}.`;
    const url = `https://wa.me/${QUOTE_PHONE}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank', 'noopener');
  });
}
