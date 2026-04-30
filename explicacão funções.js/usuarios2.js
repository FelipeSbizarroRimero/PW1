let usuarios = [
    {nome: "Alessandro", idade: "45"},
    {nome: "Erick", idade: "18"},
    {nome: "Felipe", idade: "16"},
    {nome: "Mikalateia", idade: "12"},
    {nome: "Lucas", idade: "15"},
    {nome: "lilica", idade: "6"}
]

let i = usuarios.length; 

console.log("========Relatorio========");
while(i > 0){
console.log(`
    id: ${i}
    nome: ${usuarios[i-1].nome}
    idade: ${usuarios[i-1].idade}
    `)
console.log("==========================");
i--;

}