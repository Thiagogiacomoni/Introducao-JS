// As varias maneiras de declarar funçoes em JS

// Declaração de função (function hoisting( pode usar a função antes de declarar ela, ou seja não faz diferença onde a função é criada e onde ela é usada.)) .DADO
function falaOi() {
    console.log('Oi');
}
falaOi();

// First-class objects (Objetos de primeira classe.)
// Function expression. DADO
const souUmDado = function() {
    console.log('Sou um dado.');
};
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function ECMA 2015.
// É uma function expression bem mais curta. DADO
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow();

// dentro de um objeto

const obj = {
    falar() { // Ou falar: function() {}
        console.log('Estou falando...')
    }
};
obj.falar();