// Funçoes imediatas(IIFE - Immedialety invoked function expression)

(function(idade, peso, altura) {
    const sobrenome = 'Giacomoni';

    function criaNome(nome) {
        return `${nome} ${sobrenome}`; 
    }
    function falaNome() {
        console.log(criaNome('Thiago'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(24, 90, 1.80);