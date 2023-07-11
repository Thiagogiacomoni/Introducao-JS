// map - mapeando o array - altera os valores de um array mas mantem o mesmo tamanho, normalmente nao altera o valor original de um obj

// dobre os valores
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicionar uma chave id em cada objeto
const pessoas = [
    {nome: 'thiago', idade: 24},
    {nome: 'luca', idade: 58},
    {nome: 'Marci', idade: 25},
    {nome: 'rosana', idade:25},
    {nome: 'artur', idade: 22},
    {nome: 'Wallace', idade: 56},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj}; // cuidar para nao alterar o objeto que esta sendo usado
    newObj.id = indice;
    return newObj;
});
console.log(comIds);