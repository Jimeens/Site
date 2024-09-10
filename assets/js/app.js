const projetosAtuais = [
    {
        titulo: "Livro",
        desc: `Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.`,
        link: "#"
    },
    {
        titulo: "Site (One Piece)",
        desc: `Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.`,
        link: "#"
    },
    {
        titulo: "Site (Pessoal)",
        desc: `Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.`,
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