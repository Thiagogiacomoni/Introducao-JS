// getters e setters com class

const _velocidade = Symbol('velocidade'); // propriedade privada

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        // SETTER
        if(typeof valor !== 'number') return;
        if(valor >= 100 | valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade() {
        // GETTER
        return this[_velocidade];
    }
    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 90;
c1. velocidade = 99; // chama o SETTER o sinal de =
console.log(c1.velocidade); // Chama o GETTER