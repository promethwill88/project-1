// CLIENT-SIDE JS

$(document).ready(function() {
  
  console.log('app.js loaded!');

  $('input.autocomplete').autocomplete({
    data: {
      'Financial District': null,
      'Japantown': null,
      'Nob Hill': null,
      'Panhandle': null,
      'Russian Hill': null,
      'Sunset': null,
      'Castro District': null,
      "Fisherman's Wharf": null,
      'Lower Haight': null,
      'Noe Valley': null,
      'Potrero Hill': null,
      'Sea Cliff': null,
      'Tenderloin': null,
      'Chinatown': null,
      'Haight-Ashbury': null,
      'Marina': null,
      'North Beach': null,
      'Presidio': null,
      'Union Square': null,
      'Sixth Street': null,
      'Cole Valley': null,
      'Hayes Valley': null,
      'Mission District': null,
      'Pacific Heights': null,
      'Richmond': null,
      'SOMA': null,
      'Upper Market': null,
    },
    
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autocompleted.
    // Setting neighborhood selected to searchHood, console logging searchHood
    var searchHood = val;
    console.log(searchHood);
    
    },
    
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    
  });

// AJAX call for restrooms for personal API

  $.ajax({
  	method: 'GET',
  	url: '/api/restroom',
  	success: renderMultipleRestrooms,
    error: handleError
  });

  // when the form is submited, create new restroom
  $('#restroom-form form').on('submit', function(e) {
    console.log('submit worked!');
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/restroom', formData, function(restroom) {
      console.log("formdata"); //render server's response
      renderBathroom(restroom);
    });
    $(this).trigger("reset");
  });

  $('#restrooms').on('click', '#deletebutton', handleDeleteRestroomClick);
    // var $name = $('#name');
    // var $location = $('#location');
    // var $type = $('#type');
    // var $cleanliness = $('#cleanliness');
    // var $neighborhoods = $('#neighborhoods');
    // var $review = $('#review');
    // var dataToPos = {
    //   location: $location.val(),
    //   locationName: $name.val(),
    //   type: $type.val(),
    //   cleanliness: $cleanliness.val(),
    //   neighborhood: $neighborhoods.val(),
    //   review:  $review.val()
    // };
    // var restroomId = $('.container').data('restroomId');
    // var restroomPostToServerUrl = '/api/restroom/' + restroomId;

    // $.post(restroomPostToServerUrl, dataToPos, function(data) {
    //   console.log("data received")
    //   });


    // var formData = $(this).serialize();
    // $.post('/api/restroom', formData, function(restroom) {
    //   renderBathroom(restroom); //render server's response
    // });
    // $(this).trigger("reset");
 
  function handleDeleteRestroomClick(e) {
    var restroomId = $(this).parents('.row-restroom').data('restid');
    console.log(restroomId);
    $.ajax({
      url: '/api/restroom/' + restroomId,
      method: 'DELETE',
      success: handleDeleteRestroomSuccess
    });
  }

  function handleDeleteRestroomSuccess(json) {
    var deletedRestroomId = json._id;
    $('div[data-restid=' + deletedRestroomId + ']').remove();
  }

  function renderMultipleRestrooms(restrooms) {
  	restrooms.forEach(function(restroom) {
      renderBathroom(restroom);  
    });
  };


  // Testing function for displaying filtered by name and/or neighborhoods
    // function renderMultipleRestrooms(restrooms) {
    //   restrooms.forEach(function(restroom) {
    //     if(restroom.locationName == 'Starbucks'){
    //     renderBathroom(restroom);
    //     }   
    //   });
    // }

  function handleError(e) {
  	console.log('error!!!!');
  	$('.list').text('failed to load restrooms');
  }

  function renderBathroom(json) {
    console.log('populating bathrooms', json);

    var bathroomAppend = (`
      <div class="container">
        <div class="row-restroom" data-restid="${json._id}">            
          <div class="card small">
            <div class="card-image waves-effect waves-block waves-light">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4"><i class="small material-icons prefix">store</i> ${json.locationName}<i class="material-icons right">more_vert</i></span>
              <p><i class="tiny material-icons prefix">location_on</i> ${json.location}</p>
              <p><i class="tiny material-icons prefix">loyalty</i> ${json.cleanliness}</p>

            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
              <p><i class="tiny material-icons prefix">business</i> ${json.neighborhood}</p>
              <p><i class="tiny material-icons prefix">info</i> ${json.type}</p>
              <p><i class="tiny material-icons prefix">stars</i> ${json.review}</p>
              <a id="updatebutton" name="updatebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">import_export</i>update</a>  
              <a id="deletebutton" name="deletebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">delete</i>Delete</a>
            </div>
          </div>
        </div>
      </div>
      `); 

      $('#restrooms').prepend(bathroomAppend);
  }







});




