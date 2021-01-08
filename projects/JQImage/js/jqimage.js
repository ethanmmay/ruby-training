$(document).ready(function() {

  $("#changeImage").mouseenter(function() {
    $("#changeImage").addClass("changes");
  });

  $("#changetext").mouseleave(function() {
    $("#changetext").removeClass("changes");
  });

});
