// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var restroom_list = [ 
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
    neighborhood: "Mission District",
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

// var review_list = [
//   {
//     comment: "Awful atmosphere. I couldn't let loose."
//   },
//   {
//     comment: "Free to use, didn't need to buy anything. Could use a bit of redecorating."
//   },
//   {
//     comment: "Plenty of tp. A joy to use. Friendly staff."
//   },
//   {
//     comment: "I rather not return here. But if I was close to exploding, I wouldn't say no."
//   }
// ];


  // restroom_list.forEach(function(restroom) {
  //   restroom.review = review_list;
  //   console.log(restroom);
  // });



// db.Restroom.remove({}, function(err, restrooms){

//  db.Restroom.create(restroom_list, function(err, createdRestrooms){

//    if (err) { return console.log('ERROR', err); }

//    createdRestrooms.forEach(function stuffFullofReviews(restroom){
//      db.Review.create(review_list, function(err, createdReviews){
//        if (err) { return console.log('ERROR', err); }
//        restroom.review=createdReviews;
//        restroom.save(function(err, succ){
//          console.log("Added review");
//        });//closes save function
//      });//closes review create function
//    }); //closes forEach loop
//  });//closes album create function
// }); //closes album remove function
