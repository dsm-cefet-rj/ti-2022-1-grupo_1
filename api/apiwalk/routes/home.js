var Tenis = require('../models/tenisModel');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let items = await Tenis.find({});

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(items);
});

module.exports = router;