/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/holidays
function index(req, res) {
  // send back all holidays as JSON
  db.Holiday.find({}, function(err, allHolidays) {
    res.json(allHolidays);
  });
}

// POST /api/holidays
function create(req, res) {
  
}

// GET /api/holidays/:holidayId
function show(req, res) {
 
}

// DELETE /api/holidays/:holidayId
function destroy(req, res) {
  
}

// PUT or PATCH /api/holidays/:holidayId
function update(req, res) {
  // find one holiday by id, update it based on request body,
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