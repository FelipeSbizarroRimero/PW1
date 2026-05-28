const produtos = [
    { nome: "Playstation 2", preco: 200 },
    { nome: "Lápis", preco: 5 },
    { nome: "Monitor", preco: 500 },
    { nome: "Caderno", preco: 20 }
];

function produtosAcimaDe50(lista) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].preco > 50) {
            resultado[resultado.length] = lista[i];
        }
    }

    return resultado;
}

console.log(produtosAcimaDe50(produtos));