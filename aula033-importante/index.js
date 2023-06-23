const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Giacomoni',
    idade: 24,
    endereço: {
        rua: 'avenida inconfidencia',
        numero:1357
    }
};

// atribuição via desestruturação
const {nome, ...resto} = pessoa;
console.log(resto);