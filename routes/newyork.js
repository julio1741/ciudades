var express = require('express');
var router = express.Router();
var request = require('request');
router.get('/', function(req, res, next) {
  res.render('newyork', { title: 'New York' });
});

module.exports = router;