var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');



// true
router.get('/true', function(req, res, next) {
  console.log(req);
  res.end("{response : true}");
});

// true
router.get('/false', function(req, res, next) {
  res.end("{response : " + req.session.flash.Message[0] + "}");
});


module.exports = router;
