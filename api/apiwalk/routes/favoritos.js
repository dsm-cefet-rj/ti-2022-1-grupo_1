var favoritos = require('../models/favoritosModel');
var express = require('express');
const { isObjectIdOrHexString } = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let data = await favoritos.find({});

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

router.post('/add', async function(req, res, next){
  let card = req.body;
  
  favoritos.create(card, (err, res) => {
    if(err) return res.send(500, err);
    console.log('Criou');
  });

  res.setHeader('Content-Type', 'application/json');
  res.send(card);
});

router.delete('/delete/:id', async function(req, res, next){
  let id = req.params.id
  favoritos.deleteOne({id: id}, (err, res) => {
    if(err) return res.send(500, err);
    console.log('Sumiu');
  })

  res.statusCode = 200;
  res.send(id);
});

module.exports = router;
