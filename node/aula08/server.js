const express = require('express'); // aqui temos uma constante com o modulo do express
const app = express();

app.use(express.urlencoded({extended: true})); // sem isso o body fica undefined

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar formulario</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // params: estamos falando das partes que vem na rota da url
    // query:  profile/?chave1=valor1&chave2=valor2
    //
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor executando na porta 3000.');
});