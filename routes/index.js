var express = require('express');
var router = express.Router();
var path = require("path");
var bodyParser = require('body-parser');
var Feedback = require('../models/feedback');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time Spread' });
});

router.get('/termsandconditions', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/terms.html'));
});
router.get('/contact_us', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/contactus.html'));
});
router.get('/feedback', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/feedback.html'));
});
router.get('/thankyou', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/thanks.html'));
});

router.post('/feedback_collect', function(req, res, next){
  var feedback = new Feedback();
  feedback
    feedback.name = req.body.name;
    feedback.email = req.body.email;
    feedback.feedback = req.body.feedback;

  feedback.save(function(err){
    if (err){
        console.log("fraeky feedback error");
        res.send(err);
      }
    res.json({ message: 'value created!' });
  })
});
module.exports = router;
