var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  let isAuth = false;
  if(req.user) isAuth = true;
  res.send(isAuth);
});

module.exports = router;
