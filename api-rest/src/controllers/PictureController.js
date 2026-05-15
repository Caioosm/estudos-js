class PictureController{
    async index(req, res) {
        res.json('index');
    }
}

export default new PictureController();