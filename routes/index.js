var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Yesterday", update: "daily", javascript: "yesterday.js" });
});

router.get('/7days', function(req, res, next) {
  res.render('index', { title: "7 days", update: "daily", javascript: "7days.js" });
});

router.get('/30days', function(req, res, next) {
  res.render('index', { title: "30 days", update: "daily", javascript: "30day.js" });
});

router.get('/1year', function(req, res, next) {
  res.render('index', { title: "1 year", update: "monthly", javascript: "1year.js" });
});

router.get('/realtime', function(req, res, next) {
  res.render('index', { title: "Real time", update: "in real time", javascript: "realtime.js" });
});

router.get('/custom', function(req, res, next) {
  res.render('index', { title: "Custom query", update: "daily", javascript: "custom.js" });
});

module.exports = router;
