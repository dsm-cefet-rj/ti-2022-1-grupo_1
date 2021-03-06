var dadosEntregaModel = require('../models/dadosEntregaModel')
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    var dadosEntrega = { dadosE : [] }
    const dadosEnt = await dadosEntregaModel.find()
    dadosEnt.map(dadosE => dadosEntrega.dadosE.push(dadosE))
    res.send(dadosEntrega);
});

router.post('/', async (req, res, next) => {
  const {cep, rua, complemento} = req.body

  const postEntrega = {cep, rua, complemento}

  try{
    await dadosEntregaModel.create(postEntrega);
    res.status(201).send('Dados entrega cadastrados!');
  } catch {
    res.status(500).json({erro: error})
  }
});

module.exports = router;