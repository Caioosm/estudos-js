import multer from 'multer';
import multerConfig from '../config/multer.js';

const upload = multer(multerConfig).single('image');

class ImageController{
    async create(req, res) {
        return upload(req, res, (err) => {
            if(err) {
                return res.status(400).json({ errors: [err.code] });
            }

            return res.json({ file: req.file });
        })

    }
}

export default new ImageController();