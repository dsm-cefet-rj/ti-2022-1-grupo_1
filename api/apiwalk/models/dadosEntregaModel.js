const mongoose = require('mongoose')

const dadosEntregaSchema = mongoose.Schema({
    cep: Number,
    rua: String,
    complemento: String
})

const dadosEntregaModel = mongoose.model('dadosE', dadosEntregaSchema)
module.exports = dadosEntregaModel