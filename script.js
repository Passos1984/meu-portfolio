// Seleciona o botão no HTML pelo ID
const btnTopo = document.getElementById("btnTopo");

// Evento que detecta a rolagem da tela
window.onscroll = function() {
    // Se a página for rolada mais de 100 pixels para baixo, mostra o botão
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTopo.style.display = "block";
    } else {
        // Caso contrário, volta a esconder o botão
        btnTopo.style.display = "none";
    }
};

// Evento que detecta o clique no botão
btnTopo.addEventListener("click", function() {
    // Rola a página de volta para o topo de forma suave
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});