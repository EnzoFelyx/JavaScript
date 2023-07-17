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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")){
    console.error("Erro. É necessário ter um endereço cadastrado")
}