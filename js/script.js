        // carrossel slad card ................................................................................
        let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function updateSlidePosition() {
            const slidesContainer = document.querySelector('.slides-container');
            slidesContainer.style.transform = `translateX(${-currentIndex * 418}px)`; 
        }

        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % (totalSlides - 5); 
            updateSlidePosition();
        }, 3000); 

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