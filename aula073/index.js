// Metodos uteis para objetos


/*
Object.values
const produto = {nome: 'produto', preco: 1.8};
console.log(Object,values(produto)); // mostra os valores dos objetos
*/

/*
Object.entries
const produto = {nome: 'produto', preco: 1.8, material: 'porcelana'};
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
} // mostra os valores dos objetos e sua respectivas chaves
*/


/*
Object.assign(des, any)
 const produto = {nome: 'produto', preco: 1.8};
 const caneca = Object.assign({}, produto, {material: 'porcelana'}); // spread operator é mais intuitivo/ copiar um objeto

 caneca.nome = 'Outro nome';
 caneca.preco = 2.5;
 console.log(produto);
 console.log(caneca);
*/

/*
Object.getOwnPropertyDescriptor(o, 'prop')
const produto = {nome: 'produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer outra coisa'
});
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); retorna as propriedades writable, configurable
delete produto.preco;
delete produto.nome;
console.log(produto);
*/

/*
...(spread)
 const produto = {nome: 'produto', preco: 1.8};
 const caneca = {
     ...produto,
     material: 'porcelana'
 };

 produto.nome = 'thiago giacomoni';
 outraCoisa.preco = 2.5;
 console.log(produto);
 console.log(outraCoisa);
*/

// Já vimos

/*
Object.keys(retorna as chaves)
const produto = {nome: 'produto', preco: 1.8};
const caneca = {nome: produto.nome, preco: produto.preco};
console.log(objetct.keys(produto));
*/

/*
Object.freeze
const produto = {nome: 'produto', preco: 1.8};
Object.freeze(produto);
produto.nome = 'outro nome';// nao da pra alterar este objeto
const caneca = {nome: produto.nome, preco: produto.preco};
console.log(produto);
*/

//ObjectdefineProperties(define varias propriedades)
//Object.defineProperty(define uma propriedade)

