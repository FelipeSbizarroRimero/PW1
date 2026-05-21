// 4
let calcularAreaRetangulo = (base,altura) => base * altura
console.log("Exercicio 4 (Área 5x10:)", calcularAreaRetangulo(5,10));

// 5
let elevarAoQuadrado = (X) => X * X
console.log("Exercicio 5 (7 ao quadrado:)", elevarAoQuadrado(7));

// 6
 function gerarRelatorio(nomeAluno, status = "Pendente") {
    console.log(`Relatório do aluno ${nomeAluno} está ${status}`);
 }

 // testando 6
 console.log("Exercicio 6:")
 gerarRelatorio("Alessandro")
 gerarRelatorio("Marina","Concluido")
