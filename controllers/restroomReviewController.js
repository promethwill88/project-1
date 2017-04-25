// RestroomReviewController
var db = require('../models');

// GET /api/review
function index(req, res) {
// send back all restrooms as JSON
  db.Review.find({}, function(err, allReviews){
    res.json(allReviews)
  });
};

// POST /api/review
function create(req, res) {
  console.log('body', req.body);
  //create site review based on request body and send it back as JSON
  var comment = req.body.comment;
  db.Review.create(req.body, function(err, review){
    if(err){ 
      throw err; 
    }
    res.json(review);
  });
};

module.exports = {
  index: index,
  create: create
};