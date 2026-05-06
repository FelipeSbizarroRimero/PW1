let input = require("readline-sync");

let alunos = 5;
let notasPorAluno = 4;

for (let i = 0; i < alunos; i++) {
    let soma = 0;
    let notas = [];

    console.log(`\nAluno ${i + 1}`);

    for (let j = 0; j < notasPorAluno; j++) {
        let nota = input.questionInt(`Digite a nota ${j + 1}: `);
        notas.push(nota);
        soma += nota;
    }

    let media = soma / notasPorAluno;

    console.log("Notas:", notas);
    console.log("Média:", media.toFixed(2));
}
