var Favoritos = require('../models/favoritosModel');
var Tenis = require('../models/tenisModel');
var express = require('express');
const passport = require('passport');
var router = express.Router();

const user = 'user';

/* GET users listing. */
router.get('/', async function(req, res, next) {
    passport.authenticate('jwt', async function(err, id) {
        if(err || !id) {
          const error = new Error('Falhou.');   
          return next(error);
        }

        await
        (
          (await Favoritos.findOne({user: id})) == null ?
            Favoritos.create({user: id, ids: []})
            : {}
        );

        let data = await Favoritos.findOne({user: id});
        let items = await Tenis.find({id: data.ids});

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(items);
      }
    )(req, res, next)
  }
);

router.post('/add', async function(req, res, next){
    passport.authenticate('jwt', async function(err, id) {
        if(err || !id) {
          const error = new Error('Falhou.');   
          return next(error);
        }

        await
        (
          Favoritos.findOne({user: id}) == null ?
            Favoritos.create({user: id, ids: []})
            : {}
        );

        let card = req.body;

        await Favoritos.updateOne(
          {user: id},
          {$push: {ids: card.id}}
        );

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(card);
      }
    )(req, res, next)
  }
);

router.delete('/delete/:array', async function(req, res, next){
      passport.authenticate('jwt', async function(err, id) {
        if(err || !id) {
          const error = new Error('Falhou.');   
          return next(err);
        }

        let ids = req.params.array.split('&').map(Number);
        
        await Favoritos.updateOne(
          {user: id},
          {$pull: {ids: {$in: ids}}}
        );

        res.statusCode = 200;
        res.send(ids);
      }
    )(req, res, next)
  }
);

module.exports = router;