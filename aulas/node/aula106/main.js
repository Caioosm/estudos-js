require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
// const connectString = 'mongodb+srv://caio-userdb:5jhcaP6RgbQuMo9R@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectString = process.env.CONNECTIONSTRING;
const session = require('express-session');
const { MongoStore }  = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('../aula106/routes/routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const port = 3000;

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
    secret: 'asdasdasdasdasdasdasd',
    store: MongoStore.create({ mongoUrl: connectString }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);



app.use(flash());

mongoose.connect(connectString)
    .then(() => {
        console.log('Conectado ao MongoDB Atlas');
        app.listen(port, () => {
            console.log('API rodando na porta ' + port);
            console.log('http://localhost:' + port);
        })
    }).catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    });
