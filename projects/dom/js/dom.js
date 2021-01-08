function dclock() {
    // Pulling from a Built-in library for Dates
    var mydate = new Date();
    // Apparent glitch in js Date that subtracts 1900 from the year
    // Remove later if year is 1900 years off
    var year = mydate.getYear();
    if(year < 1000){year +=1900}
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
    // Resetting to 0 hours at 24 hours
    var current = 2;
    if (h == 24){h = 0;} 
    else if (h > 12) {h -= 12; current -=1;}
    else if (h <= 12) {current -=2;}
    // Adding Greeting based off Time Of Day
    var greetings = new Array("Good Morning!", "Good Afternoon!", "Good Evening!", "Good Night!");
    if (current == 0) {greeting = greetings[0];}
    else if (current == 1 && h < 5) {greeting = greetings[1];}
    else if (current == 1 && h >= 5 && h < 8) {greeting = greetings[2];}
    else if (current == 1 && h >= 8) {greeting = greetings[3];}
    // Adding 0's to single digits for OCD
    if (h < 10){h = "0" + h;}
    if (m < 10){m = "0" + m;}
    if (s < 10){s = "0" + s;}
    // Adding Suffix to number (dependent)
    var suffixs = new Array("st", "nd", "rd", "th");
    if (date == 1 || date == 21 || date == 31) {suffix = suffixs[0];}
    else if (date == 2 || date == 22) {suffix = suffixs[1];}
    else if (date == 3 || date == 23) {suffix = suffixs[2];}
    else { suffix = suffixs[3];}
    // Inserting Final Result into HTML
    var clock = document.getElementById("clockDisplay");
    clock.textContent = greeting + " It is " + dayarray[day] + " " + montharray[month] + " " + date + suffix + ", " + year + " | " + h + ":" + m + ":" + s;
    clock.innerText = greeting + " It is " + dayarray[day] + " " + montharray[month] + " " + date + suffix + ", " + year + " | " + h + ":" + m + ":" + s;
    // Repeating pullDate() every 1 second
    setTimeout("dclock()", 1000);
}
