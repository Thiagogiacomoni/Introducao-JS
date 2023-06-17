const nome = 'Thiago';
const sobrenome = 'Giacomoni';
const idade = 24;
const peso = 90;
const alturaEmM = 1.80;
let indiceMassaCorporal = peso / ( altura * altura );
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}, ${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
