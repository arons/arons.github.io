$(function () {
	
  const queryString = window.location.search;

  //console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const page = urlParams.get('page')
  //console.log(page);

  var views = $('[data-view]')
  $.each(views, function () {
    $(this).load(page)
  })

})