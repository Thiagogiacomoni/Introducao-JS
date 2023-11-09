const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>  {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="texte" name="nome">
    Sobrenome do cliente: <input type="texte" name="sobrenome">
    <button>ENVIAR</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    // partes que vem na rota da url
    console.log(req.query);
    // /profile/?chave1=valor1&chave2=valor2
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que voce enviou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Server ligado!!');
});