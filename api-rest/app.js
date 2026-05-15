import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/home.js';
import alunoRoutes from './src/routes/alunoRoute.js';
import userRoutes from './src/routes/user.js';
import tokenRoutes from './src/routes/tokenRoute.js';
import imageRoutes from './src/routes/imageRouter.js';
import './src/database/index.js';
dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/tokens/', tokenRoutes);
        this.app.use('/alunos/', alunoRoutes);
        this.app.use('/images/', imageRoutes);
    }
}

export default new App().app;