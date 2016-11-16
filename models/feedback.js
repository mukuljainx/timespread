var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
    name : String,
    email : String,
    feedback : String,
  },{
    timestamps: true
});

// create the model for mess and expose it to our app
module.exports = mongoose.model('Feedback', feedbackSchema);
