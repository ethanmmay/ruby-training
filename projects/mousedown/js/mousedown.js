$(document).ready(function() {
  $('#mouseDown').mousedown(function(event) {
    switch (event.which) {
      case 1:
        alert('Left Mouse button was pressed.');
      break;
      case 2:
        alert('Middle Mouse button was pressed.');
      break;
      case 3:
        alert('Right Mouse button was pressed.');
      break;
      default:
        alert('what!');
    }
  });
  $('.myClass').mousedown(function(event) {
    switch (event.which) {
      case 1:
        /*alert('Left mouse button has been pressed');*/
        $(this).addClass('bbCell');
      break;
      case 2:
        /*alert('Middle mouse button has been pressed');*/
        $(this).addClass('ppCell');
      break;
      case 3:
        /*alert('Right mouse button has been pressed');*/
        $(this).removeClass('bbCell');
        $(this).removeClass('ppCell');
      break;
      default:
        alert('what the bug');
    }
  });
});
