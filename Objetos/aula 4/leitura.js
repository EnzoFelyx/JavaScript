const dados = require("./cliente.json");

/* console.log(dados);
console.log(typeof dados);
 */
const clienteEmString = JSON.stringify(dados); //transforma JSON em string

/* console.log(clienteEmString);
console.log(typeof clienteEmString); */

const converterEmJSON = JSON.parse(clienteEmString); // converte string em json

console.log(converterEmJSON); 