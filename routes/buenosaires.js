var express = require('express');
var router = express.Router();
var request = require('request');
router.get('/', function(req, res, next) {
  res.render('buenosaires', { title: 'Buenos Aires' });
});

module.exports = router;