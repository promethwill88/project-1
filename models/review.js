var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  comment: String
});

var Review = mongoose.model('review', ReviewSchema);

module.exports = Review;