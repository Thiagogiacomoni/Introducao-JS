exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="texte" name="nome">
    Sobrenome do cliente: <input type="texte" name="sobrenome">
    <button>ENVIAR</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post.');
}