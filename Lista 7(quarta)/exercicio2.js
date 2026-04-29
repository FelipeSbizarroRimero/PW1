const readline = require('readline-sync');

let numeros = [];

// Ler 5 números
for (let i = 0; i < 5; i++) {
    let num = Number(readline.question("Digite um número: "));
    numeros.push(num);
}

// Ordenar
numeros.sort((a, b) => a - b);

// Mostrar
console.log("\nNúmeros em ordem crescente:");
console.log(numeros);