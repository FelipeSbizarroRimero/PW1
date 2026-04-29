let i = 0;
let notas = [];
let media = 0;

while (i < 4) {
    let nota = Number(readline.question(`Digite a nota ${i + 1}: `));
    
    notas[i] = nota;
    media = media + notas[i];
    
    i = i + 1;
}

media = media / 4;

console.log("\nMédia:", media.toFixed(2));

i = 0;

while (i < 4) {
    console.log(`Nota ${i + 1}:`, notas[i]);
    i = i + 1;
}