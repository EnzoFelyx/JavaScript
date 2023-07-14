const idadeMinima = 18;
let idadeCliente = 11;

if (idadeCliente < idadeMinima){
    console.log("Qual vai ser o sabor do:");
}
else
    console.log("Qual vai ser a bebida?")

//----------------------------------------//

console.log(idadeCliente < idadeMinima ? "suco" : "cerveja")

// ternário é ruim para manutenção, melhor usar if e else 

// coisas simples pode usar ternário, mas comparações complexas melhor usar if else ou outros (case etc)

