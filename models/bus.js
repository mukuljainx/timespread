var mongoose = require('mongoose');

var busScheduleSchema = mongoose.Schema({
    busSchedule : {
      date : Date,
      data : [
        {
          type : String, // weekend or weekdays
          timings : [
            {
              time : String,
              type : String, //out going or in
              busType : String, // Government and College Bus
            }
          ]
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('Mess', messSchema);
