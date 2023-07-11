// Filter - filtrando o array -> sempre retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os numeros maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 22, 27];

// function callbackFilter(valor) {
//    return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

// const numerosFiltrados = numeros.filter( valor => valor > 10);
// console.log(numerosFiltrados);

// const numerosFiltrados1 = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });
// console.log(numerosFiltrados1);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 
const pessoas = [
    {nome: 'thiago', idade: 24},
    {nome: 'luca', idade: 58},
    {nome: 'Marci', idade: 25},
    {nome: 'rosana', idade:25},
    {nome: 'artur', idade: 22},
    {nome: 'Wallace', idade: 56},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasNosCinquenta = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasNosCinquenta);

const pessoasQueTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasQueTerminamComA);