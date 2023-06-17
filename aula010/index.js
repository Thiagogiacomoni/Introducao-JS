/* Aritméticos 
* + -> Adição / Concatenação;
* - -> Menos;
* / -> Divisão;
* * -> Multiplicação;
* ** -> Potenciação;
* % -> Resto da divisão;
*/
const num1 = 5;
const num2 = 10;

console.log(num1 + num2);

let contador = 10;
console.log(--contador);
console.log(contador--);
console.log(contador++)
console.log(++contador)

/* Operadores de atribuição */

let contador1 = 2;
contador1 *= 2;
contador1 *= 2;
console.log(contador1); 

// NaN -> Not a Number
// parseInt ( converte string para um número inteiro )
// parseFloat ( Converte uma string para um número flutuante)
// Number -> Melhor forma
const num3 = 10;
const num4 = Number('5');
console.log(num3 + num4);