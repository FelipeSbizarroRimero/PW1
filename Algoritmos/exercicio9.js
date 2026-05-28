const conta = {
    agencia: "123",
    numeroConta: "2009",
    senha: "070809",
    saldo: 780,
    historico: []
};

function validarAcesso(agencia, numeroConta, senha) {

    if (
        agencia == conta.agencia,
        numeroConta == conta.numeroConta,
        senha == conta.senha
    ) {
        return "Pode passar";
    } else {
        return "Incorreto";
    }

}

function exibirSaldo() {
    return "Saldo disponível: R$ " + conta.saldo;
}

function realizarSaque(valor) {

    if (valor > conta.saldo) {
        return "Saldo insuficiente.";
    }

    conta.saldo = conta.saldo - valor;

    conta.historico[conta.historico.length] =
        "Saque de R$ " + valor;

    let notas100 = parseInt(valor / 100);
    valor = valor % 100;

    let notas50 = parseInt(valor / 50);
    valor = valor % 50;

    let notas20 = parseInt(valor / 20);
    valor = valor % 20;

    let notas10 = parseInt(valor / 10);

    return (
        "Saque realizado com sucesso!\n" +
        "Notas entregues:\n" +
        "100: " + notas100 + "\n" +
        "50: " + notas50 + "\n" +
        "20: " + notas20 + "\n" +
        "10: " + notas10
    );

}

console.log(validarAcesso("123", "2009", "070809"));
console.log(exibirSaldo());
console.log(realizarSaque(280));
console.log(exibirSaldo());