var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Review = require('./review');

var RestroomSchema = new Schema({
    location: String,
    locationName: String, 
    type: String,
    cleanliness: Number,
    neighborhood: String,
    review: [Review.schema]
});


var Restroom = mongoose.model('restroom', RestroomSchema);

module.exports = Restroom;