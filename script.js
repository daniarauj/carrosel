function limparCampos() {
    document.getElementById('nomeLivro').value = "";
    document.getElementById('autorLivro').value = "";
    document.getElementById('anoLivro').value = "";
}

function exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = mensagem;
}

function atualizarNumLivros() {
    const numLivrosElement = document.getElementById("numLivros");
    const numLivros = biblioteca.length;
    numLivrosElement.textContent = `Número de livros cadastrados: ${numLivros}`;
}

function fadeIn() {
    let opacidade = 0;

    const fadeInterval = setInterval(() => {
        opacidade += 0.03;
        IMG.style.opacity = opacidade;

        if (opacidade >= 1) {
            clearInterval(fadeInterval);
        }
    }, 20);
}

prevButton.addEventListener('click', () => {
    if (imgIndice > 0) {
        --imgIndice;
        carregar();
    }
});

nextButton.addEventListener('click', () => {
    const limite = IMAGENS.length - 1;
    if (imgIndice < limite) {
        ++imgIndice;
        carregar();
    }
});

function carregar() {
    IMG.style.opacity = 0;
    fadeIn();
    IMG.src = biblioteca[biblioteca.length - 1].imagem;
}

function excluirLivro() {
    if (biblioteca.length > 0) {
        biblioteca.pop();
        atualizarNumLivros();
        mostrarLivros();
        carregar();
    }
}

carregar();