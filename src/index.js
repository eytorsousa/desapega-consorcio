const backToTopButton = document.querySelector('.back_to_top');
const header = document.querySelector('pre-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 750) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

