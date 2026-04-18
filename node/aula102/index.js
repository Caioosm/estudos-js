const express = require('express');
const app = express();
const port = 3000;
const routes = require('../aula102/routes/routes');
const path = require('path');

app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log('api rodando na porta ' + port);
    console.log('http://localhost:' + port);
});