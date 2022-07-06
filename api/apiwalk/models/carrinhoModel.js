const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carrinhoSchema = new Schema({
  id: Number,
  nome: String,
  valor: Number,
  tamanho: Number,
  estado: String,
  categoria: String,
  quantidade: Number,
  img: String
})

var Carrinho = mongoose.model('Carrinho', carrinhoSchema)
module.exports = Carrinho
