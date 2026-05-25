
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/home.js';
import alunoRoutes from './routes/alunoRoute.js';
import userRoutes from './routes/user.js';
import tokenRoutes from './routes/tokenRoute.js';
import imageRoutes from './routes/imageRouter.js';
import { resolve } from 'path';
import './database/index.js';
dotenv.config();

const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
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