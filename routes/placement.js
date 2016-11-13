var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var PlacementMenu = require('../models/placement');

router.post('/add', function(req, res, next) {
  var dateTemp = new Date();
  var menu = new PlacementMenu();

  var date = dateTemp.getDate() + "/" +  dateTemp.getMonth() + "/" + dateTemp.getFullYear();
  menu.placementMenu = {
    date : date,
    placementData : []
  };

  for(var i=0; i < req.body.placementData.length; i++){
    menu.placementMenu.placementData.push({
      companyName : req.body.placementData[i].companyName,
      pointerCriteria : req.body.placementData[i].pointerCriteria,
      placementPackage : req.body.placementData[i].placementPackage,
      jobDescription : req.body.placementData[i].jobDescription,
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
  PlacementMenu.find({}, function(err, menu) {
    // if there are any errors, return the error
    if (err)
        return done(err);
    // check to see if theres already a user with that email
    if (menu[0])
      res.json(menu[0].placementMenu);
    else if(menu)
      res.json(menu);

    res.end("{response : false}");

  });
});


module.exports = router;
