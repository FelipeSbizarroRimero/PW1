const livros = [
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J. K. Rowling", ano: 1997 },
    { titulo: "Jogador Nº 1", autor: "Ernest Cline", ano: 2011 },
    { titulo: "A Queda dos Reinos", autor: "Morgan Rhodes", ano: 2012 }
];

function livrosRecentes(listaLivros) {
    let resultado = [];

    for (let i = 0; i < listaLivros.length; i++) {
        if (listaLivros[i].ano > 2010) {
            resultado[resultado.length] = listaLivros[i];
        }
    }

    return resultado;
}

console.log(livrosRecentes(livros));