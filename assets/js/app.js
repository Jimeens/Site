import {projetosAtuais} from "./data.js";
import {projetosGerais} from "./data.js";

const cardAtual = document.querySelector(".container-environment");
const searchAtual = document.querySelector("#searchAtual");

const cardGeral = document.querySelector(".container-environment");
const searchGeral = document.querySelector("#searchGeral");

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
};

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
};

if (cardAtual && searchAtual) {
    searchAtual.addEventListener("keyup", (atuais) => {
        const searchAtual = projetosAtuais.filter(i => i.titulo.toLocaleLowerCase().includes(atuais.target.value.toLocaleLowerCase()))
        atualProjects(searchAtual);
    })

    window.addEventListener("load", atualProjects.bind(null,projetosAtuais));
    
};

if (cardGeral && searchGeral) {
    searchGeral.addEventListener("keyup", (gerais) => {
        const searchGeral = projetosGerais.filter(i => i.tags.toLocaleLowerCase().includes(gerais.target.value.toLocaleLowerCase()))
        geralProjects(searchGeral);
    })
    
    window.addEventListener("load", geralProjects.bind(null,projetosGerais));
}





