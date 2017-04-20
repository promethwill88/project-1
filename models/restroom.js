var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RestroomSchema = new Schema({
    location: String,
    locationName: String, 
    type: String,
    cleanliness: Number,
    neighborhood: String,
    review: String
});



var Restroom = mongoose.model('restroom', RestroomSchema);

module.exports = Restroom;