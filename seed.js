// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var restroom_list =[
  {
    location: "225 Bush St",
    locationName: "General Assembly",
    type: "School",
    cleanliness: 5,
    neighborhood: "Financial District",
    review: "very good"
  },
  {
    location: "100 Montgomery St",
    locationName: "Starbucks",
    type: "Coffee shop",
    cleanliness: 4,
    neighborhood: "SOMA",
    review: "good"
  },
  {
    location: "601 Mission St",
    locationName: "CVS",
    type: "Store",
    cleanliness: 3,
    neighborhood: "Mission",
    review: "not bad"
  },
  {
    location: "598 Market St",
    locationName: "Montgomery Station",  
    type: "Subway station",
    cleanliness: 1,
    neighborhood: "Union Square",
    review: "very bad"
  }
];


db.Restroom.remove({}, function(err, restrooms){
  console.log('removed all restrooms')
  db.Restroom.create(restroom_list, function(err, restrooms){
    if (err){ 
      return console.log('ERROR', err); 
    }
    console.log("all restrooms:", restrooms);
    console.log("created", restrooms.length, "restrooms");
    process.exit();
  });

});
