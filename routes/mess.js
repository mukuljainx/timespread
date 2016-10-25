var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MessMenu = require('../models/mess');

router.post('/add', function(req, res, next) {
  var dateTemp = new Date();
  var menu = new MessMenu();

  var date = dateTemp.getDate() + "/" +  dateTemp.getMonth() + "/" + dateTemp.getFullYear();
  menu.messMenu = {
    date : date,
    menuData : []
  };

  for(var i=0; i < req.body.menuData.length; i++){
    menu.messMenu.menuData.push({
      day : req.body.menuData[i].day,
      breakFast : req.body.menuData[i].breakFast,
      lunch : req.body.menuData[i].lunch,
      snacks : req.body.menuData[i].snacks,
      dinner : req.body.menuData[i].dinner,
    })
  }

  menu.save(function(err) {
    if (err){
        console.log("fraeky error");
        res.send(err);
      }
        res.json({ message: 'value created!' });
  });

  // next();
});

router.get('/all',function(req,res,nex){
  MessMenu.find({}, function(err, menu) {
    // if there are any errors, return the error
    if (err){
        return done(err);
      }
    // check to see if theres already a user with that email
    if (menu) {
      res.json(menu[0].messMenu);
    }
    res.end("{response : false}");

  });
});


module.exports = router;
