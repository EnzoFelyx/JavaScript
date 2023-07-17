const notas = [10, 6.5, 8, 7.5];

//método de callback

let somaNotas = 0;

notas.forEach(function(notas, indice) {
    somaNotas += notas;
    console.log(`O indice é ${indice}`);
})

console.log(somaNotas/notas.length)