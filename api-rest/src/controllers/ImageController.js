import multer from 'multer';
import multerConfig from '../config/multer.js';

import Images from '../models/Images.js';

const upload = multer(multerConfig).single('image');

class ImageController{
    create(req, res) {
        return upload(req, res, async (err) => {
            if(err) {
                return res.status(400).json({ errors: [err.code] });
            }

            const { originalname, filename } = req.file;
            const { aluno_id } = req.body;
            const image = await Images.create({originalname, filename, aluno_id});
            
            return res.json(image);
        })

    }
}

export default new ImageController();