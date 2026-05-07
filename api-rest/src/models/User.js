import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
   static init(sequelize) {
      super.init({
            nome: {
               type: Sequelize.STRING,
               defaultValue: "",
               validadate: {
                  len: {
                     args: [3, 255],
                     msg: "O campo nome deve ter no minimo 3 caracteres"
                  },
               },
            },
            email: {
               type: Sequelize.STRING,
               defaultValue: "",
               unique: {
                  msg: "O email já existe"
               },
               validadate: {
                  isEmail: {
                     msg: "O campo email deve ser um email válido"
                  },
               },
            },
            password: {
               type: Sequelize.STRING,
               defaultValue: "",
            },
            passwordv: {
               type: Sequelize.VIRTUAL,
               defaultValue: "",
               validadate: {
                  len: {
                     args: [6, 255],
                     msg: "O campo password deve ter no minimo 6 caracteres"
                  }
               },
            }
         }, {
            sequelize
      });

      this.addHook("beforeSave", async user => {
         user.password = await bcrypt.hash(user.passwordv, 8);
      });
      
      return this;
   }
}