var mongoose = require('mongoose');

var placementSchema = mongoose.Schema({
    placementMenu : {
      date : String,
      placementData : [
        {
          companyName : String,
          pointerCriteria : Number,
          placementPackage : Number,
          jobDescription : String,
        }
      ]
    }
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('placement', placementSchema);
