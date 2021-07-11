class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Carlos', 20);
pessoa1.idade = 21;
console.log(pessoa1);

const pessoa2 = new Pessoa('Laura', 36);
 console.log(pessoa2);