var express = require('express');
var router = express.Router();

const user = 'user';

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let bd = await
  (
    favoritos.findOne({user: user}) == null ?
      favoritos.create({user: user, data: []})
      : favoritos.findOne({user: user})
  );

  let data = bd.data;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(favoritos)
});

router.post('/add', async function(req, res, next){
  let bd = await
  (
    favoritos.findOne({user: user}) == null ?
      favoritos.create({user: user, data: []})
      : favoritos.findOne({user: user})
  );

  let data = bd.data;
  let card = req.body;

  await favoritos.updateOne(
    {user: user},
    {data: data.concat(card)}
  );

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(card)
});

router.delete('/delete/:id', async function(req, res, next){
  let bd = await
  (
    favoritos.findOne({user: user}) == null ?
      favoritos.create({user: user, data: []})
      : favoritos.findOne({user: user})
  );

  let data = bd.data;
  let id = req.params.id;
  
  await favoritos.updateOne(
    {user: user},
    {data: data.filter(item => item.id != id)}
  );

  res.statusCode = 200;
  res.send(id)
});

module.exports = router;