var dadosPessoaisModel = require('../models/dadosPessoaisModel')
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    var dadosPessoais = { dadosP : [] }
    const dadosPe = await dadosPessoaisModel.find()
    dadosPe.map(dadosP => dadosPessoais.dadosP.push(dadosP))
    res.send(dadosPessoais);
  });

module.exports = router;