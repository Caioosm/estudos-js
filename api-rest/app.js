import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/home.js';
import userRoutes from './src/routes/user.js';
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
    }
}

export default new App().app;