const livros = require("./lista_livros")

let cheapper = 0;

for (let i=0; i < livros.length; i++){
    if(livros[i].preco < livros[cheapper].preco){
        cheapper = i;
    }
}

console.log(`O livro mais barato é ${livros[cheapper].titulo} custa R$${livros[cheapper].preco},00`);

// teste de mesa para achar o mais barato em uma lista desordenada

