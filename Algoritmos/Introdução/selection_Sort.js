const livros = require('./lista_livros');
const menorValor = require('./menor_Valor'); //função que vê qual é o menor número

for (let atual = 0; atual < livros.length; atual++){ //função que usa a função achar o menor e os ordena em ordem decrescente de um array

    let menor = menorValor(livros, atual) //na primeira volta, vê qual é o livro mais barato de todas

    let livroAtual = livros[atual]; // guarda qual é a posição do livro atual 
    let livroMenorPreco = livros[menor]; //guarda qual é o livro preço do livro atual

    livros[atual] = livroMenorPreco; //a posição atual vai receber a posição do menorp preço, para ficar salvo e na proxima volta começar da proxima posição
    livros[menor] = livroAtual;
}

console.log(livros)