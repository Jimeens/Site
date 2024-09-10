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

const cardAtual = document.querySelector(".container-environment");
const searchAtual = document.querySelector("#searchAtual");

const atualProjects = projetosAtuais => {
    cardAtual.innerHTML = "";
    projetosAtuais.forEach(atuais => {
        cardAtual.innerHTML += `
            <div class="container-item">
                <h1>
                    ${atuais.titulo}
                </h1>
                <p>
                    ${atuais.desc}
                </p>
                <p><a href="${atuais.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
}

searchAtual.addEventListener("keyup", (atuais) => {
    const searchAtual = projetosAtuais.filter(i => i.titulo.toLocaleLowerCase().includes(atuais.target.value.toLocaleLowerCase()))
    atualProjects(searchAtual);
})

window.addEventListener("load", atualProjects.bind(null,projetosAtuais));