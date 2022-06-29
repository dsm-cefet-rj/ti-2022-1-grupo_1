var express = require('express')
var router = express.Router()
// const Carrinho = require('../models/carrinho')

let carrinhoData = [
  {
    "id": 1,
    "nome": "Dunk low",
    "valor": 799.99,
    "tamanho": 42,
    "estado": "usado",
    "categoria": "masculino",
    "quantidade": 1,
    "img": "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg"
  },
  {
    "id": 2,
    "nome": "Jordan low",
    "valor": 799.99,
    "tamanho": 42,
    "estado": "novo",
    "categoria": "masculino",
    "quantidade": 1,
    "img": "https://cdn.shopify.com/s/files/1/0321/7362/1384/products/AirJordan1LowUNCObsidian1-219028.jpg?v=1643723764"
  }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  // Carrinho.find({})
  //   .then(
  //     carrinhoBanco => {
  //       res.statusCode = 200
  //       res.setHeader('Content-Type', 'application/json')
  //       res.json(carrinhoBanco)
  //     },
  //     err => next(err)
  //   )
  //   .catch(err => next(err))

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(carrinhoData)
})

router.route('/:id').delete((req, res, next) => {
  carrinhoData = carrinhoData.filter(function (value, index, arr) {
    return value.id != req.params.id
  })

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(req.params.id)
})
module.exports = router
