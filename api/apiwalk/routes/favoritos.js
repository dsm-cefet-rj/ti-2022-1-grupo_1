var Favoritos = require('../models/favoritosModel');
var Tenis = require('../models/tenisModel');
var express = require('express');
var router = express.Router();

const user = 'user';

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await
  (
    (await Favoritos.findOne({user: user})) == null ?
      Favoritos.create({user: user, ids: []})
      : {}
  );

  let data = await Favoritos.findOne({user: user});
  let items = await Tenis.find({id: data.ids});

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(items);
});

router.post('/add', async function(req, res, next){
  await
  (
    Favoritos.findOne({user: user}) == null ?
      Favoritos.create({user: user, ids: []})
      : {}
  );

  let card = req.body;

  await Favoritos.updateOne(
    {user: user},
    {$push: {ids: card.id}}
  );

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(card);
});

router.delete('/delete/:array', async function(req, res, next){
  let ids = req.params.array.split('&').map(Number);
  
  await Favoritos.updateOne(
    {user: user},
    {$pull: {ids: {$in: ids}}}
  );

  res.statusCode = 200;
  res.send(ids);
});

module.exports = router;