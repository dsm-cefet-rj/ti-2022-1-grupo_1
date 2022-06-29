var express = require('express');
var router = express.Router();

let favoritos = []

/* GET users listing. */
router.get('/', async function(req, res, next) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(favoritos)
});

router.post('/add', async function(req, res, next){
  let card = req.body

  favoritos.push(card);

  res.setHeader('Content-Type', 'application/json');
  res.send(card)
});

router.delete('/delete/:id', async function(req, res, next){
  let id = req.params.id
  favoritos = favoritos.filter((item) => {item.id != id})

  res.statusCode = 200;
  res.send(id)
});

module.exports = router;
