/* 

Primitivos (Imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

// let a = 'A';
// let b = a; // Cópia quando o dado for primitivo
// console.log(a, b);
// 
// a = 'Outra coisa';
// console.log(a, b);

*/

/*
Referência (mutável) = Array, object, function - Valores passados por referencia

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);
// 
// a.push(4);
// console.log(a, b);
// 
// b.pop();
// console.log(a,b);
// 
// a.push('Thiago');
// console.log(a, c);

*/

const a = {
    nome: 'Thiago',
    sobrenome: 'giacomoni'
};
const b = {...a};

a.nome= 'Felipe';
console.log(a);
console.log(b);