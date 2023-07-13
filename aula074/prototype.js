/*
JavaScript é baseado em prototipos para passar propriedades e metodos de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referencia interna para um prototipo(_proto_) que vem da propriedade prototypo da função contrutora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada ate o topo(null) ate encontrar(ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome;
}

pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('thiago', 'G.'); // <- Pessoa = função construtora
const pessoa2 = new Pessoa('lucas', 'M.');
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(data);