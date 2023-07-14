function apresentacao (nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (x, y) => x + y;

//console.log(soma(5,4));

const somaNumerosPequenos = (a, b, c ) => {
    if (a > 10){
        return console.log(b + c);
    }
    else 
        return console.log(a + b);
}

somaNumerosPequenos (20,10,15);

//Hoisting: arrow function se comporta como expressão