var mongoose = require('mongoose');

var clubSchema = mongoose.Schema({
    clubMenu : {
      date : String,
      clubData : [
        {
          name : String,
          parent : Number,
          onGoing : []
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('club', clubSchema);
