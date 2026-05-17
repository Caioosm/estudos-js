import Sequelize, { Model } from "sequelize";

export default class Images extends Model {
    static init(sequelize) {
        super.init(
            {
                originalname: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: {msg: 'Campo nao pode ser vazio'}
                    }
                },
                filename: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: {msg: 'Campo nao pode ser vazio'}
                    }
                },
                aluno_id: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                }
            },
            {sequelize, tableName: 'images'}
        )
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    }
}