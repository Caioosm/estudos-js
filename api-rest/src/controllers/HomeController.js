//testar persistencia de dados com ALUNO
import Aluno from "../models/Aluno.js";

class HomeController{
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: "teste",
            sobrenome: "sobrenome",
            email: "email@email.com",
            idade: 20
        });
        res.json(novoAluno);
    }
}

export default new HomeController();