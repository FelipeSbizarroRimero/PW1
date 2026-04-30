let listaDeProvas = [
    { disciplina: "Matemática", notaTirada: 8 },
    { disciplina: "Português", notaTirada: 5.5 },
    { disciplina: "História", notaTirada: 9 }
];


function filtrarAprovados(listaDeProvas) {
    for (let i = 0; i < listaDeProvas.length; i++) {
        if (listaDeProvas[i].notaTirada >= 6.0) {
            console.log(`Aprovado em: ${listaDeProvas[i].disciplina}`);
        }
    }
}

console.log("=== Disciplinas Aprovadas ===");
filtrarAprovados(listaDeProvas);


let sistemaEscolar = {
    nomeDoAluno: "Felipe",
    notas: [7, 8.5, 6, 9],

    calcularMediaGeral: function() {
        let soma = 0;

        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
};


console.log("\n=== Média do Aluno ===");
console.log(`Aluno: ${sistemaEscolar.nomeDoAluno}`);
console.log(`Média: ${sistemaEscolar.calcularMediaGeral()}`);