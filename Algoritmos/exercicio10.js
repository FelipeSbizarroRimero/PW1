const jogadores = [
    { nome: "Felipe", pontos: 100 },
    { nome: "Lebron", pontos: 50 },
    { nome: "Curry", pontos: 40 }
];

function rankingJogadores(lista) {

    for (let i = 0; i < lista.length; i++) {

        for (let j = 0; j < lista.length - 1; j++) {

            if (lista[j].pontos < lista[j + 1].pontos) {

                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;

            }

        }

    }

    return lista;
}

console.log(rankingJogadores(jogadores));