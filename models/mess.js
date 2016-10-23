var mongoose = require('mongoose');

var messSchema = mongoose.Schema({
    messMenu : {
      date : Date,
      data : [
        {
          day : Number,
          breakFast : {
            items : [],
            id : String,
          },
          lunch : {
            items : [],
            id : String,
          },
          snacks : breakFast : {
            items : [],
            id : String,
          },
          dinner : breakFast : {
            items : [],
            id : String,
          },
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('Mess', messSchema);
