// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var restroom_list = [
  {
    location: "1696 Hayes St.",
    locationName: "Central Coffee Tea & Spices",  
    type: "Cafe",
    cleanliness: 4,
    neighborhood: "Panhandle"
  }, 
  {
    location: "2175 Chestnut St.",
    locationName: "Delarosa",  
    type: "Restaurant",
    cleanliness: 5,
    neighborhood: "Marina"
  },
  {
    location: "3913 24th St.",
    locationName: "Savor",  
    type: "Restaurant",
    cleanliness: 5,
    neighborhood: "Noe Valley"
  },
  {
    location: "429 Castro St.",
    locationName: "Castro Theatre",  
    type: "Movie Theater",
    cleanliness: 4,
    neighborhood: "Castro District"
  },
  {
    location: "3349 20th St.",
    locationName: "Shotwell's",  
    type: "Bar",
    cleanliness: 3,
    neighborhood: "Mission District"
  },
  {
    location: "2095 Union St.",
    locationName: "Soul Cycle",  
    type: "Gym",
    cleanliness: 3,
    neighborhood: "Marina"
  },
  {
    location: "100 34th Ave.",
    locationName: "Legend of Honor",  
    type: "Museum",
    cleanliness: 5,
    neighborhood: "Presidio"
  },
  {
    location: "735 7th Ave.",
    locationName: "Safeway",  
    type: "Grocery Store",
    cleanliness: 2,
    neighborhood: "Richmond"
  },
  {
    location: "1396 La Playa St.",
    locationName: "Java Beach Cafe",  
    type: "Cafe",
    cleanliness: 3,
    neighborhood: "Sunset"
  },
   {
    location: "2001 37th Ave.",
    locationName: "St. Ignatius College Prepatory",  
    type: "School",
    cleanliness: 4,
    neighborhood: "Sunset"
  },
  {
    location: "225 Bush St.",
    locationName: "General Assembly",
    type: "School",
    cleanliness: 5,
    neighborhood: "Financial District"
  },
  {
    location: "100 Montgomery St.",
    locationName: "Starbucks",
    type: "Cafe",
    cleanliness: 4,
    neighborhood: "Financial District"
  },
  {
    location: "601 Mission St.",
    locationName: "CVS",
    type: "Store",
    cleanliness: 3,
    neighborhood: "Financial District"
  },
  {
    location: "598 Market St.",
    locationName: "Montgomery St. BART Station",  
    type: "Transit Station",
    cleanliness: 1,
    neighborhood: "Union Square"
  },
  {
    location: "525 Market St.",
    locationName: "Chipotle Mexican Grill",  
    type: "Restaurant",
    cleanliness: 4,
    neighborhood: "Union Square"
  },
  {
    location: "1701 Greenwich St.",
    locationName: "Fort Mason Market & Deli",  
    type: "Restaurant",
    cleanliness: 5,
    neighborhood: "Russian Hill"
  } 
];

var review_list = [
  {
    comment: "Awful atmosphere. I couldn't let loose."
  },
  {
    comment: "Free to use, didn't need to buy anything. Could use a bit of redecorating."
  },
  {
    comment: "Plenty of tp. A joy to use. Friendly staff."
  },
  {
    comment: "I rather not return here. But if I was close to exploding, I wouldn't say no."
  }
];

restroom_list.forEach(function(restroom){
  restroom.review = review_list;
  console.log(restroom);
});

db.Restroom.remove({}, function(err, restrooms){
 db.Restroom.create(restroom_list, function(err, createdRestrooms){
    if (err){ 
      return console.log('ERROR', err);
    }
   createdRestrooms.forEach(function stuffFullofReviews(restroom){
     db.Review.create(review_list, function(err, createdReviews){
        if (err){
          return console.log('ERROR', err); 
        }
        restroom.review = createdReviews;
        restroom.save(function(err, succ){
         console.log("Added review");
        });
     });
    });
 });
});
