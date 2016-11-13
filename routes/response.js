var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');



// true
router.get('/true', function(req, res, next) {
  response = {
    response : true,
    user : {
      email : req.user.email,
      mobile : req.user.mobile,
      fullName : req.user.fullName,
      rollNo : req.user.rollNo,
      food : req.user.food,
      clubs : req.user.clubs,
      courses : req.user.courses
    }
  }

  res.json(response);
});

// true
router.get('/false', function(req, res, next) {
  res.end("{response : " + req.session.flash.Message[0] + "}");
});


module.exports = router;
