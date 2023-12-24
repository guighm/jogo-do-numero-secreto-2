let numerosSorteados = [];
let numeroSecreto;
let tentativas;
let limiteSuperior = 10;

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabéns!");
        let palavra = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `Você descobriu o número secreto em ${tentativas} ${palavra}!`;
        exibirTextoNaTela("p", mensagem);
        document.getElementById("chutar").setAttribute("disabled", true);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto){
        exibirTextoNaTela("p", "O número secreto é menor");
    } else {
        exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
}

function exibirTextoNaTela(tag, texto) {
    let selecao = document.querySelector(tag);
    selecao.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * limiteSuperior + 1);
    let capacidadeDaLista = numerosSorteados.length;
    if (capacidadeDaLista == limiteSuperior) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroSecreto);
        return numeroSorteado;
    }
}

function main() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Digite um número entre 1 e 10:");
    document.getElementById("chutar").removeAttribute("disabled");
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

main();