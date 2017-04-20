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
      // Callback function when value is autcompleted.
   
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

  $('#form').submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    console.log(data);


    // console.log($('#name'));
    // var $name = $('#name');
    // var $location = $('#location');
    // var $type = $('#type');
    // var $cleanliness = $('#cleanliness');
    // var $neighborhoods = $('#neighborhoods');
    // var $reviews = $('#reviews');
    // var dataToPos = {
    //   location: $location.val(),
    //   locationName: $name.val(),
    //   type: $type.val(),
    //   cleanliness: $cleanliness.val(),
    //   neighborhood: $neighborhoods.val(),
    //   reviews:  $reviews.val()
    // };
    // var restroomId = $('.container').data('restroomId');
    // var restroomPostToServerUrl = '/api/restroom/' + restroomId;

    // $.post(restroomPostToServerUrl, dataToPos, function(data) {
    //   console.log("data received")
    //   });
  });

    // var formData = $(this).serialize();
    // $.post('/api/restroom', formData, function(restroom) {
    //   renderBathroom(restroom); //render server's response
    // });
    // $(this).trigger("reset");
 






  function renderMultipleRestrooms(restrooms) {
  	restrooms.forEach(function(restroom) {
      renderBathroom(restroom);
    });
  }



  // function handleDeleteRestroomClick(e) {
  //   var restroomId = $(this).parents('.restroom').data('restroom-id');
  //   $.ajax({
  //     url: '/api/restroom/' + restroomId,
  //     method: 'DELETE',
  //     success: handleDeleteRestroomSuccess
  //   });
  // }

  // function handleDeleteRestroomSuccess(data) {
  //   var deletedRestroomId = data._id;
  //   $('div[data-restroom-id=' + deletedRestroomId + ']').remove();
  // }



  function handleError(e) {
  	console.log('error!!!!');
  	$('.list').text('failed to load restrooms');
  }



  function renderBathroom(json) {
    console.log('populating bathrooms', json);
 
    var bathroomAppend = (`
          <div class="row-restroom" data-restroom-id="{restroom._id}">
          
          <div class="col m1">
            
            <ul class="list-group">
              
              <li class="list-group-item">
                <h5 class="inline-header">Name</h5>
                <span class="restroom-name">${json.locationName}</span>
              </li>

              <li class="list-group-item">
                <h5 class="inline-header">Location</h5>
                <span class="restroom-location">${json.location}</span>
              </li>

              <li class="list-group-item">
                <h5 class="inline-header">Type</h5>
                <span class="restroom-location">${json.type}</span>
              </li>

              <li class="list-group-item">
                <h5 class="inline-header">Cleanliness</h5>
                <span class="restroom-location">${json.cleanliness}</span>
              </li>

              <li class="list-group-item">
                <h5 class="inline-header">Neighborhood</h5>
                <span class="restroom-location">${json.neighborhood}</span>
              </li>
            
            </ul>
          
          </div>
       
        </div>
      </div>

    `); 

    $('#restrooms').prepend(bathroomAppend);
  }

});



