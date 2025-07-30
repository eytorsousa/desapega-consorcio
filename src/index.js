const backToTopButton = document.querySelector('.back_to_top');
const header = document.querySelector('pre-header');
const details = document.querySelectorAll('details');

window.addEventListener('scroll', () => {
    if (window.scrollY > 750) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

details.forEach(detail => {
    detail.addEventListener('click', () => {
        details.forEach(d => {
            if (d !== detail) {
                d.open = false;
            }
        });
    });
});
