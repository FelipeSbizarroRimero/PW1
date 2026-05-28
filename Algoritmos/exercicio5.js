function contar(lista) {

    let resultado = {};

    for (let i = 0; i < lista.length; i++) {

        let item = lista[i];

        if (resultado[item]) {
            resultado[item] = resultado[item] + 1;
        } else {
            resultado[item] = 1;
        }

    }

    return resultado;
}

const frutas = [
    "Maçã",
    "Banana",
    "Maçã",
    "Uva",
    "Banana",
    "Maçã"
];

console.log(contar(frutas));