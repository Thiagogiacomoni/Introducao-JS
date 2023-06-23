// ...rest, ...spread
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [um, dois, tres, ...resto] = numeros; // funçao rest (pegando o resto)
// console.log(um, dois, tres);
// console.log(resto);


// forma numero um de pegar valores dentro de arrays
// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const [,[,,seis]] = numeros;
// console.log(seis);


const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lsita1, lista2, lista3] = numeros;
console.log(lista3[2]);