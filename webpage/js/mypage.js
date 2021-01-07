function dclock() {
  // Pulling from a Built-in library for Dates
  var mydate = new Date();
  // Apparent glitch in js Date that subtracts 1900 from the year
  // Remove later if year is 1900 years off
  var year = mydate.getYear();
  if(year < 1000) {year += 1900}
  var month = mydate.getMonth();
  var day = mydate.getDay();
  // Date is the number 0-31 in months
  var date = mydate.getDate();
  var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  // Pulling from a Built-in library for Time
  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  // Adding 0's to single digits for OCD
  if (h < 10){h = "0" + h;}
  if (m < 10){m = "0" + m;}
  if (s < 10){s = "0" + s;}
  // Adding Greeting based off Time Of Day
  var greetings = new Array("Good Morning!", "Good Afternoon!", "Good Evening!", "Good Night!");
  greeting = greetings[0];
  if (h >= 12 && h < 17) {greeting = greetings[1];}
  else if (h >= 17 && h < 20) {greeting = greetings[2];}
  else if (h >= 20 && h <= 24) {greeting = greetings[3];}
  // Adding Class Periods - Probglem with Minutes lapsing
  // Created Double Date Variable to fix Minutes problem
  dd = h + '' + m;
  console.log(dd);
  var periods = new Array("Period 1", " Period 2", "Lunch", "Period 3", " Period 4", "School's Out!", "What?!");
  if (dd >= 0745 && dd < 0915) {period = periods[0];}
  else if (dd >= 0915 && dd < 1052) {period = periods[1];}
  else if (dd >= 1052 && dd < 1132) {period = periods[2];}
  else if (dd >= 1132 && dd < 1307) {period = periods[3];}
  else if (dd >= 1307 && dd < 1442) {period = periods[4];}
  else if (dd >= 1442) {period = periods[5];}
  else {period = periods[6];}
  // Adding Suffix to number (dependent)
  var suffixs = new Array("st", "nd", "rd", "th");
  if (date == 1 || date == 21 || date == 31) {suffix = suffixs[0];}
  else if (date == 2 || date == 22) {suffix = suffixs[1];}
  else if (date == 3 || date == 23) {suffix = suffixs[2];}
  else { suffix = suffixs[3];}
  // Resetting to 0 hours at 24 hours
  if (h == 24){h = 0;} 
  else if (h > 12) {h -= 12}
  // Inserting Final Result into HTML
  var clock = document.getElementById("clockDisplay");
  clock.textContent = greeting + " It's " + dayarray[day] + " \n" + montharray[month] + " " + date + suffix + ", " + year + " | " + h + ":" + m + ":" + s + " " + "| " + period;
  clock.innerText = greeting + " It's " + dayarray[day] + " \n" + montharray[month] + " " + date + suffix + ", " + year + " | " + h + ":" + m + ":" + s + " " + "| " + period;
  // Repeating pullDate() every 1 second
  setTimeout("dclock()", 1000);
}


$(document).ready(function() {

  $("#about").hide();

  $("#name").hover(function() {
    /* $("p").toggle(); */
    $("#about").slideToggle(200);

  });



  $("#changetext").mouseenter(function() {
    $("#changetext").addClass("textchange");
  });

  $("#changetext").mouseleave(function() {
    $("#changetext").removeClass("textchange");
  });

});


