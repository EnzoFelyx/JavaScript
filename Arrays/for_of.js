const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (let elementos of notas) {
    somaNotas += elementos;
}

console.log(somaNotas/notas.length)