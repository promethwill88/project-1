// CLIENT-SIDE JS
$(document).ready(function() {
  
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

   // catch and handle the click on button
  $('#restrooms').on('click', '#deletebutton', handleDeleteRestroomClick);
  $('#restrooms').on('click', '#updatebutton', handleUpdateRestroomClick);
  $('#restrooms').on('click', '#savebutton', handleSaveRestroomClick);

  function handleUpdateRestroomClick(e) {
    var $restroomRow = $(this).closest('.row-restroom');
    var restroomId = $restroomRow.data('restid');
    console.log(restroomId);
    // var location = $restroomRow.find('p#location').text();
    // $restroomRow.find('p#location').html('<input class="edit-location" value="' + location + '"></input>');
    // var locationName = $restroomRow.find('span#locationName').text();
    // $restroomRow.find('span#locationName').html('<input class="edit-locationName" value="' + locationName + '"></input>');
    // var cleanliness = $restroomRow.find('p#cleanliness').text();
    // $restroomRow.find('p#cleanliness').html('<input class="edit-cleanliness" value="' + cleanliness + '"></input>');
    var neighborhood = $restroomRow.find('p.neighborhood').text();
    $restroomRow.find('p.neighborhood').html('<input class="edit-neighborhood" value="' + neighborhood + '"></input>');
    var type = $restroomRow.find('p.type').text();
    $restroomRow.find('p.type').html('<input class="edit-type" value="' + type + '"></input>');
    var review = $restroomRow.find('p.review').text();
    $restroomRow.find('p.review').html('<input class="edit-review" value="' + review + '"></input>');
  }

  function handleSaveRestroomClick(e) {
    var restroomId = $(this).parents('.row-restroom').data('restid');
    var $restroomRow = $('[data-restid=' + restroomId + ']');
    console.log($restroomRow)
    var data = {
      // cleanliness: $restroomRow.find('.edit-cleanliness').val(),
      // location: $restroomRow.find('.edit-location').val(),
      // locationName: $restroomRow.find('.edit-locationName').val(),
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

  // function reviewUpdatd(e) {
  //   e.preventDefault();
  //   var restroomId = $(this).parents('.row-restroom').data('restid');
  //   var dataToPost = {
  //     comment: $('#rest-review').val()
  //   }
  //   var reviewPostToUrl = '/api/restroom/' + restroomId + '/review';
  //   $.post(reviewPostToUrl, dataToPost, function(data) {
  //     $.get('/api/restroom/' + restroomId + ']').remove();
  //     renderBathroom(data);
  //   });
  // };

  function handleDeleteRestroomClick(e) {
    var restroomId = $(this).parents('.row-restroom').data('restid');
    console.log(restroomId);
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

  function handleError(e) {
  	console.log('error!!!!');
  	$('.list').text('failed to load restrooms');
  };

  // function renderReview(review) {
  //   return `<span>&ndash; ${review.comment} &ndash;</span>`
  // }


  function renderBathroom(json) {
    console.log('populating bathrooms', json);
    // json.reviewHtml = json.reviews;
    var bathroomAppend = (`
      <div class="container">
        <div class="row-restroom" data-restid="${json._id}">            
          <div class="card small">
            <div class="card-image waves-effect waves-block waves-light">
            </div>
            <div class="card-content">
              <span id="locationName" class="card-title activator grey-text text-darken-4"><i class="small material-icons prefix">store</i> ${json.locationName}<i class="material-icons right">more_vert</i></span>
              <p id="location"><i class="tiny material-icons prefix">location_on</i> ${json.location}</p>
              <p id="cleanliness"><i class="tiny material-icons prefix">loyalty</i> ${json.cleanliness}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
              <p class="neighborhood"><i class="tiny material-icons prefix">business</i> ${json.neighborhood}</p>
              <p class="type"><i class="tiny material-icons prefix">info</i> ${json.type}</p>
              <p class="review"><i class="tiny material-icons prefix">stars</i> ${json.review}</p>
    
              <a id="updatebutton" name="updatebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">import_export</i>update</a>  
              <a id="deletebutton" name="deletebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">delete</i>Delete</a>
              <a id="savebutton" name="savebutton" class="btn waves-effect waves-light blue lighten-2"><i class="material-icons left">Save</i>Save</a>
            </div>
          </div>
        </div>
      </div>
      `); 
      $('#restrooms').prepend(bathroomAppend);
  }

});
