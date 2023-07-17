const nomes = ["Evaldo", "Mari", "Camis"];

/* nomes.forEach((nome) => {
  console.log(nome);
}); */

function imprimeNome (nomes) {
    console.log(`Oi ${nomes}`);
}

nomes.forEach(imprimeNome);