const clients = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233344",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${clients.nome} e essa pessoa tem ${clients.idade} anos`);

console.log(`Seu CPF é xxx.${clients.cpf.substring(3, 6)}.${clients.cpf.substring(6, 9)}-xx`);