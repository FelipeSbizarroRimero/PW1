const carrinho = [
    { nome: "Playstation 5", quantidade: 2, preco: 3000 },
    { nome: "Jordan", quantidade: 1, preco: 1300 },
    { nome: "Celular", quantidade: 1, preco: 2200 }
];

function calcularTotal(carrinho) {

    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].quantidade * carrinho[i].preco;
    }

    return total;
}

console.log("Total do carrinho: R$", calcularTotal(carrinho));