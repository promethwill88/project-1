var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  comment: String
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;