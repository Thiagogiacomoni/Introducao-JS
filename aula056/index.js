// Funçoes fabrica(factory functions) - funçoes que retornam objetos
// Constructor function (Função construtora)
//função dentro de objeto se chama metodo
// this é sempre quem esta chamando o objeto

function criaPessoa(nome, sobrenome, alt, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto = 'falando sobre JS') {
            return `${this.nome} está ${assunto}`;
        },

        altura: alt,
        peso: peso,

        get imc() { // Getter, quando se quer só o valor
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Thiago', 'Giacomoni', 1.80, 90);
const p2 = criaPessoa('Felipe', 'De Liz', 1.82, 78);
const p3 = criaPessoa('Artur', 'Cassol', 1.75, 82);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);