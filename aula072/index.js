// Getters - obter o valor/ e setters - configurar o valor

//função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel com true
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') { // o valor de estoque so vai ser alterado se o imput for um numero
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
//console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);

//factory function
function criaProduto() {
    return{
        get nome() {

        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);