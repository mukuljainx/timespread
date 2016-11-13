var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ClubMenu = require('../models/club');

router.post('/add', function(req, res, next) {
  var dateTemp = new Date();
  var menu = new ClubMenu();

  var date = dateTemp.getDate() + "/" +  dateTemp.getMonth() + "/" + dateTemp.getFullYear();
  menu.clubMenu = {
    date : date,
    clubData : []
  };

  for(var i=0; i < req.body.clubData.length; i++){
    menu.clubMenu.clubData.push({
      name : req.body.clubData[i].name,
      parent : req.body.clubData[i].parent,
      onGoing : req.body.clubData[i].onGoing,
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
  ClubMenu.find({}, function(err, menu) {
    // if there are any errors, return the error
    if (err)
        return done(err);
    // check to see if theres already a user with that email
    if (menu[0])
      res.json(menu[0].clubMenu);
    else if(menu)
      res.json(menu);

    res.end("{response : false}");

  });
});


module.exports = router;
