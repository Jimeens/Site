import {projetosAtuais} from "./DataAtuais.js";

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