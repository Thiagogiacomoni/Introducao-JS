// promisses
// o codigo abaixo é assincrono

function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) { // reject = erro
  return new Promise((resolve, reject) => {
if(typeof msg!== 'string') reject(new Error('ERRO')); //false

    setTimeout(() => {
      resolve(msg) // so pode mandar um parametro aqui
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then((resposta) => {
    // resolve
    console.log(resposta)
    return esperaAi('Buscando dados da BASE', rand(1, 3))
  })
  .then((resposta) => {
    console.log(resposta)
    return esperaAi(2222 , rand(1, 3))
  })
  .then((resposta) => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Exibe dados na tela.')
  })
  .catch(e => {
    console.log('ERRO:', e); // ocorre o erro por nao ser string
  })

console.log('Isso sera exibido antes de qualquer promisse')
