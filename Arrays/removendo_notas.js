const notas = [10, 6, 8, 5, 7]

notas.pop (4); //remove elementos no final do array

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é: ${media}`);