let currentIndex = 0;
const slides = document.querySelectorAll('.carrossel');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides-container');

function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth; // Largura de um slide (33.33% do container)
    slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Função para o próximo slide
function nextSlide() {
    if (currentIndex < totalSlides - 3) { // Mostrar 3 slides de cada vez
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para o início
    }
    updateSlidePosition();
}

// Função para o slide anterior
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 3; // Volta para o final
    }
    updateSlidePosition();
}

// Intervalo automático para mudar slides a cada 3 segundos
setInterval(nextSlide, 3000);

// Eventos de toque para dispositivos móveis
let startX;
slidesContainer.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

slidesContainer.addEventListener('touchmove', (event) => {
    if (!startX) return;

    const endX = event.touches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) { // deslizar para a esquerda
        nextSlide();
        startX = null;
    } else if (diff < -50) { // deslizar para a direita
        prevSlide();
        startX = null;
    }
});

// Atualiza a posição quando a janela é redimensionada
window.addEventListener('resize', updateSlidePosition);


        // contato sistema de enviar mensagem .............................................................................................
        document.getElementById('messageForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            // Recupera mensagens existentes ou cria um novo array
            const messages = JSON.parse(localStorage.getItem('mensagens')) || [];
            messages.push({ name, message }); // Armazena um objeto com nome e mensagem
            localStorage.setItem('mensagens', JSON.stringify(messages)); // Armazena as mensagens

            document.getElementById('message').value = ''; // Limpa o campo de mensagem
            document.getElementById('name').value = ''; // Limpa o campo de nome
            document.getElementById('name').focus(); // Foca no campo de nome
        });

        document.getElementById('viewMessages').addEventListener('click', function() {
            window.open('receber.html', '_blank'); // Abre a página de mensagens em uma nova aba
        });
        // menu do mobile .....................................................................
        function showMenu() {
            document.getElementById('overlay').classList.add('show');
          }
          
          function hideMenu() {
            document.getElementById('overlay').classList.remove('show');
          }
          