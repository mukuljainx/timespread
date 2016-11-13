var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    courses : {
      date : String,
      courseData : [
        {
          semester : Number,
          courses : [
            {
              name : String,
              professor : String,
              weekdays : [],
              code : String
            }
          ]
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('Course', courseSchema);
