//testar persistencia de dados com USUARIO
import User from "../models/User.js";

class UserController{
    async create(req, res) {
        try {
            const novoUser = await User.create(req.body);
            const { id, nome, email} = novoUser;
            return res.json({ id, nome, email });
        }catch (error) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
        
    }

    async index(req, res) {
        try {
            const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
            return res.json(users);
        } catch (error) {
            return res.status(400).json(null);
        }
    }

    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id, { attributes: ['id', 'nome', 'email'] });
            return res.json(user);
        } catch (error) {
            return res.status(404).json(null);
        }
    }

    async update(req, res) {
        try {
            const user = await User.findByPk(req.userId);

            if(!user){
                return res.status(404).json({
                    errors: ["Usuário não encontrado"]
                });
            }

            const novosDados = await user.update(req.body);
            const {id, nome, email} = novosDados;
            return res.json({ id, nome, email });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    }

    async delete(req, res) {
        try {
            if(!req.params.id){
                return res.status(400).json({
                    errors: ["ID não enviado"]
                });
            }
            
            const user = await User.findByPk(req.params.id);

            if(!user){
                return res.status(404).json({
                    errors: ["Usuário não encontrado"]
                });
            }

            await user.destroy();
            return res.status(204).json({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    }
}

export default new UserController();