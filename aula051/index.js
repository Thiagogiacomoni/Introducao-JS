// Retorno da função
// return = retorna um valor
// termina a função


// function soma(a, b) {
//     return a + b;
// }
// function soma2(a, b) {
//     console.log(a + b);
// }
// soma2(5, 2);



// document.addEventListener('click', function () { // não retorna valor mas faz algo
//     document.body.style.backgroundColor = 'red';
// });



// function criaPessoa(nome, sobrenome) { // a função criaPessoa faz o trabalho de criar o objeto
//     return {nome, sobrenome};
// }
// const p1 = criaPessoa('Thiago', 'giacomoni');
// const p2 = {
//     nome: 'Thiago',
//     sobrenome: 'giacomoni'
// };
// console.log(p1);
// console.log(p2);



// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }
// const fala = falaFrase('Ola');
// const resto = fala('mundo!');
// console.log(resto);



function criaMultiplicador(multiplicador) { // Uma função que cria e ja retorna uma outra função
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));