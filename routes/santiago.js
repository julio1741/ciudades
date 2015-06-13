var express = require('express');
var router = express.Router();
var request = require('request');
request('http://json-time.appspot.com/time.json?tz=America/Santiago', function (error, response, body) {
    if (!error && response.statusCode == 200) {
		var json = JSON.parse(body);;
		router.get('/', function(req, res, next) {
		  res.render('santiago', { title: 'Santiago', hora: json.hour, minutos: json.minute, segundos: json.second });
		});
    }
});

module.exports = router;