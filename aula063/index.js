// Método splice
const nomes = ['Thiago', 'Marci', 'Felipe', 'artur', 'lucas'];

// nomes.splice(indice atual, delete, elem1, elem2, elem3);
//const removidos = nomes.splice(3, 2, 'Luiz', 'gabriel');

// pop - remove o ultimo elemento
//const removidos = nomes.splice(-1, 1);

// shift - remove o primeiro elemento
//const removidos = nomes.splice(0, 1);

// push - adiciona um elemento no final do array
//nomes.splice(nomes.length, 0, 'luiz');

// Unshift - Adiciona um elemento no inicio do array
nomes.splice(0, 0, 'Luiz', 'Henrique');
console.log(nomes);
