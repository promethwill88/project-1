/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/cities
function index(req, res) {

db.Restroom.find({}, function(err, allRestrooms){
 
  // db.Restroom.find({}, function(err, allRestroom) {
     if(err){
    throw err;
  } else {
      res.json(allRestrooms)
  }
})
}
// POST /api/cities
function create(req, res) {
  
}

// GET /api/cities/:cityId
function show(req, res) {
 
}

// DELETE /api/cities/:cityId
function destroy(req, res) {
  
}

// PUT or PATCH /api/albums/:cityId
function update(req, res) {
  // find one city by id, update it based on request body,
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