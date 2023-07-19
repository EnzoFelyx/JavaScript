const price = [25, 15, 30, 50, 45, 20];

let cheapper = 0;

for (let i=0; i < price.length; i++){
    if(price[i] < price[cheapper]){
        cheapper = i;
    }
}

console.log(`O livro mais barato custa R$${price[cheapper]},00`);

// teste de mesa para achar o mais barato em uma lista desordenada

