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
  var $restroomList;
  $restroomList = $('.list');
  $.ajax({
  	method: 'GET',
  	url: '/api/restrooms',
  	success: renderRestrooms,
  	error: handleError
  });

  $('#singlebutton').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/restroom', formData, function(restroom) {
      renderRestroom(restroom); //render server's response
    });
  //$(this).trigger("reset");
  });

});



function renderMultipleRestrooms(restrooms) {
	restrooms.forEach(function(restroom) {
    renderRestroom(restroom);
  });
}

function renderRestroom(restroom) {
  restroom.

  // front end html
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
