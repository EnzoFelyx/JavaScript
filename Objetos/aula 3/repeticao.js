const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "32323123124"],
};

cliente.endereco = [
 {
    rua: "Av. Presidente Wilson",
    numero: 232,
    apartamento: true,
    complemento: "Ap. 423",
 },
]

for(let chave in cliente) {

    let tipo = typeof cliente[chave];

    if (tipo != 'object' && tipo != "function"){ //tratamento para mostrar dados que nao sejam objetos e funções
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
    
    //console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); //object object
}