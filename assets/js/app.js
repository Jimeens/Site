const projetosAtuais = [
    {
        titulo: "Livro",
        desc: `Em adição à umas das minhas iniciações científicas, foi colocada em prática o processo de escrever um livro/apostila sobre mecânica quântica.`,
        link: "#"
    },
    {
        titulo: "Site (One Piece)",
        desc: `Afim de aprender HTML5, CSS e Javascript, comecei a produzir um simples site de One Piece com estas tecnologias envolvidas para estudar.`,
        link: "#"
    },
    {
        titulo: "Site (Pessoal)",
        desc: `Tanto para armazenar informações profissionais quanto estudar um pouco de front-end, decidi produzir meu próprio site (este mesmo).`,
        link: "#"
    }
]

const cardContainer = document.querySelector(".container-environment");
const searchInput = document.querySelector("#searchInput");


const displayData = projetosAtuais => {
    cardContainer.innerHTML = "";
    projetosAtuais.forEach(e => {
        cardContainer.innerHTML += `
            <div class="container-item">
                <h1>
                    ${e.titulo}
                </h1>
                <p>
                    ${e.desc}
                </p>
                <p><a href="${e.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
}

searchInput.addEventListener("keyup", (e) => {
    const search = projetosAtuais.filter(i => i.titulo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    displayData(search);
})

window.addEventListener("load", displayData.bind(null,projetosAtuais));