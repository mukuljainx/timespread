var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    courses : {
      date : String,
      courseData : [
        {
          semester : Number,
          courses : [
            {
              courseName : String,
              professor : String,
              weekdays : [],
              courseCode : String
            }
          ]
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('Course', courseSchema);
