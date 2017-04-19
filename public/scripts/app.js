// CLIENT-SIDE JS
console.log('app.js loaded!');
var $restroomList;


$(document).ready(function() {
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
