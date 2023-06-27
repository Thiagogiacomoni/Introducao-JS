// For in - Estrutura de repetição]
// For in -> Lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Giacomoni',
    idade: 24
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}



// const frutas = ['Pera', 'Maçã', 'Uva'];
// for (let i in frutas) {
//     console.log(frutas[i]);
// }



// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }