const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: Number,
    nome: String,
    valor: Number,
    tamanho: Number,
    estado: String,
    categoria: String,
    quantidade: Number,
    img: String
});

const tenisModel = mongoose.model('tenis',schema);
module.exports = tenisModel;