// const array = [1, 2, 3];
// 
// array.push(4);
// array[0] = 'luiz';
// console.log(array);



// const pessoa1 = {
//     nome: 'Luiz', 
//     sobrenome: 'Miranda',
//     idade: 25
// };
// 
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);


// function criaPessoa(nome, sobrenome, idade) { // <= PARAMETROS
//     return {
//         nome, sobrenome, idade
//     };
// }
// 
// const pessoa1 = criaPessoa('Thiago', 'Giacomoni', 24); // <= ARGUMENTO (Valor passado para o parametro)
// const pessoa2 = criaPessoa('Enrico', 'Lanner', 25);
// const pessoa3 = criaPessoa('Lucas', 'Menger', 22);
// const pessoa4 = criaPessoa('Felipe', 'De Liz', 25);
// const pessoa5 = criaPessoa('Artur', 'Cassol', 22);
// 
// console.log(pessoa1.nome, pessoa2.nome);

const pessoa1 = {
    nome: 'Thiago',
    sobrenome: 'Giacomoni',
    idade: 24,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
