// Funções construtoras(constructor functions) - criam novos objetos
// Construtora - Pessoa (new)
// Não precisa usar ,

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {

    };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': sou um método.')
    };
}

const p1 = new Pessoa('Thiago', 'Giacomoni');
const p2 = new Pessoa('Lucas', 'Menger');

p1.metodo();

// Funções fabrica - fabrica objetos