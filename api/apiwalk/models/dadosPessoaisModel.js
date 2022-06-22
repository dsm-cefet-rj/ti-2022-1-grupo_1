const mongoose = require('mongoose')

const dadosPessoaisSchema = mongoose.Schema({
    email: String,
    nome: String,
    cpf: Number,
    telefone: Number
})

const dadosPessoaisModel = mongoose.model('dadosP',dadosPessoaisSchema)
module.exports = dadosPessoaisModel