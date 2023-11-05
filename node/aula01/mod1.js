const nome = 'thiago';
const sobrenome = 'giacomoni';

const falaNome = () => nome + ' ' + sobrenome;

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoise = 'O que eu quiser exportar'

console.log(module.exports);