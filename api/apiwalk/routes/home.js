var express = require('express');
var router = express.Router();

let produtos =[
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
      },
      {
        "id": 3,
        "nome": "Yeezy 350 V2",
        "tamanho": 42,
        "valor": 799.99,
        "estado": "usado",
        "categoria": "masculino",
        "quantidade": 1,
        "img": "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg"
      },
      {
        "id": 4,
        "nome": "Dunk low",
        "valor": 799.99,
        "tamanho": 42,
        "estado": "usado",
        "categoria": "masculino",
        "quantidade": 1,
        "img": "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg"
      },
      {
        "id": 5,
        "nome": "Jordan low",
        "valor": 799.99,
        "tamanho": 42,
        "estado": "novo",
        "categoria": "masculino",
        "quantidade": 1,
        "img": "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg"
      },
      {
        "id": 6,
        "nome": "Yeezy 350 V2",
        "tamanho": 42,
        "valor": 799.99,
        "estado": "usado",
        "categoria": "masculino",
        "quantidade": 1,
        "img": "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg"
      },
    ]

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([ produtos ])
});

module.exports = router;
