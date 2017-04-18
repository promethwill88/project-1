var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-1");

module.exports.HolidayModel = require('./holiday');
module.exports.CityModel = require('./city');