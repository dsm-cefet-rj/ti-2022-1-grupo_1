var dadosPessoaisModel = require('../models/dadosPessoaisModel')
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    var dadosPessoais = { dadosP : [] }
    const dadosPe = await dadosPessoaisModel.find()
    dadosPe.map(dadosP => dadosPessoais.dadosP.push(dadosP))
    res.send(dadosPessoais);
  });


router.post('/', async (req, res, next) => {
  const {email, nome, cpf, telefone} = req.body

  const postPessoal = {email, nome, cpf, telefone}

    try{
      await dadosPessoaisModel.create(postPessoal);
      res.status(201).send('Dados pessoais cadastrados');
    } catch {
      res.status(500).json({ erro: error })
    }
});

module.exports = router;