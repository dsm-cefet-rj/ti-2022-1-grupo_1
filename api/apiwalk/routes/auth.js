var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  let isAuth = req.user ?  true : false;
  res.send(isAuth);
});

module.exports = router;