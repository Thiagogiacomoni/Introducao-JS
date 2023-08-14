exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar formulario</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('sou sua nova rota de POST.')
};