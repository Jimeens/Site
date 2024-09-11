import {projetosGerais} from "./dataGerais.js";

const cardGeral = document.querySelector(".container-environment");
const searchGeral = document.querySelector("#searchGeral");

const geralProjects = projetosGerais => {
    cardGeral.innerHTML = "";
    projetosGerais.forEach(gerais => {
        cardGeral.innerHTML += `
            <div class="container-item">
                <h1>
                    ${gerais.titulo}
                </h1>
                <h2 style="color: #3a90f3">
                    ${gerais.identificacao}
                </h2>
                <h2>
                    ${gerais.extra}
                </h2>
                <p><a href="${gerais.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
}

searchGeral.addEventListener("keyup", (gerais) => {
    const searchGeral = projetosGerais.filter(i => i.tags.toLocaleLowerCase().includes(gerais.target.value.toLocaleLowerCase()))
    geralProjects(searchGeral);
})

window.addEventListener("load", geralProjects.bind(null,projetosGerais));