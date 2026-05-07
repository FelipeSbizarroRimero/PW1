const input = require('readline-sync');

let opcao = -1;

let display = [
    { opcao: 1, descricao: "Soma" },
    { opcao: 2, descricao: "Subtracao" },
    { opcao: 3, descricao: "Multiplicacao" },
    { opcao: 3, descricao: "Adicionar funcionalidade" },
];


function calcular(operacao) {

    let num1 = input.questionInt('numero1 -> ');
    let num2 = input.questionInt('numero2 -> ');
    console.clear();
    return operacao(num1, num2);
}

let operacoes = {
    1: (num1, num2) => num1 + num2,
    2: (num1, num2) => num1 - num2,
    3: (num1, num2) => num1 * num2,
};


function inserirFuncaoNoDisplay(listaOpcoes = []) {

    let descricao = input.question("Digite uma funcionalidade: ");

    listaOpcoes.push({
        opcao: listaOpcoes.length,
        descricao: descricao
    });

    console.clear();
}


while (opcao != 0) {

    console.table(display);

    opcao = input.questionInt("Escolha uma opcao -> ");

    if (operacoes[opcao]) {

        let resposta = calcular(operacoes[opcao]);

        console.log("==============================");
        console.log("Resposta ->", resposta);
        console.log("==============================");

    } else if (opcao === 4) {

        inserirFuncaoNoDisplay(display);
        console.table(display);

    } else if (opcao !== 0) {

        console.log("Opcao invalida");

    }
}