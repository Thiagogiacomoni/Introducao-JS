const express = require('express'); // aqui temos uma constante com o modulo do express
const app = express();

// CRUD = Create, Read, Update, Delete
//         POST   GET    PUT    DELETE
// http://meusite.com/ <- GET -> entregue a pagina /
// http://meusite.com/sobre <- GET -> entregue a pagina /sobre

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('recebi o formulario');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
});

app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor executando na porta 3000.');
});