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
const projetosExtradois = projetosGerais.filter(i => i.identificacaodois == "Guloso");

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

const valoresNumero = [3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0];

const mensagensStatus = [
    "ESTÁ DANDO",
    "ESTÁ LIVRE",
    "ESTÁ REBOLANDO",
    "ESTÁ SENTANDO",
    "ESTÁ MAMANDO",
    "ESTÁ MAMANDO E SENTANDO"
];

const hashString = texto => {
    let hash = 0;
    for (let i = 0; i < texto.length; i++) {
        hash = ((hash << 5) - hash) + texto.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
};

const getChaveHorario = () => {
    const agora = new Date();

    const partes = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        hour12: false
    }).formatToParts(agora);

    const get = tipo => partes.find(p => p.type === tipo)?.value;

    const ano = get("year");
    const mes = get("month");
    const dia = get("day");
    const hora = Number(get("hour"));

    const bloco = hora; // 0 a 12

    return `${ano}-${mes}-${dia}-bloco-${bloco}`;
};

const gerarNumeroFixo = (projeto, chaveHorario) => {
    const index = hashString(`${projeto.titulo}-${chaveHorario}-numero`) % valoresNumero.length;
    const numero = valoresNumero[index];

    return numero.toFixed(1);
};

const gerarStatusFixo = (projeto, chaveHorario) => {
    const index = hashString(`${projeto.titulo}-${chaveHorario}-status`) % mensagensStatus.length;
    return mensagensStatus[index];
};

const atualizarProjetosGerais = () => {
    const chaveHorario = getChaveHorario();

    projetosGerais.forEach(projeto => {
        projeto.numeroAleatorio = gerarNumeroFixo(projeto, chaveHorario);
        projeto.status = gerarStatusFixo(projeto, chaveHorario);
    });
};

const ordenarPorNumero = projetos => {
    return [...projetos].sort((a, b) => {
        return Number(b.numeroAleatorio) - Number(a.numeroAleatorio);
    });
};

const geralProjects = projetos => {
    cardGeral.innerHTML = "";

    ordenarPorNumero(projetos).forEach(gerais => {

        cardGeral.innerHTML += `
            <div class="container-item">
                <div class="coluna">
                    <h1>${gerais.titulo}</h1>

                    <div class="wrapper">
                        <ul class="nav-links">
                            <li><p>${gerais.identificacao}</p></li>
                            <li><p>${gerais.identificacaodois}</p></li>
                            <li><p>${gerais.identificacaotres}</p></li>
                        </ul>
                    </div>

                    <h2>
                        ${gerais.numeroAleatorio} | 5.0
                    </h2>
                </div>

                <div class="coluna">
                    <h3>
                        ${gerais.status}
                    </h3>
                </div>
            </div>
        `;
    });
};

// render inicial
atualizarProjetosGerais();
geralProjects(projetosGerais);

// atualiza os números a cada 10 minutos
setInterval(() => {
    atualizarProjetosGerais();
    geralProjects(projetosGerais);
}, 60 * 1000);


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
