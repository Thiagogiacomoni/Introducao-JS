export const nome = 'thiago';
export const sobrenome = 'giacomoni';
export const idade = 24;
const cpf = 'asasas'; // variavel privada póis nao está sendo exportada

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export {nome, sobrenome, idade, soma as default};