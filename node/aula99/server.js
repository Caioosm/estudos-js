const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <input type="text" name="nome" placeholder="Digite seu nome">
            <button type="submit">Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Formulário enviado!');
})

app.get('/users', (req, res) => {
    res.send('Lista de ');
});

app.listen(port, () => {
    console.log('api rodando na porta ' + port);
    console.log('http://localhost:' + port);
})