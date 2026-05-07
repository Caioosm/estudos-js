import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";
import User from "../models/User.js";

const connection = new Sequelize(dbConfig);

const models = [Aluno, User];

models.forEach(model => model.init(connection));