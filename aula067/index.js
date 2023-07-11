// reduce - reduzindo o array 
// reduce reduz um array a um unico valor

// some todos os numeros(reduce)
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 22, 27];
// const total = numeros.reduce(function(acumulador, valor) {
//     acumulador += valor;
//     return acumulador;
// }, 0);
// console.log(total);

// retorne um array com os pares(filter)
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(total);

// retorne um array com o dobro dos valores(map)
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 22, 27];
// const total = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);
// console.log(total);

// retorne a pessoa mais velha
const pessoas = [
    {nome: 'thiago', idade: 24},
    {nome: 'luca', idade: 58},
    {nome: 'Marci', idade: 25},
    {nome: 'rosana', idade:25},
    {nome: 'artur', idade: 22},
    {nome: 'Wallace', idade: 56},
];
const maisVelho = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelho);