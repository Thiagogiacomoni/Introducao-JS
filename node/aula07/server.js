const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET    PUT    DELETE

app.get('/', (req, res) =>  {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="texte" name="nome">
    <button>ENVIAR</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Server ligado!!');
});