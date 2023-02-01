// ─── Selectors ───────────────────────────────────────────────────────────────
const mobileMenu = document.querySelector('.mobile-menu');
const navlinks = document.querySelector('.nav-links');

// ─── Function ────────────────────────────────────────────────────────────────
function showMenu() {
  navlinks.classList.toggle('show-menu');
  if (mobileMenu.src.match('./images/IconMenu.png')) {
    mobileMenu.src = './images/IconCancel.png';
  } else {
    mobileMenu.src = './images/IconMenu.png';
  }
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
mobileMenu.addEventListener('click', showMenu);