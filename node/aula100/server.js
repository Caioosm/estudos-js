const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <input type="text" name="nome" placeholder="Digite seu nome">
            <button type="submit">Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Formulário enviado! Olá, ${req.body.nome}`);
});

app.get('/users', (req, res) => {
    res.send('Lista de ');
});

app.get('/user/:userId', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.listen(port, () => {
    console.log('api rodando na porta ' + port);
    console.log('http://localhost:' + port);
});