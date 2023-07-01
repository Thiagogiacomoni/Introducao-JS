// Parametros da funçao
// arguments que sustenta todos os argumentos enviados
// arguments só funciona com function
// function funcao(a, b, c) {
//     let total = 0;
//     for(let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);



// function funcao(a, b, c, d, e, f) { // parametros
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3); // argumentos



// function funcao({ nome, sobrenome, idade}) { // atribuição via desestruturação de objeto  
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'Thiago', sobrenome: 'giacomoni', idade: 24};
// funcao(obj);


// function funcao([valor1, valor2, valor3]) { // atribuição via desestruturação de array  
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Thiago', 'Giacomoni', 24]);



const conta = function(operador, acumulador, ...numeros) { // os '...' é o rest operator( deve ser o ultimo parametro a ser passado.), o resto dos argumentos vão todos para o parametro com os '...'
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);