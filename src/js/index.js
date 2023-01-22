//Evento para botão de abrir o trailer
const botaoTrailer = document.querySelector(".botao-trailer");
//Evento para botão de fechar o trailer
const botaoFecharModal = document.querySelector(".fechar-modal");
//Recebendo o elemento da modal
const modal = document.querySelector(".modal");
//evendo do video
const video = document.getElementById("video");
//Recebe o video do HTML
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

//Evento do botão do trailer
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

//Evento para fechar o trailer
botaoFecharModal.addEventListener("click", ()=> {
    alternarModal();
    video.setAttribute("src", "");
})

