const aluno = {
    nome: "Felipe",
    idade: 16,
    curso: "Desenvolvimento de Sistemas"
};

function apresentarAluno(aluno) {
    return `O aluno ${aluno.nome} tem ${aluno.idade} anos e faz o curso de ${aluno.curso}.`;
}

console.log(apresentarAluno(aluno));