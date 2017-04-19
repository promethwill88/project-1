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
  	success: handleSuccess,
  	error: handleError
  });

function handleSuccess(json) {
	console.log('success!!!!')

}

function handleError(e) {
	console.log('error!!!!');
	$('.list').text('failed to load restrooms');
}



function renderBathroom(json) {
  console.log('populating bathrooms', json);

  var bathrooomAppend = (`
        <div class="row-restroom" data-restroom-id="{restroom._id}">
        
        <div class="col m1">
          
          <ul class="list-group">
            
            <li class="list-group-item">
              <h5 class="inline-header">Name</h5>
              <span class="restroom-name">${restroom.locationName}</span>
            </li>

            <li class="list-group-item">
              <h5 class="inline-header">Location</h5>
              <span class="restroom-location">${restroom.location}</span>
            </li>

            <li class="list-group-item">
              <h5 class="inline-header">Type</h5>
              <span class="restroom-location">${restroom.type}</span>
            </li>

            <li class="list-group-item">
              <h5 class="inline-header">Cleanliness</h5>
              <span class="restroom-location">${restroom.cleanliness}</span>
            </li>

            <li class="list-group-item">
              <h5 class="inline-header">Neighborhood</h5>
              <span class="restroom-location">${restroom.neighborhood}</span>
            </li>
          
          </ul>
        
        </div>
     
      </div>
    </div>

  `); 

  $('#restrooms').prepend(bathroomAppend);

}








});

