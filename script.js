window.onload = function() {
  
  $(document).ready(function() {
  
  
  $('li').on('click', function() {
  $('.full-table ul li.active').removeClass('active');
  $(this).addClass('active');
  
  var panelClass = $(this).attr('rel');
  
  $('.full-table .panel.active').fadeOut(300, showPanel);

  function showPanel() {
    $(this).removeClass('active');
    $("." + panelClass).fadeIn(300, function() {
      $(this).addClass('active');
    });
  }
});
  
});
  
}