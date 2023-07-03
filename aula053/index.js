// Closures = habilidade da funçao de acessar seu escopo lexico

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('thiago');
const funcao2 = retornaFuncao('felipe');
console.dir (funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());