// object.defineProperty() e objetct.defineProperties()

// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave
//         value: estoque, // valor
//         writable: true, // pode alterar o valor com true
//         configurable: true // configuravel com true
//     });
// }

// const p1 = new Produto('Camiseta', 20, 4);
// console.log(Object.keys(p1));

// for(let chave in p1) {
//     console.log(chave);
// }

// defineProperties()

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor com true
        configurable: true // configuravel com true
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
        },
    });
}

const p1 = new Produto('Camiseta', 20, 4);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}