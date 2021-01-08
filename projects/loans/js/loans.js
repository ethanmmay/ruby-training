console.log("Entered loans.js");

function icalc() {
    var principal = document.getElementById("principal").value;
    var interest = document.getElementById("interest").value;
    var years = document.getElementById("years").value;
    var downpay = document.getElementById("downpay").value;
    var tax = document.getElementById("tax").value;
    console.log("The principal is $" + principal);
    console.log("The interest is " + interest + "%");
    console.log("The amount of years is " + years);
    console.log("The downpayment is $" + downpay);
    console.log("The sales tax is " + tax + "%");
    var principal = (principal - downpay);
    var interest = (interest/100);
    var interest = (interest/12);
    var interest = (interest + 1);
    var months = (years * 12)
    var interest = Math.pow(interest, months);
    var answer = (interest * principal);
    var answer = answer.toFixed(2);
    console.log("The New Amount is $" + answer);
    var months = (years * 12);
    var answer = (answer/months);
    var answer = answer.toFixed(2);
    console.log("The Monthly Payment before tax is $" + answer);
    var tax = (tax/100);
    var tax = (tax + 1);
    var answer = (answer * tax);
    var answer = answer.toFixed(2);
    console.log("The Monthly Payment after tax is $" + answer);
    document.getElementById("displayanswer").innerHTML = "Monthly Payment: $" + answer;
    console.log("Exited loans.js");
}

function mtoy() {
    var months = document.getElementById("months").value;
    console.log("The # of months is " + months);
    var ratio = (months/12);
    var ratio = ratio.toFixed(4);
    document.getElementById("displayratio").innerHTML = "Years: " + ratio;
}