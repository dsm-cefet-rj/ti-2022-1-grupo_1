const mongoose = require('mongoose')

const pagamentoSchema = mongoose.Schema({
    destinatarioID: String,
    remetenteID: String,
    msg: String,
    hora: String,
    img: String
})

const pagamentoModel = mongoose.model('mensagens', pagamentoSchema)
module.exports = pagamentoModel