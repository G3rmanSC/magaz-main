// Мягкая реакция шапки на скролл
const header = document.querySelector('.site-header');
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  header.dataset.scrolled = y > 8;

});

// Мобильное меню
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle?.addEventListener('click', () => links.classList.toggle('is-open'));

// Фокус-контур как у Apple: только клавиатурой
function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('show-focus');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);