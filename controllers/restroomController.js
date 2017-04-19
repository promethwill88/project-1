/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/restrooms
function index(req, res) {
// send back all restrooms as JSON
  db.Restroom.find({}, function(err, allRestrooms){
    es.json(allRestrooms)
  });
};
// POST /api/restrooms
function create(req, res) {
  
}

// GET /api/restrooms/:restroomId
function show(req, res) {
 
}

// DELETE /api/restrooms/:restroomId
function destroy(req, res) {
  
}

// PUT or PATCH /api/restrooms/:restroomId
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