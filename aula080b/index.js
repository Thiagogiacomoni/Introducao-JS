// Criando classes

class Pessoa  {
    constructor(nome, sobrenome) { // construtor
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // metodo
        console.log(`${this.nome} está falando.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Thiago', 'Giacomoni');
const p2 = new Pessoa2('Thiago', 'Giacomoni');