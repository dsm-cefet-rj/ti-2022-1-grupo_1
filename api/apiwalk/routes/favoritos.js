var express = require('express');
var router = express.Router();

let favoritos = []

/* GET users listing. */
router.get('/', async function(req, res, next) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(favoritos)
});

<<<<<<< Updated upstream
router.post('/add', async function(req, res, next){
  let card = req.body

=======
router.post('/addFav', async function(req, res, next){
  let card = req.body

  card = {...card, id: favoritos.length+1}
>>>>>>> Stashed changes
  favoritos.push(card);

  res.setHeader('Content-Type', 'application/json');
  res.send(card)
});

<<<<<<< Updated upstream
router.delete('/delete/:id', async function(req, res, next){
=======
router.delete('/deleteFav/:id', async function(req, res, next){
>>>>>>> Stashed changes
  let id = req.params.id
  favoritos = favoritos.filter((item) => {item.id != id})

  res.statusCode = 200;
  res.send(id)
});

module.exports = router;
