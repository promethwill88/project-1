var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-1");

module.exports.Restroom = require('./restroom');

