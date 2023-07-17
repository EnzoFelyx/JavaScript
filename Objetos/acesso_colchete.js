const clients = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233344",
    email: "andre@dominio.com",
};

//console.log(`O nome do cliente é ${clients['cpf']} e essa pessoa tem ${clients['idade']} anos`);

//console.log(`Seu CPF é xxx.${clients['cpf'].substring(3, 6)}.${clients['cpf'].substring(6, 9)}-xx`);

//metódo usado para quando nao se sabe quais serão as chaves que serão usadas. Ex: Deixa um forEach pré-pronto independente das chaves que virão depois.

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${clients[chave]}`)
})