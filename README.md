
# Project Name

Airpnp

# Author

Will Fong, Sejin Park

# Requirements

* Express
* Mongo
* Mongoose
* jQuery
* AJAX

# Description

This app helps clients find bathroom close to the search area 
and shows the information about the bathroom.
Clients can add new bathroom and also can update the information of the bathroom
which is already existing.

# Information included

* Location Name
* Location
* Cleanliness
* Type
* Neighborhood
* Review

## Code I'm Proud Of - app.js

```javascript 
  function renderMultipleRestrooms(restrooms) {
    allMyRestrooms = restrooms;
  	restrooms.forEach(function(restroom) {
      renderBathroom(restroom);  
    });
  };


 // function for displaying filtered by name and/or neighborhoods
    function renderFilteredRestrooms(filter) {
      // Clear page of results
      $('#restrooms').empty();
      allMyRestrooms.forEach(function(restroom) {
      if(restroom.neighborhood === filter){
        renderBathroom(restroom);
      }   
      });
    };
```
Why I'm proud: Wrote out a way to filter results based on autocomplete search. allMyRestroom is a global var with an empty array. Once successful AJAX call to GET from db, allRestrooms gets filled. For renderMultipleRestrooms function, it loads the page upon start. renderFilteredRestrooms clears the page, then finds matches with data that matches a certain criteria (in this case filter = parameter passed through by Autocomplete AJAX call. In this case neighborhood), then returns those results. (Done with Cory's help).

# Screenshots:
![alt tag](../images/SS1.png)
![alt tag](../images/SS2.png)
![alt tag](../images/SS3.png)
![alt tag](../images/SS4.png)
![alt tag](../images/SS5.png)
![alt tag](../images/SS6.png)

