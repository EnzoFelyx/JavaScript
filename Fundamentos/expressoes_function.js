// declaração da função podem ser chamadas antes ou depois da declaração

function minhaFuncao () {
}

//minhaFuncao();



//expressão de função -> só podem ser chamadas depois de declarar

console.log(soma(1,2));

const soma = function(x, y) {return x + y}

//console.log(soma(4,6));




console.log(apresentar())

function apresentar () {
    return "Olá";
}

