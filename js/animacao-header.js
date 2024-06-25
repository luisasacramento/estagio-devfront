document.addEventListener('DOMContentLoaded', () => {
    const phrases = document.querySelectorAll('.phrase');
    const section = document.querySelector('.section');

    function checkVisibility() {
        const rect = section.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        if (rect.top <= windowHeight * 0.5) {
            section.classList.add('visible');
            phrases.forEach((phrase, index) => {
                setTimeout(() => {
                    phrase.classList.add('visible');
                }, index * 500); // Delay para cada frase
            });
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica a visibilidade na carga da página
});
