import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required.']
        });
    }

    const [, token] = authorization.split(' ');

    try {
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        const { id, email } = decoded;

        const user = await User.findOne({
            where: {
                id,
                email
            }
        });

        if(!user){
            return res.status(401).json({
                errors: ['Invalid User.']
            });
        }

        req.userId = id;
        req.userEmail = email;
        return next();
    } catch (err) {
        return res.status(401).json({
            errors: ['Invalid token or expired.']
        });
    }
};