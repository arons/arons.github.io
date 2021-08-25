$(function () {
  var includes = $('[data-include_in]')
  $.each(includes, function () {
    var file = $(this).data('include_in')
    $(this).load(file)
  })
})

