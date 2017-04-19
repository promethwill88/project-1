// CLIENT-SIDE JS
console.log('app.js loaded!');




var $restroomList;


$(document).ready(function() {
  $('input.autocomplete').autocomplete({
    data: {
      'Financial District': null,
      'Japantown': null,
      'Nob Hill': null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });


  $restroomList = $('.list');
  $.ajax({
  	method: 'GET',
  	url: '/api/restrooms',
  	success: handleSuccess,
  	error: handleError
  });

});



function handleSuccess(json) {
	console.log('success!!!!')

}

function handleError(e) {
	console.log('error!!!!');
	$('.list').text('failed to load restrooms');
}
