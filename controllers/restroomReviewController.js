// RestroomReviewController
var db = require('../models');

// POST '/api/restroom/:restroomId/review'
function create(req, res) {
  db.Review.findById(req.params.restroomId, function(err, foundReview) {
    console.log(req.body);
    var newReview = new db.Review(req.body);
    foundReview.songs.push(newReview);
    foundReview.save(function(err, savedReview) {
      console.log('newReview created: ', newReview);
      res.json(newReview);
    });
  });
}

module.exports = {
  create: create
};