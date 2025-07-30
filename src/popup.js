const contactPopup = document.getElementById('contactPopup');
const openBtn = document.querySelector('.contact_button');
const closeBtn = document.getElementById('closePopup');

const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');

const form1Btn = document.querySelector('#form1_btn');
const form2Btn = document.querySelector('#form2_btn');

openBtn.addEventListener('click', () => {
  contactPopup.classList.add('show');
  contactPopup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => closePopup(contactPopup));
contactPopup.addEventListener('click', (e) => {
  if (e.target === contactPopup) {
    closePopup(contactPopup);
  }
});

function closePopup(popup) {
  popup.classList.remove('show');
  popup.classList.add('hidden');
};

form1Btn.addEventListener('click', () => toggleButton(form1Btn));
form2Btn.addEventListener('click', () => toggleButton(form2Btn));

function toggleButton(button) {
  const buttons = [form1Btn, form2Btn];
  const forms = [form1, form2];
  buttons.forEach(btn => btn.classList.remove('selected'));
  forms.forEach(form => form.classList.add('hidden'));
  forms[buttons.indexOf(button)].classList.remove('hidden');
  button.classList.add('selected');
}
