import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        len: {args: [3, 255],
                            msg: 'O nome deve conter entre 3 e 255 caracteres'
                        },
                        notNull: {msg: 'O nome é obrigatório'}
                    }
                },
                sobrenome: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        len: {args: [3, 255],
                            msg: 'O sobrenome deve conter entre 3 e 255 caracteres'
                        },
                        notNull: {msg: 'O sobrenome é obrigatório'}
                    }
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: {msg: 'O email deve ser válido'}
                    }
                },
                idade: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                    validate: {
                        isInt: {msg: 'A idade deve ser um número inteiro'},
                        min: {args: 1, msg: 'A idade deve ser um número positivo'}
                    }
                }
            },
            {sequelize}
        )
        return this;
    }

    static associate(models) {
        this.hasMany(models.Images, { foreignKey: 'aluno_id' });
    }
}