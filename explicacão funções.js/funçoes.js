function soma(numero1, numero2){
    return numero1+numero2
}


function mostrarCalculo(n1,n2){
    console.log("A resposta é ->",soma(n1,n2))
}

function tabuada(numeroDaTabuada=2){
    console.log("Tabuada do " + numeroDaTabuada)
for (let i = 1; i < 10; i++) {
    console.log(`${i} x ${numeroDaTabuada} = ${i * numeroDaTabuada}`)
    
}
console.log("----------------")
}

tabuada(3)
tabuada(4)
tabuada(5)
tabuada(6)