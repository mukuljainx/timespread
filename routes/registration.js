var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport = require('passport');
var User = require('../models/user');

router.post('/register', passport.authenticate('local-signup', {
   successRedirect : '../response/true', // redirect to the secure profile section
   failureRedirect : '../response/false', // redirect back to the signup page if there is an error
   failureFlash : true // allow flash messages
}));

router.post('/login', passport.authenticate('local-login', {
   successRedirect : '../response/true', // redirect to the secure profile section
   failureRedirect : '../response/false', // redirect back to the signup page if there is an error
   failureFlash : true // allow flash messages
}));

router.post('/rollno', function(req, res, next) {
  User.findOne({ 'rollNo' :  req.body.rollNo }, function(err, user) {
      // if there are any errors, return the error
      console.log(user)
      if (err){
          return done(err);
        }
      // check to see if theres already a user with that email
      if (user) {
        res.end("{response : false}");
      }
      res.end("{response : true}");
    });
});


module.exports = router;
