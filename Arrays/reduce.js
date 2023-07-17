//usar o reduce para fazer a média de 3 salas diferentes.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {

    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A média da sala de JS é de: ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é de: ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Phyton é de: ${calculaMedia(salaPython)}`);