var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport = require('passport');

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

module.exports = router;
