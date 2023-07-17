const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "32323123124"],
};

cliente.enderecos = [{
    rua: "Av. Presidente Wilson",
    numero: 232,
    apartamento: true,
    complemento: "Ap. 423",
},
]

cliente.enderecos.push({
    rua: "R. Jose monteiro",
    numero: 313,
    apartamento: false,
    complemento: "Fundos",
})


const listaApenasApartamentos = cliente.enderecos.filter( //lista apenas endereços que possuem apartamento = true
    (endereco) => endereco.apartamento === true
  );
  
  console.log(listaApenasApartamentos);