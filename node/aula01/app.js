const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('felipe');
console.log(p1);
// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(falaNome());
// console.log(nome, sobrenome);


// pegando o modulo inteiro e dps a função
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// se quiser pegar uma função
// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());