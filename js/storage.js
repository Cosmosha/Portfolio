// ─── Local Storage ───────────────────────────────────────────────────────────

// ─── Selectors ───────────────────────────────────────────────────────────────

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const forms = document.querySelector('contact-form');

const formDat = {
  name: userName.value,
  email: userEmail.value,
  message: userMessage.value,
};

// ─── Function ────────────────────────────────────────────────────────────────
function saveFormData() {
  let formData;
  if (localStorage.getItem('formData') !== null) {
    formData = [];
  } else {
    formData = JSON.parse(localStorage.getItem('formData'));
  }
  formData.push(formDat);
  localStorage.setItem('formData', JSON.stringify(formData));
}

function getData() {
  let formData;
  if (localStorage.getItem('formData') !== null) {
    formData = [];
  } else {
    formData = JSON.parse(localStorage.getItem('formData'));
  }
  formData.foreach(() => {
    userName.value = formData.name;
    userEmail.value = formData.email;
    userMessage.value = formData.message;
  });
}

// ─── Event Listeners ─────────────────────────────────────────────────────────
document.addEventListener('DOMContent', getData);
forms.addEventListener('click', saveFormData);