exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <input type="text" name="nome" placeholder="Digite seu nome">
            <button type="submit">Enviar</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send(`Formulário enviado! Olá`);
}