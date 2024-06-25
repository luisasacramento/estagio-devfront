document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.animated-text');
    let speed = 0.5; // Ajuste a velocidade conforme necessário

    textElements.forEach((textElement, index) => {
        let direction = index % 2 === 0 ? -1 : 1; // Alterna a direção
        let position = 0;

        function animateText() {
            position += speed * direction;
            textElement.style.transform = `translateX(${position}%)`;

            if (position <= -100) {
                direction = 1; // Muda a direção para direita
            } else if (position >= 100) {
                direction = -1; // Muda a direção para esquerda
            }

            requestAnimationFrame(animateText);
        }

        animateText();
    });
});


