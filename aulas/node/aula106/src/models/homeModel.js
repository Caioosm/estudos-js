const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
});

const homeModel = mongoose.model('Home', homeSchema);

module.exports = homeModel;