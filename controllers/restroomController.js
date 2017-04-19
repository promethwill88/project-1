/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/restroom
function index(req, res) {

  db.Restroom.find({}, function(err, allRestrooms){
   
    // db.Restroom.find({}, function(err, allRestroom) {
    if(err){
      throw err;
    } else {
      res.json(allRestrooms)
    };
  });
};
// POST /api/restroom
function create(req, res) {

  console.log('body', req.body);
  //create restroom based on request body and send it back as JSON
  var location = req.body.location;
  var locationName = req.body.locationName;
  var type = type;
  var cleanliness = cleanliness; 
  var neighborhood = neighborhood;
  var reviews = reviews;

  db.Restroom.create(req.body, function(err, restroom) {
    if(err) {
      throw err;
    } else {
      res.json(restroom);
    };
  });
};

// GET /api/restroom/:restroomId
function show(req, res) {
  db.Restroom.findById(req.params.restroomId, function(err, foundRestroom) {
    if(err) {
      console.log(err); 
    } else {
      res.json(foundRestroom);
    }
  });
};

// DELETE /api/restroom/:restroomId
function destroy(req, res) {
  // find one restroom and delete it
  db.Restroom.findOneAndRemove({ _id: req.params.restRoomId}, function(err, foundRestroom) {
    res.json(foundRestroom);
  });
}

// PUT or PATCH /api/restroom/:restroomId
function update(req, res) {
  // find one restroom by id, update it based on request body,
  // and send it back as JSON
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};