document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  const contactPopup = document.getElementById('contactPopup');
  const warningPopup = document.querySelector('.warning');
  const closeWarningPopup = document.getElementById('closeWarningPopup');

  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const nome = formData.get('Nome') || 'Usuário';
      formData.set('_subject', `Possível cliente: ${nome}`);
      const actionURL = form.getAttribute('action');

      try {
        const response = await fetch(actionURL, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          if (contactPopup.classList.contains('show')) {
              contactPopup.classList.remove('show');
              contactPopup.classList.add('hidden');
          }

          if (warningPopup) {
            warningPopup.classList.remove('hidden');
            warningPopup.classList.add('show');
          }

          form.reset();
        } else {
          alert('Erro ao enviar. Tente novamente.');
        }
      } catch (err) {
        console.error('Erro ao enviar formulário:', err);
        alert('Erro na conexão. Tente novamente mais tarde.');
      }
    });
  });

  if (closeWarningPopup) {
    closeWarningPopup.addEventListener('click', () => {
      closePopup(warningPopup);
    });
  }

  if (warningPopup) {
    warningPopup.addEventListener('click', (e) => {
      if (e.target === warningPopup) closePopup(warningPopup);
    });
  }

  function closePopup(popup) {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  }
});
