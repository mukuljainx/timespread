var mongoose = require('mongoose');

var messSchema = mongoose.Schema({
    messMenu : {
      date : String,
      menuData : [
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
          snacks : {
            items : [],
            id : String,
          },
          dinner : {
            items : [],
            id : String,
          },
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('Mess', messSchema);
