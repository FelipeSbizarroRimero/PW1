let input = require("readline-sync");

let numeros = [];

for (let i = 0; i < 5; i++) {
    let num = input.questionInt("Digite um numero: ");
    numeros.push(num);
}

numeros.sort((a, b) => a - b);

console.log("\nNúmeros em ordem crescente: " + numeros);