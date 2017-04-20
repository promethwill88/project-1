var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  cleanliness: String,
  comment: String
});

var Review = mongoose.model('review', ReviewSchema);

module.exports = Review;