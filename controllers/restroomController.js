// restroomController
var db = require('../models');

// GET /api/restrooms
function index(req, res) {
// send back all restrooms as JSON
  db.Restroom.find({}, function(err, allRestrooms){
    res.json(allRestrooms)
  });
};
// POST /api/restroom
function create(req, res) {
  console.log('body', req.body);
  //create restroom based on request body and send it back as JSON
  var location = req.body.location;
  var locationName = req.body.name;
  var type = req.body.type;
  var cleanliness = req.body.cleanliness; 
  var neighborhood = req.body.neighborhoods;
  var review = req.body.review;

  db.Restroom.create(req.body, function(err, restroom) {
    if(err) { throw err; }
    res.json(restroom);
  });
};

// GET /api/restroom/:restroomId
function show(req, res) {
  db.Restroom.findById(req.params.restroomId, function(err, foundRestroom) {
    if(err) { throw err; } 
    res.json(foundRestroom);
  });
};


// DELETE /api/restrooms/:restroomId
function destroy(req, res) {
  // find one restroom and delete it
  db.Restroom.findOneAndRemove({ _id: req.params.restroomId}, function(err, foundRestroom) {
    res.json(foundRestroom);
  });
}

// PUT or PATCH /api/restroom/:restroomId
function update(req, res) {
  // find one restroom by id, update it based on request body,
  // and send it back as JSON
  db.Restroom.findById(req.params.restroomId, function(err, foundRestroom) {
    if(err) { throw err; } 
    // foundRestroom.cleanliness = req.body.cleanliness;
    // foundRestroom.location = req.body.location;
    // foundRestroom.locationName = req.body.locationName;
    foundRestroom.neighborhood = req.body.neighborhood;
    foundRestroom.type = req.body.type;
    foundRestroom.review = req.body.review;
    foundRestroom.save(function(err, savedRestroom) {
      if(err) { throw err; }
      res.json(savedRestroom);
    });
  });
};

// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};