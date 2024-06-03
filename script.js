const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua cidade está querendo reduzir o consumo de plástico, o que você vai fazer?",
        alternativas: [
            {
                texto: "Não darei a mínima.",
                afirmacao: "Ficou cheia de plástico"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ficou mais bonita com menos plásticos"
            }
        ]
    },
    {
        enunciado: "Sua cidade descidiu está querendo plantar árvores.",
        alternativas: [
            {
                texto: "Não vou ajudar e nem apoiar.",
                afirmacao: "e ficou cinza que nem São Paulo."
            },
            {
                texto: "Vou ajudar e apoiar",
                afirmacao: "e o ar da sua cidade melhorou."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua cidade...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();