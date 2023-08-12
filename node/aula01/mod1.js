class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'thiago';
const sobrenome = 'giacomoni';

module.exports = {
    nome, sobrenome, Pessoa
};

// exports.Pessoa = Pessoa;

// const nome = 'thiago';
// const sobrenome = 'giacomoni';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'o que eu quiser exportar';