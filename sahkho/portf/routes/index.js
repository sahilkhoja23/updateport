var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/portfolio/uber', function(req, res, next) {
  res.render('uber', { title: 'Uber' });
});

router.get('/portfolio/dangle', function(req, res, next) {
  res.render('dangle', { title: 'Dangle' });
});

router.get('/portfolio/function', function(req, res, next) {
  res.render('function', { title: 'Function' });
});

router.get('/portfolio/quora', function(req, res, next) {
  res.render('quora', { title: 'Quora' });
});

module.exports = router;
	