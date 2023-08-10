// ES6 Modules - Import/Export

// import {nome as nome2, sobrenome, idade, soma, Pessoa} from './modulo1';
//
// const p1 = new Pessoa('Thiago', 'giacomoni');
// console.log(p1);
//
// console.log(nome2, sobrenome, idade);
// console.log(soma(5, 5));


// import * as MeuModulo from './modulo1';
//
// console.log(MeuModulo);

// import multiplica, {nome, sobrenome, idade, soma,} from './modulo1';
// console.log(multiplica(2, 50));
// console.log(nome, sobrenome, idade, soma);

import Pessoa, {nome, sobrenome} from './modulo1';
const p1 = new Pessoa(nome, sobrenome);
console.log(p1);