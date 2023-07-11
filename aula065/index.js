// Filter - filtrando o array

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 22, 27];

// function callbackFilter(valor) {
//    return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

const numerosFiltrados = numeros.filter( valor => valor > 10);
console.log(numerosFiltrados);

// const numerosFiltrados1 = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });
// console.log(numerosFiltrados1);