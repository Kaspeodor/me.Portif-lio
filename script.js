// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Animação de Fade In
    const sections = document.querySelectorAll('.header, .section--sobre, .section--habilidades, .section--projetos, .section--contato');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Efeito de scroll no cabeçalho
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });
});
