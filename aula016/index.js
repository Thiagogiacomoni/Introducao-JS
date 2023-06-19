const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos instanceof Array)

// console.log(alunos.slice(0, 3)); // Primeiro parametro inicio, segundo parametro indice final -1 // Negativo no segundo parametro deleta os indices finais

// delete alunos[1]; // Remove um elemento sem mudar os indices dos outros elementos (porem vai ficar um elemento vazio no lugar)

// const removido = alunos.shift(); // Remove do inicio
// const removido = alunos.pop();// Remove do fim
// console.log(removido);

// alunos.unshift('Thiago') // ADC no inicio

// alunos.push('Artur'); // ADC no fim (Melhor forma de adicionar elementos)
// alunos.push('Luiza');

// alunos[alunos.length] = 'Thiago'; // ADC no fim
// alunos[alunos.length] = 'Felipe'; // ADC no fim

// alunos[0] = 'Eduardo'; // Alteira
// alunos[3] = 'Luiza'; // ADC

// console.log(alunos);
// console.log(alunos[0]); // Acessando o indice