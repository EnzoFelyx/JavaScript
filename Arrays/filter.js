const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [6, 4.5, 8, 7.5];

const alunosReprovados = alunos.filter((_,indice) =>{ //por nao estar usando o primeiro parametro, colocamos underline "_"
    return medias[indice] < 7;
});

console.log(alunosReprovados);

