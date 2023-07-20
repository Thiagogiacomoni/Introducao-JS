// async / await

function rand(min = 0, max = 3) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}
// esta funçao so esta simulando algo que demora
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new Error('ERRO')) //false
        return
      }
      resolve(msg.toUpperCase() + '- Passei na promise')
    }, tempo);
  });
}

// esperaAi('fase 1', rand())
// .then((valor) => {
//   console.log(valor);
//   return esperaAi('fase 2', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi('fase 3', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return fase;
// })
// .then(fase => {
//     console.log('terminamos na fase', fase);
// })
// .catch(e => console.log(e));


// async permite a utilização da palavra await dentro da funçao
async function executa() {
    try {
        const fase1 = await esperaAi('fase 1', 1000);
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promise estava pendente', fase1);
        }, 1100);

        const fase2 = await esperaAi('fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('fase 3', rand());
        console.log(fase3);
        console.log('terminamos na fase', fase3);
    } catch(e) {
        console.log(e);
    }
}
executa();

// pending -> pendente (geralmente quando n tem await ou .then, quando inicia e chama o valor antes dela terminar o processo)
// fullfilled -> resolvida
// rejected -> rejeitada