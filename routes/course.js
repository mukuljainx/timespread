var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var CourseSchedule = require('../models/course');

router.post('/add', function(req, res, next) {

  var dateTemp = new Date();
  var course = new CourseSchedule();

  var date = dateTemp.getDate() + "/" +  dateTemp.getMonth() + "/" + dateTemp.getFullYear();

  course.courses = {
    date : date,
    courseData : []
  };

  for(var i=0; i < req.body.courseData.length; i++){
    course.courses.courseData.push({
      semester : req.body.courseData[i].semester,
      courses : []
    })
    courseslist = req.body.courseData[i].courses;
    for(var j=0; j<courseslist.length; j++){
      course.courses.courseData[i].courses.push({
        name : courseslist[j].courseName,
        professor : courseslist[j].professor,
        weekdays : courseslist[j].weekdays,
        courseCode : courseslist[j].Code
      })
    }
  }

	course.save(function(err) {
    if (err)
        res.send(err);
    res.json({ message: 'value created!' });
  });

});

router.get('/all',function(req,res,nex){
  CourseSchedule.find({}, function(err, coursesAll) {
    // if there are any errors, return the error
    if (err)
        return done(err);
    // check to see if theres already a user with that email
    if (coursesAll[0])
      res.json(coursesAll[0].courses);
    else if(coursesAll)
      res.json(coursesAll);

    res.end("{response : false}");

  });
});


module.exports = router;
