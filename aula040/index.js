// Break e Continue
// Continue = Continua para a proxiuma iteração
// Break = Sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7,8 ,9];
// For of
for( let numero of numeros) {
    if (numero === 2 || numero === 5) {
        console.log('Pulei o 2 e o 5')
        continue;
    }
    if (numero === 3) {
        continue;
    }
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
    console.log(numero);
}

// For in
for( let i in numeros) {
    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log('Pulei o 2 e o 5')
        continue;
    }
    if (numero === 3) {
        continue;
    }
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
    console.log(numero);
}

// For classico
for( let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log('Pulei o 2 e o 5')
        continue;
    }
    if (numero === 3) {
        continue;
    }
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
    console.log(numero);
}

// While
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o 2');
        i++;
        continue;
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break;
    }
    i++;
}

// Do while
let ii = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o 2');
        ii++;
        continue;
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        ii++;
        break;
    }
    ii++;
}while (ii < numeros.length);