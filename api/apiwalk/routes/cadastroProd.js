var infotenis = require('../models/tenisModel')
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    var dadosTenis = { tenis : [] }
    const dadosProd = await infotenis.find()
    dadosProd.map(tenis => dadosTenis.tenis.push(tenis))
    res.send(dadosTenis);
});

router.post('/', async (req, res, next) => {
  const {id, nome, valor, tamanho, estado, categoria, quantidade, img} = req.body

  const postCadastro = {id, nome, valor, tamanho, estado, categoria, quantidade, img}

  try{
    await infotenis.create(postCadastro);
    res.status(201).send('Dados entrega cadastrados!');
  } catch {
    res.status(500).json({erro: error})
  }
});

module.exports = router;