// contrutora -> molde (classe)

function Pessoa(nome, sobrenome) { // função construtora
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instancia da função construtora / abaixo objetos que vem da função
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- pessoa = função construtora
const pessoa2 = new Pessoa('Thiago', 'G.'); // <- pessoa = função construtora

console.dir(pessoa1);
console.dir(pessoa2);