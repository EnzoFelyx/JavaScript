const clientes = require("./clientes.json");

function ordenar(lista, propriedade) { //cria um filtro generico dependendo da propriedade que vai ser passada
    const resultado = lista.sort((a,b) => { //metodo sort usa 2 parametros como base onde téra que declarar o que acontece nos 3 possiveis caso de comparação
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    })

    return resultado;

}

const ordenadorPorNome = ordenar(clientes, "nome"); //escolhe que o filtro usado será a propriedade "nome"

console.log(ordenadorPorNome)