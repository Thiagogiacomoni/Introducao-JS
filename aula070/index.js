// revisando objetos

// const pessoa = {
//     nome: 'thiago',
//     sobrenome: 'giacomoni'
// };
// const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa.nome);

// const pessoa1 = new Object();
// pessoa1.nome = 'thiago';
// pessoa1.sobrenome = 'giacomoni';
// pessoa1.idade = 24
// pessoa1.falarNome = function() {
//     return (`${this.nome} esta falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// padrao de projeto = factory functions / constructor functions / classes

// factory functions
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }

// const p1 = criaPessoa('Thiago', 'giacomoni');
// console.log(p1.nomeCompleto); // nao precisa chamar a funçao por causa do get

// constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // trava o objeto, não pode ser alterado
}
// new cria um objeto vazio {} e o this atrela com esse novo objeto vazio ou seja: {} <- this -> this
const p1 = new Pessoa('thiago', 'giacomoni');
p1 = 'outra coisa' // nao pode
p1.nome = 'outra coisa' // pode
const p2 = new Pessoa('felipe', 'de liz');

console.log(p1);
console.log(p2);