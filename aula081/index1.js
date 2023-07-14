// getters e setters com class

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Thiago', 'Giacomoni');
p1.nomeCompleto = 'Thiago Giacomoni';
console.log(p1.nome);
console.log(p1.sobrenome);