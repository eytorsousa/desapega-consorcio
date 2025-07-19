const popup = document.getElementById('contactPopup');
const openBtn = document.querySelector('.contact_button');
const closeBtn = document.getElementById('closePopup');

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

const form1Btn = document.getElementById('form1Btn');
const form2Btn = document.getElementById('form2Btn');

openBtn.addEventListener('click', () => {
  popup.classList.add('show');
});

const closePopup = () => popup.classList.remove('show');

closeBtn.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

form1Btn.addEventListener('click', () => {
  form1.classList.remove('hidden');
  form2.classList.add('hidden');
});

form2Btn.addEventListener('click', () => {
  form1.classList.add('hidden');
  form2.classList.remove('hidden');
});
