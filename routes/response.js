var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');



// true
router.get('/true', function(req, res, next) {
  console.log(req);
  res.end("{response : ture}");
});

// true
router.get('/false', function(req, res, next) {
  var response = "";
  console.log('response is ::: ' + req.session.flash.Message[0] )
  req.session.flash.Message[0] == 'rollNo already exists' ? response = "taken" : response = "false";
  res.end("{response : " + req.session.flash.Message[0] + "}");
});


module.exports = router;
