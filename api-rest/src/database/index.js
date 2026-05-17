import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";
import User from "../models/User.js";
import Images from "../models/Images.js";

const connection = new Sequelize(dbConfig);

const models = [Aluno, User, Images];

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));