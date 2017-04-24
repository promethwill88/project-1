// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */


app.get('/api/restroom', controllers.restroom.index);
app.get('/api/restroom/:restroomId', controllers.restroom.show);
app.post('/api/restroom', controllers.restroom.create);
app.delete('/api/restroom/:restroomId', controllers.restroom.destroy);
app.put('/api/restroom/:restroomId', controllers.restroom.update);
app.get('/api/review', controllers.restroomReview.index);
app.post('/api/review', controllers.restroomReview.create);

// app.post('/api/restroom/:restroomId/review', controllers.restroomReview.create);



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
