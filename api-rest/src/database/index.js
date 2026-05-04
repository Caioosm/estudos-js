import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";

const connection = new Sequelize(dbConfig);

const models = [Aluno];

models.forEach(model => model.init(connection));