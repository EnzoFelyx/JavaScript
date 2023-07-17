const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "32323123124"],
    saldo: 300,
    efetuaPagamento: function (valor) {
        return valor > this.saldo ? "Saldo insuficiente" : `Compra efetuada com sucesso. Seu saldo agora é de: R$${this.saldo -=valor}`;
    }
};

console.log(cliente.efetuaPagamento(301));