// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var restroomGlobal = [];

var restroom_list = [ 
  {
    location: "225 Bush St",
    locationName: "General Assembly",
    type: "School",
    cleanliness: 5,
    neighborhood: "Financial District"
  },
  {
    location: "100 Montgomery St",
    locationName: "Starbucks",
    type: "Coffee shop",
    cleanliness: 4,
    neighborhood: "SOMA"
  },
  {
    location: "601 Mission St",
    locationName: "CVS",
    type: "Store",
    cleanliness: 3,
    neighborhood: "Mission District"
  },
  {
    location: "598 Market St",
    locationName: "Montgomery Station",  
    type: "Subway station",
    cleanliness: 1,
    neighborhood: "Union Square"
  }
];

var review_list = [
  {
    review: "Awful atmosphere. I couldn't let loose."
  },
  {
    review: "Free to use, didn't need to buy anything. Could use a bit of redecorating."
  },
  {
    review: "Plenty of tp. A joy to use. Friendly staff."
  },
  {
    review: "I rather not return here. But if I was close to exploding, I wouldn't say no."
  }
];

// add all songs to each album's song list
restroom_list.forEach(function(restroom) {
  restroom.review = review_list;
  restroomGlobal.push(restroom);
});

db.Restroom.remove({}, function(err, restrooms){
  console.log('removed all restrooms')
  db.Restroom.create(restroomGlobal, function(err, restrooms){
    if (err){ 
      return console.log('ERROR', err); 
    }
    console.log("all restrooms:", restrooms);
    console.log("created", restrooms.length, "restrooms");
    process.exit();
  });

  console.log(restroomGlobal);

});
