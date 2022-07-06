var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser')
const Carrinho = require('../models/carrinhoModel')

router.use(bodyParser.json())

// let carrinhoData = [
//   {
//     id: 1,
//     nome: 'Dunk low',
//     valor: 799.99,
//     tamanho: 42,
//     estado: 'usado',
//     categoria: 'masculino',
//     quantidade: 1,
//     img: 'https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg'
//   },
//   {
//     id: 2,
//     nome: 'Jordan low',
//     valor: 799.99,
//     tamanho: 42,
//     estado: 'novo',
//     categoria: 'masculino',
//     quantidade: 1,
//     img: 'https://cdn.shopify.com/s/files/1/0321/7362/1384/products/AirJordan1LowUNCObsidian1-219028.jpg?v=1643723764'
//   }
// ]

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const carrinhoBanco = await Carrinho.find({}).maxTime(5000)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json(carrinhoBanco)
  } catch (err) {
    next(err)
  }

  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.json(carrinhoData)
})

router.post('/add', async function (req, res, next) {
  Carrinho.create(req.body)
    .then(
      carrinho => {
        console.log('carrinho criado', carrinho)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(carrinho)
      },
      err => next(err)
    )
    .catch(err => next(err))

  // let card = req.body

  // card = { ...card, id: carrinhoData.length + 1 }
  // carrinhoData.push(card)

  // res.setHeader('Content-Type', 'application/json')
  // res.send(card)
})

router.delete('/delete/:id', async function(req, res, next){
  let id = req.params.id
  Carrinho.deleteOne({id: id}, (err, res) => {
    if(err) return res.send(500, err);
    console.log('Sumiu');
  })

  res.statusCode = 200;
  res.send(id);
});
module.exports = router
