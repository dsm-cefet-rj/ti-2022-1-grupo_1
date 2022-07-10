const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user: String,
    data: [{}]
});

const favoritosModel = mongoose.model('favoritos',schema);
module.exports = favoritosModel;