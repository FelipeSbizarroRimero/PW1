const pessoas = [
    { nome: "Felipe", idade: 16 },
    { nome: "Rafael", idade: 19 },
    { nome: "Michelly", idade: 31 }
];

function maioresDeIdade(lista) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].idade > 18) {
            resultado[resultado.length] = lista[i];
        }
    }

    return resultado;
}

console.log(maioresDeIdade(pessoas));