var express = require('express');
var router = express.Router();

let carrinhoData = {}

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([ carrinhoData ])
});

module.exports = router;
