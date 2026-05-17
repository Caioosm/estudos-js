//testar persistencia de dados com ALUNO
import Aluno from "../models/Aluno.js";
import Images from "../models/Images.js";

class AlunoController{
    async index(req, res) {
        const alunos = await Aluno.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
            order: [[Images, 'id', 'DESC']],
            include: {
                model: Images,
                attributes: ['url', 'filename'],
            }
        });
        res.json(alunos);
    }

    async create(req, res) {
        try {
            const newAluno = await Aluno.create(req.body);
            return res.status(201).json(newAluno);
        } catch (error) {
            res.status(500).json({
                errors: error.errors.map((err) => err.message),
            });
        }
    }
    
    async getById(req, res) {
        try {
            const { id } = req.params;
            
            if(!id){
                return res.status(400).json({ errors: ['Missing ID'] });
            }
            
            const aluno = await Aluno.findByPk(id, {
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
                include: {
                    model: Images,
                    attributes: ['url', 'filename'],
                }
            });

            if(!aluno){
                return res.status(404).json({ errors: ['Aluno não encontrado'] });
            }
            
            res.json(aluno);
        } catch (error) {
            res.status(500).json({
                errors: error.errors.map((err) => err.message),
            });
        }
    }
    
    async update(req, res) {
        try {
            const { id } = req.params;
            
            if(!id){
                return res.status(400).json({ errors: ['Missing ID'] });
            }
            
            const aluno = await Aluno.findByPk(id);

            if(!aluno){
                return res.status(404).json({ errors: ['Aluno não encontrado'] });
            }
            
            const updatedAluno = await aluno.update(req.body);
            return res.json(updatedAluno);
        } catch (error) {
            res.status(500).json({
                errors: error.errors.map((err) => err.message),
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            
            if(!id){
                return res.status(400).json({ errors: ['Missing ID'] });
            }
            
            const aluno = await Aluno.findByPk(id);

            if(!aluno){
                return res.status(404).json({ errors: ['Aluno não encontrado'] });
            }
            
            await aluno.destroy();
            return res.status(204).json({message: 'Aluno deletado com sucesso'});
        } catch (error) {
            res.status(500).json({
                errors: error.errors.map((err) => err.message),
            });
        }
    }
}

export default new AlunoController();