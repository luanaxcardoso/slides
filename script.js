let cont = 1;
let timer; // Variável para armazenar o intervalo

function iniciarSlideshow() {
    timer = setInterval(function() {
        document.getElementById('s' + cont).checked = true;
        cont++;
        if (cont > 10) {
            cont = 1;
        }
    }, 2000);
}

iniciarSlideshow(); // Iniciar o slideshow ao carregar a página

// Função para pausar o slideshow
function pausarOuReiniciar() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    } else {
        iniciarSlideshow();
    }
}

const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', pausarOuReiniciar);



