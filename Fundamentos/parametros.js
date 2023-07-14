function soma(x, y) {
    return x + y;
}

//console.log(soma(5, 8));

function multiplica (x = 1, y = 1){
    return console.log(x * y);
}

multiplica(soma());


/* function nomeIdade(nome, idade) {
    return console.log(`Meu nome é ${nome} e minha idade é ${idade}`);
}

nomeIdade("Enzo", 21); */