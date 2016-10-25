var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var BusSchedule = require('../models/bus');

router.post('/add', function(req, res, next) {

  var dateTemp = new Date();
  var schedule = new BusSchedule();

  var date = dateTemp.getDate() + "/" +  dateTemp.getMonth() + "/" + dateTemp.getFullYear();

  schedule.busSchedule = {
    date : date,
    scheduleData : []
  };

  console.log("hello : " + schedule.busSchedule.scheduleData);

  for(var i=0; i < req.body.scheduleData.length; i++){
    schedule.busSchedule.scheduleData.push({
      typex : req.body.scheduleData[i].typex,
      timings : []
    })
    console.log(schedule.busSchedule.scheduleData);
    timingsTemp = req.body.scheduleData[i].timings;
    for(var j = 0; j < timingsTemp.length; j++){
      schedule.busSchedule.scheduleData[i].timings.push({
        time : timingsTemp[j].time,
        origin : timingsTemp[j].origin,
        destination : timingsTemp[j].destination,
        busType : timingsTemp[j].busType,
      });
    }
  }


	schedule.save(function(err) {
    if (err)
        res.send(err);
    res.json({ message: 'value created!' });
  });

  next();
});

router.get('/all',function(req,res,nex){
  BusSchedule.find({}, function(err, scheduleAll) {
    // if there are any errors, return the error
    if (err)
        return done(err);
    // check to see if theres already a user with that email
    if (scheduleAll[0])
      res.json(scheduleAll[0].busSchedule);
    else if(scheduleAll)
      res.json(scheduleAll);
      
    res.end("{response : false}");

  });
});


module.exports = router;
