var mongoose = require('mongoose');

var busScheduleSchema = mongoose.Schema({
    busSchedule : {
      date : String,
      scheduleData : [
        {
          typex : String, // weekend or weekdays
          timings : [
            {
              time : String,
              origin : String,
              destination : String,
              busType : String, // Government and College Bus
            }
          ]
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('Bus', busScheduleSchema);
