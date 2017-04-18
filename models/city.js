var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CitySchema = new Schema({
  name: String,
  zips: [Number]
});

var City = mongoose.model('city', CitySchema);

module.exports = City;