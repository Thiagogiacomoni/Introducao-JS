// revisao de arrays
// delete para apagar um item mas não mudar os indices
//

// funciona pra String, Objetos, Funções, Números
// const nomes = new Array('thiago', 'artur', 'felipe'); // construtor de arrays

// const nomes = ['Thiago', 'Lucas', 'Felipe'];
// quando se quer pegar o resto do array, rest operator - ...
// quando quer abrir um array em um novo array tbm se usa o rest operator, ou seja faz uma copia 
// const novo = [...nomes];
// novo.pop();
// console.log(nomes);
// console.log(novo);

// const nomes = ['thiago', 'felipe', 'artur', 'lucas', 'glaucio'];
// const novo = nomes.slice(0, -1); //fatia o array
// console.log(nomes);

//const nome = 'thiago giacomoni';
const nomes = [ 'thiago', 'giacomoni'];
const nome = nomes.join(' ');
console.log(nome);