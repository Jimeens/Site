import {novidades} from "./data.js";
import {projetosFavoritos} from "./data.js";
import {projetosAtuais} from "./data.js";
import {projetosGerais} from "./data.js";

const cardNovidade = document.querySelector(".intro");

const cardFavaorito = document.querySelector(".container-environment");

const cardAtual = document.querySelector(".container-environment");
const searchAtual = document.querySelector("#searchAtual");

const cardGeral = document.querySelector(".container-environment");
const searchGeral = document.querySelector("#searchGeral");

const cardGrad = document.querySelector(".container-environment");
const searchGrad = document.querySelector("#searchGrad");
const projetosGrad = projetosGerais.filter(i => i.identificacao == "Graduação");

const cardPos = document.querySelector(".container-environment");
const searchPos = document.querySelector("#searchPos");
const projetosPos = projetosGerais.filter(i => i.identificacao == "Pós-graduação");

const cardIC = document.querySelector(".container-environment");
const searchIC = document.querySelector("#searchIC");
const projetosIC = projetosGerais.filter(i => i.identificacao == "Iniciação Científica");

const cardExtra = document.querySelector(".container-environment");
const searchExtra = document.querySelector("#searchExtra");
const projetosExtra = projetosGerais.filter(i => i.identificacao == "Projetos extras");

const news = novidades => {
    cardNovidade.innerHTML = "";
    novidades.forEach(novidade => {
        if (novidade.direct == "Esquerda"){
            cardNovidade.innerHTML += `
                <div class="black-div">
                    <section class="black-section-left">
                        <div>
                            <img src="${novidade.imagem}" alt="">
                        </div>
                        <div style="align-items: center;">
                            <h1>
                                ${novidade.titulo}
                            </h1>
                            <p>
                                ${novidade.desc}
                            </p>
                            <a class="black-section-left-btn" href="${novidade.link}">
                                <span>Saiba mais</span>
                            </a>
                        </div>
                    </section>
                </div>
            `
        }
        if (novidade.direct == "Direita"){
            cardNovidade.innerHTML += `
                <div class="black-div">
                    <section class="black-section-right">
                        <div>
                            <h1>
                                ${novidade.titulo}
                            </h1>
                            <p>
                                ${novidade.desc}
                            </p>
                            <a class="black-section-right-btn" href="${novidade.link}">
                                <span>Saiba mais</span>
                            </a>
                        </div>
                        <div>
                            <img src="${novidade.imagem}" alt="">
                        </div>
                    </section>
                </div>
            `
        }      
    })
};

const favoriteProjects = projetosFavoritos => {
    cardFavaorito.innerHTML = "";
    projetosFavoritos.forEach(favoritos => {
        cardFavaorito.innerHTML += `
            <div class="container-item">
                <h1>
                    ${favoritos.titulo}
                </h1>
                <p>
                    ${favoritos.desc}
                </p>
                <p><a href="${favoritos.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
};

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

const gradProjects = projetosGrad => {
    cardGrad.innerHTML = "";
    projetosGrad.forEach(grad => {
        cardGrad.innerHTML += `
            <div class="container-item">
                <h1>
                    ${grad.titulo}
                </h1>
                <h2 style="color: #3a90f3">
                    ${grad.identificacao}
                </h2>
                <h2>
                    ${grad.extra}
                </h2>
                <p><a href="${grad.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
};

const posProjects = projetosPos => {
    cardPos.innerHTML = "";
    projetosPos.forEach(pos => {
        cardPos.innerHTML += `
            <div class="container-item">
                <h1>
                    ${pos.titulo}
                </h1>
                <h2 style="color: #3a90f3">
                    ${pos.identificacao}
                </h2>
                <h2>
                    ${pos.extra}
                </h2>
                <p><a href="${pos.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
};

const icProjects = projetosIC => {
    cardIC.innerHTML = "";
    projetosIC.forEach(ic => {
        cardIC.innerHTML += `
            <div class="container-item">
                <h1>
                    ${ic.titulo}
                </h1>
                <h2 style="color: #3a90f3">
                    ${ic.identificacao}
                </h2>
                <h2>
                    ${ic.extra}
                </h2>
                <p><a href="${ic.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
};

const extraProjects = projetosExtra => {
    cardExtra.innerHTML = "";
    projetosExtra.forEach(extra => {
        cardExtra.innerHTML += `
            <div class="container-item">
                <h1>
                    ${extra.titulo}
                </h1>
                <h2 style="color: #3a90f3">
                    ${extra.identificacao}
                </h2>
                <h2>
                    ${extra.extra}
                </h2>
                <p><a href="${extra.link}">Saiba mais<i class="fas fa-arrow-right" style="margin-left: 10px"></i></a></p>
            </div>
        `
    });
};

window.addEventListener("load", news.bind(null,novidades));

window.addEventListener("load", favoriteProjects.bind(null,projetosFavoritos))

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

if (cardGrad && searchGrad) {
    searchGrad.addEventListener("keyup", (grad) => {
        const searchGrad = projetosGrad.filter(i => i.titulo.toLocaleLowerCase().includes(grad.target.value.toLocaleLowerCase()))
        gradProjects(searchGrad);
    })

    window.addEventListener("load", gradProjects.bind(null,projetosGrad));  
};

if (cardPos && searchPos) {
    searchPos.addEventListener("keyup", (pos) => {
        const searchPos = projetosPos.filter(i => i.titulo.toLocaleLowerCase().includes(pos.target.value.toLocaleLowerCase()))
        posProjects(searchPos);
    })

    window.addEventListener("load", posProjects.bind(null,projetosPos));  
};

if (cardIC && searchIC) {
    searchIC.addEventListener("keyup", (extra) => {
        const searchIC = projetosIC.filter(i => i.titulo.toLocaleLowerCase().includes(extra.target.value.toLocaleLowerCase()))
        icProjects(searchIC);
    })

    window.addEventListener("load", extraProjects.bind(null,projetosIC));  
};

if (cardExtra && searchExtra) {
    searchExtra.addEventListener("keyup", (extra) => {
        const searchExtra = projetosExtra.filter(i => i.titulo.toLocaleLowerCase().includes(extra.target.value.toLocaleLowerCase()))
        icProjects(searchExtra);
    })

    window.addEventListener("load", extraProjects.bind(null,projetosExtra));  
};
