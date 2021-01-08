$(document).ready(function() {

  $('#about').hide();

  $('#name').click(function() {
    /* $('p').toggle(); */
    $('#about').slideToggle(400);

  });



  $("#changetext").mouseenter(function() {
    $("#changetext").css("background-color", "yellow");
  });

  $("#changetext").mouseleave(function() {
    $("#changetext").css("background-color", "gray");
  });

});
