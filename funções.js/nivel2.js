let calcularAreaRetangulo = function(base, altura) {
    return base * altura;
};

console.log("Área do retângulo:", calcularAreaRetangulo(5, 10));


let elevarAoQuadrado = x => x * x;

console.log("Quadrado:", elevarAoQuadrado(4));


function gerarRelatorio(nomeAluno, status = "Pendente") {
    console.log(`Relatório do aluno ${nomeAluno} está ${status}`);
}

gerarRelatorio("Felipe");
gerarRelatorio("Ana", "Concluído");