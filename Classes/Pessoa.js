class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf){
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao('João', 30, '8888888', '12458435842')
console.log(cidadao instanceof Pessoa);



// const pessoa1 = new Pessoa('Carlos', 20);
// pessoa1.idade = 21;
// console.log(pessoa1);

// const pessoa2 = new Pessoa('Laura', 36);
//  console.log(pessoa2);