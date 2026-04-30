const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/routes');

app.use(routes);
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log('api rodando na porta ' + port);
    console.log('http://localhost:' + port);
});