exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente){
        console.log(`O nome do cliente enviado foi: ${req.body.cliente}`);
    }
    next();
};