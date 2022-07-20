
const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    email: String,
    nome: String,
    text: String,
    horaFormatada: String,
})


const chatModel = mongoose.model('mensagens', chatSchema)
module.exports = chatModel