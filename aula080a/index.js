// Objeto Map()

const pessoas = [
    { id: 2, nome: 'Thiago' },
    { id: 3, nome: 'Felipe' },
    { id: 1, nome: 'Lucas' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

// for (const pessoas of novasPessoas.values()) {
//     console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);