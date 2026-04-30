let usuarios = [
    {nome: "Alessandro", idade: "45"},
    {nome: "Erick", idade: "18"},
    {nome: "Felipe", idade: "16"},
    {nome: "Mikalateia", idade: "12"},
    {nome: "Lucas", idade: "15"},
    {nome: "lilica", idade: "6"}
]

let i = 0; 

console.log("========Relatorio========");
while(i < usuarios.length){
console.log(`
    id: ${i+1}
    nome: ${usuarios[i].nome}
    idade: ${usuarios[i].idade}
    `)
console.log("==========================");
i++;

}