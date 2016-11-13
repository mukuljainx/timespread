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

// Can be used for add and edit course both as in edit to an array will be pushed from front end
router.post('/add_course', function(req, res, next) {
  User.findOneAndUpdate({'rollNo': req.body.rollNo}, {$set:{courses:req.body.courseData}}, {new: true}, function(err, user){
    if(err){
        console.log("Something wrong when updating data!");
        res.statusCode = 500;
        res.end("{\"response\" : Internal Server Error}");
    }
    if(!user){
      res.end("{\"response\" : user not find}");
    }
    res.end("{\"response\" : true}")
  });
});

// Can be used for add and edit course both as in edit to an array will be pushed from front end
router.post('/add_club', function(req, res, next){
  User.findOneAndUpdate({'rollNo' : req.body.rollNo}, {$set:{clubs:req.body.clubData}}, {new : true}, function(err, user){
    if(err){
        console.log("Something wrong when updating data!");
        res.statusCode = 500;
        res.end("{\"response\" : Internal Server Error}");
    }
    if(!user){
      res.end("{\"response\" : user not find}");
    }
    res.end("{\"response\" : true}")
  });
});

//will trigger every time users selects a favriote dish
router.post('/add_one_food', function(req, res, next){
  newFood = [];
  User.findOne({'rollNo' : req.body.rollNo}, function(err, user){
    if(err){
        console.log("Something wrong when updating data!");
        res.statusCode = 500;
        res.end("{\"response\" : Internal Server Error}");
    }
    if(!user){
      res.end("{\"response\" : user not find}");
    }
    newFood = user.food;
    newFood.push(req.body.id);
    User.findOneAndUpdate({'rollNo' : req.body.rollNo}, {$set:{food: newFood}}, {new : true}, function(err, user){
      if(err){
        console.log("something terrible had happend, can't update data right now, please contact us with log");
        res.statusCode = 500;
        res.end("{\"response\" : Internal Server Error}");
      }
      res.end("{\"response\" : true}")
    });
  });
});

//will trigger every time users selects a favriote dish, deletes a dish
router.post('/remove_one_food', function(req, res, next){
  User.findOne({'rollNo' : req.body.rollNo}, function(err, user){
    if(err){
        console.log("Something wrong when updating data!");
        res.statusCode = 500;
        res.end("{\"response\" : Internal Server Error}");
    }
    if(!user){
      res.end("{\"response\" : user not find}");
    }
    newFood = user.food;
    index = newFood.indexOf(req.body.id);
    if(index > -1) newFood.splice(index, 1);
    User.findOneAndUpdate({'rollNo' : req.body.rollNo}, {$set:{food: newFood}}, {new : true}, function(err, user){
      if(err){
        console.log("something terrible had happend, can't update data right now, please contact us with log");
        res.statusCode = 500;
        res.end("{\"response\" : Internal Server Error}");
      }
      res.end("{\"response\" : true}")
    });
  });
});


module.exports = router;
