var mongoose = require("mongoose");
mongoose.connect( process.env.MONGO_URI || "mongodb://localhost/project-1");
var Restroom = require('./restroom');
var Review = require('./review');

module.exports.Restroom = require('./restroom');
module.exports.Review = require('./review');

