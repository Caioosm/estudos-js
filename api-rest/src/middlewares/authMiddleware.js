import jwt from 'jsonwebtoken';

export default (req, res, next) => {
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
        req.userId = id;
        req.userEmail = email;
        return next();
    } catch (err) {
        return res.status(401).json({
            errors: ['Invalid token or expired.']
        });
    }
};