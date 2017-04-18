// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var cities =[];
cities.push({
              name: '',
              zips: []
            });
cities.push({
              name: '',
              zips: []
            });
cities.push({
              name: '',
              zips: []
            });
cities.push({
              name: '',
              zips: []
            });


var holidays = [];
holidays.push({ 
              date: '',
              name: '',
              type: ''
            });
holidays.push({ 
              date: '',
              name: '',
              type: ''
            });
holidays.push({ 
              date: '',
              name: '',
              type: ''
            });
holidays.push({ 
              date: '',
              name: '',
              type: ''
            });


db.Cities.remove({}, function(err, albums){

  db.Cities.create(cities, function(err, cities){
    if (err){ 
      return console.log('ERROR', err); 
    }
    console.log("all cities:", cities);
    console.log("created", cities.length, "cities");
    process.exit();
  });

});
