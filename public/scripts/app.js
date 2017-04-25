$(document).ready(function(e) {
  
  // Global variable to carry all bathroom data
  var allMyRestrooms = [];

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
      console.log(val);
      // Callback function when value is autocompleted.
      renderFilteredRestrooms(val);
    },
    
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    
  });

  // Reload search button
  $('#reload').on('click', function(e) {
    location = location;
  });

  // MODEL #1 : RESTROOM (READ)
  $.ajax({
    method: 'GET',
    url: '/api/restroom',
    success: renderMultipleRestrooms,
    error: handleError
  });

  function renderMultipleRestrooms(restrooms) {
    allMyRestrooms = restrooms;
    restrooms.forEach(function(restroom) {
      renderBathroom(restroom);  
    });
  };

  function handleError(e) {
    console.log('error!!!!');
    $('.list').text('failed to load restrooms');
  };

  // MODEL #1 : RESTROOM (CREATE)
  $('#restroom-form form').on('submit', function(e) {
    console.log('submit worked!');
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/restroom', formData, function(restroom) {
      renderBathroom(restroom);
    });
    $(this).trigger("reset");
  });

  // MODEL #1 : RESTROOM (UPDATE / SAVE)
  $('#restrooms').on('click', '#updatebutton', handleUpdateRestroomClick);

  function handleUpdateRestroomClick(e) {
    var $restroomRow = $(this).closest('.row-restroom');
    var restroomId = $restroomRow.data('restid');
    console.log(restroomId);
    var neighborhood = $restroomRow.find('p.neighborhood').text();
    $restroomRow.find('p.neighborhood').html('<input class="edit-neighborhood" value="' + neighborhood + '"></input>');
    var type = $restroomRow.find('p.type').text();
    $restroomRow.find('p.type').html('<input class="edit-type" value="' + type + '"></input>');
    var review = $restroomRow.find('p.review').text();
    $restroomRow.find('p.review').html('<input class="edit-review" value="' + review + '"></input>');
  }

  $('#restrooms').on('click', '#savebutton', handleSaveRestroomClick);

  function handleSaveRestroomClick(e) {
    var restroomId = $(this).parents('.row-restroom').data('restid');
    var $restroomRow = $('[data-restid=' + restroomId + ']');
    console.log($restroomRow)
    var data = {
      neighborhood: $restroomRow.find('.edit-neighborhood').val(),
      type: $restroomRow.find('.edit-type').val(),
      review: $restroomRow.find('.edit-review').val()
    };
    console.log(data);
    $.ajax({
      method: 'PUT',
      url: '/api/restroom/' + restroomId,
      data: data,
      success: handleRestroomUpdatedResponse
    });
  }

  function handleRestroomUpdatedResponse(data) {
   var restroomId = data._id;
   $('[data-restid=' + restroomId + ']').remove();
   renderBathroom(data);
  }

// MODEL #1 : REVIEW (DELETE)
  $('#restrooms').on('click', '#deletebutton', handleDeleteRestroomClick);

  function handleDeleteRestroomClick(e) {
    var restroomId = $(this).parents('.row-restroom').data('restid');
    $.ajax({
      url: '/api/restroom/' + restroomId,
      method: 'DELETE',
      success: handleDeleteRestroomSuccess
    });
  };

  function handleDeleteRestroomSuccess(json) {
    var deletedRestroomId = json._id;
    $('div[data-restid=' + deletedRestroomId + ']').remove();
  };

 // Function for displaying filtered by Neighborhoods
  function renderFilteredRestrooms(filter) {
    // Clear page of results
    $('#restrooms').empty();
    allMyRestrooms.forEach(function(restroom) {
    if(restroom.neighborhood === filter){
      renderBathroom(restroom);
    }   
    });
  };

  function renderBathroom(json) {
    console.log('populating bathrooms', json);

    var bathroomAppend = (`
      <div class="container">
        <div class="row-restroom" data-restid="${json._id}">            
          <div class="small card blue lighten-5">
            <div class="card-image waves-effect waves-block waves-light">
            </div>
            <div class="card-content">
              <span id="locationName" class="card-title activator grey-text text-darken-4"><i class="small material-icons prefix" id="storeicon">store</i> ${json.locationName}<i class="material-icons right">more_vert</i></span>
              <p id="location"><i class="tiny material-icons prefix">location_on</i> ${json.location}</p>
              <p id="cleanliness"><i class="tiny material-icons prefix">loyalty</i> ${json.cleanliness}</p>
            </div>
            <div class="card-reveal yellow lighten-4">
              <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
              <i class="tiny material-icons prefix">business</i><p class="neighborhood"> ${json.neighborhood}</p>
              <i class="tiny material-icons prefix">info</i><p class="type"> ${json.type}</p>
              <i class="tiny material-icons prefix">stars</i><p class="review"> ${json.review}</p>
              <a id="updatebutton" name="updatebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">mode_edit</i>update</a>  
              <a id="deletebutton" name="deletebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">delete</i>Delete</a>
              <a id="savebutton" name="savebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">play_for_work</i>Save</a>
            </div>
          </div>
        </div>
      </div>
    `); 
      
    $('#restrooms').prepend(bathroomAppend);
  }

// MODEL #2 : REVIEW
  $('#comment-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/review', formData);
    $(this).trigger("reset");
  });

});