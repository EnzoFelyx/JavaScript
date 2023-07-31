const listaLivros = require('./array')

function encontraMenores(pivo, array) {

    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {

        produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;

        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)

    return array;
}

function trocaLugar(array, from, to) {
    const elem1 = array[from];
    const elem2 = array[to];

    array[to] = elem1;
    array[from] = elem2;
}

function divideNoPivo(array) {

    let pivo = array[Math.floor(array.length / 2)]
    let valoresMenores = 0;

    encontraMenores(pivo, array)

    for (let analisando = 0; analisando < array.length; analisando++) {

        let atual = array[analisando];
        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++;
        }
    }

    return array;

}

module.exports = trocaLugar;

console.log(divideNoPivo(listaLivros))
//console.log(encontraMenores(listaLivros[2], listaLivros));