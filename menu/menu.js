const input = require('readline-sync')




let opcao = -1;
let display = [
    {
        opcao: 1,
        descricao: "Soma",
    },
    {
        opcao: 2,
        descricao: "Subtracao",
    },
    {
        opcao: 3,
        descricao: "Multiplicacao",
    },
    {
        opcao: 4,
        descricao: "Adicionar funcionalidade",
    },




]




function soma() {
    let num1 = input.questionInt('numero1->');
    let num2 = input.questionInt('numero2->');
    console.clear()
    return num1 + num2;
}


function subtracao() {
    let num1 = input.questionInt('numero1->');
    let num2 = input.questionInt('numero2->');
    console.clear()
    return num1 - num2;
}


function multiplicacao() {
    let num1 = input.questionInt('numero1->');
    let num2 = input.questionInt('numero2->');
    console.clear()
    return num1 * num2;
}


function inserirFuncaoNoDisplay(listaOpcoes=[]){
listaOpcoes[listaOpcoes.length]={
        opcao: listaOpcoes.length+1,
        descricao:input.question("Digite uma funcionalidade") ,
    }
    console.clear()
}


while (opcao != 0) {


    console.table(display);


    opcao = Number(input.questionInt("escolha uma opcao -> "));
    if (opcao === 1) {
        let resposta = soma()
        console.log("==============================")
        console.log("resposta->", resposta)
        console.log("==============================")
    } else if (opcao === 2) {
        let resposta = subtracao()
        console.log("==============================")
        console.log("resposta->", resposta)
        console.log("==============================")
    } else if (opcao === 3) {
        let resposta = multiplicacao()
        console.log("==============================")
        console.log("resposta->", resposta)
        console.log("==============================")
    } else if (opcao === 4) {
       inserirFuncaoNoDisplay(display);
       console.table(display)
    } else {
        console.log('Opcao invalida')
    }
}
