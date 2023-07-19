const clientes = require ("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")) //função para ver se tem apartamento e pra ver se o array
    });                                                                                         // não possue a propriedade de "complemento"
};

const filtrador = filtrarApartamentoSemComplemento(clientes);
console.log (filtrador);