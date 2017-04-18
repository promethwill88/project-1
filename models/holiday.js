var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HolidaySchema = new Schema({
  date: String,
  name: String,
  type: String,
});

var Holiday = mongoose.model('holiday', HolidaySchema);

module.exports = Holiday;