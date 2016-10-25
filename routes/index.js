var express = require('express');
var router = express.Router();
var path = require("path");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time Spread' });
});

router.get('/termsandconditions', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/terms.html'));
});

module.exports = router;
