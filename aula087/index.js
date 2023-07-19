function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  // reject = erro
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject(new Error("ERRO")); //false
        return;
      }
      resolve(msg.toUpperCase() + "- Passei na promise"); // so pode mandar um parametro aqui
    }, tempo);
  });
}

// promise.all - Tenta resolver todas, se uma rejeitar rejeita todas
//   const promises = [
//     'primeiro valor',
//     esperaAi('promise 1', 3000),
//     esperaAi('promise 2', 500),
//     esperaAi('promise 3', 1000),
//     //esperaAi(1000, 1000),
//     'outro valor'
// ];

// Promise.all(promises)
// .then(function(valor) {
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// });

// promise.race - resolve uma a uma e retorna a primeira realizada
// const promises = [
//   esperaAi("promise 1", rand(1, 5)),
//   esperaAi("promise 2", rand(1, 5)),
//   esperaAi("promise 3", rand(1, 5)),
// ];

// Promise.race(promises) 
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// promise.resolve - entrega uma promessa resolvida
// function baixaPagina() {
//     const emCache = true;

//     if(emCache) {
//         return Promise.resolve('Pagina em cache');
//     } else {
//         return esperaAi('Baixei a pagina', 3000);
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log(e));

// promise.reject
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));