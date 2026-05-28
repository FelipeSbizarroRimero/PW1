const nomes = ["Felipe", "Lucas", "Kratos", "Benjamin"];

function buscarNome(nome) {

    for (let i = 0; i < nomes.length; i++) {

        if (nomes[i] == nome) {
            return "O nome existe no array.";
        }

    }

    return "O nome não existe no array.";
}

console.log(buscarNome("Felipe"));
console.log(buscarNome("João"));