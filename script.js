// Função para verificar e mostrar o banner de cookies
function checkCookie() {
    // Mostra o banner sempre que a página for carregada
    document.getElementById('cookieAlert').style.display = 'block';
}

// Função para definir o cookie quando o usuário aceita
function acceptCookies() {
    // Define o cookie com validade de 30 dias
    document.cookie = "cookieAccepted=true; max-age=" + 30*24*60*60 + "; path=/";
    
    // Oculta o banner
    document.getElementById('cookieAlert').style.display = 'none';
}

// Verifica o cookie e mostra o banner quando a página é carregada
window.onload = function() {
    checkCookie();

    var email = prompt("Por favor, insira o seu e-mail:");

    if (email) {
    alert("Obrigado! O seu e-mail foi registrado: " + email);
    } else {
    alert("Você não inseriu um e-mail.");
    }
}

//---------------------------------------------------------------------


// Seleciona todas as imagens da seção
const images = document.querySelectorAll('.seccao2 .container img');

// Adiciona um evento para cada imagem quando o mouse passa por cima
images.forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.2)";
        this.style.zIndex = "10";
    });

    image.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
        this.style.zIndex = "1";
    });
});

//--------------------------------------------------------------------------


