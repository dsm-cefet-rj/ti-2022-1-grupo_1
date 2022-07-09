const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: String,
    img: String,
    nome: String,
    valor: Number,
    situation: String
});

const favoritosModel = mongoose.model('favoritos',schema);
module.exports = favoritosModel;