// 9

let listaDeProva = [
    {
        disciplina:"Lógica de Programação",
        notaTirada:10
    },
    {
        disciplina:"Desenvolvimento Web",
        notaTirada:8.4  
    },
    {
        disciplina:"Estrutura de Dados",
        notaTirada:6.4
    },
]

function filtrarAprovados(provas=[]){
for(let i = 0; i<provas.length; i++) {
    if (provas[i].notaTirada>7.0) {
console.log(`- ${provas[i].disciplina} (Nota: ${provas[i].notaTirada})`)
    }   
}

}
//testando 9
console.log("Exercicio 9:")
filtrarAprovados(listaDeProva)

// 10

let sistemaEscolar = {
nomeDoAluno:"Alessandro",
notas:[8.0,9.5,7.5,10.0],
calcularMediaGeral:function(){
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i]
    }
    //divide a soma total pela quantidade de notas
    const media = soma/this.notas.length
    return media
}
}
//testando 10
console.log("Exercicio 1o:");
const mediaFinal = sistemaEscolar.calcularMediaGeral();
console.log(`A média final do aluno ${sistemaEscolar.nomeDoAluno} é: ${mediaFinal}`)

