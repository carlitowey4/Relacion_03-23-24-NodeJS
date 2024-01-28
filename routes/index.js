var express = require('express');
var router = express.Router();
var {multiplicar} = require('../helpers/multiplicar')

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/', function(req, res) {
  let result = multiplicar(req.body.base);
  res.render('tabla', { resultado: result });
});

module.exports = router;
