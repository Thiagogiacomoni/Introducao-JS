// Escopo lexico = a função conhece onde a variavel foi declarada, tudo que esta declarado dentro dela e o que esta nos vizinhos dela(escopo global)

const nome = 'thiago';

function falaNome() {
    console.log(nome);
}
function usaFalaNome() {
    const name = 'felipe';
    falaNome();
}
usaFalaNome();