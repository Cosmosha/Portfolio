// ─── Selectors ───────────────────────────────────────────────────────────────
const email = document.querySelector('#email');
const form = document.querySelector('.contact-form');
const errorMessage = document.querySelector('.errorMessage');

// ─── Functions ───────────────────────────────────────────────────────────────
function formValidation(event) {
  event.preventDefault();
  const emailInput = email.value;
  if (emailInput !== emailInput.toLowerCase()) {
    errorMessage.innerHTML = 'Please email must be in lowercase';
    return;
  }
  form.submit();
}

// ─── Event Listeners ─────────────────────────────────────────────────────────
form.addEventListener('submit', formValidation);