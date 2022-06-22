var dadosEntregaModel = require('../models/dadosEntregaModel')
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    var dadosEntrega = { dadosE : [] }
    const dadosEnt = await dadosEntregaModel.find()
    dadosEnt.map(dadosE => dadosEntrega.dadosE.push(dadosE))
    res.send(dadosEntrega);
});

module.exports = router;