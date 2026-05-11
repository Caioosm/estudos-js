import User from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class TokenController {
    async create(req, res) {
        const { email, password } = req.body;

        
        if(!email || !password){
            return res.status(400).json({
                errors: ["Email e senha são obrigatórios"]
            });
        }

        const user = await User.findOne({ where: { email }  })

        if(!user){
            return res.status(400).json({
                errors: ["Usuário não encontrado"]
            });
        }

        if(!(await user.passwordIsValid(password))){
            return res.status(400).json({
                errors: ["Email ou senha inválidos"]
            });
        }

        const token = jwt.sign({ id:user.id, email }, process.env.SECRET_TOKEN, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });
        
        return res.json({ token });
    }
}

export default new TokenController();