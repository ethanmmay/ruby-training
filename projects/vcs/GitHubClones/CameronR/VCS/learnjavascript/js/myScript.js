function myFunction() {
   document.getElementById("extJavaScript").innerHTML = "Paragraph changed.";
}


var canvas = document.getElementById("Frosty");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.arc(600,900,300,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(600,600,200,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(600,300,100,0,2*Math.PI);
ctx.fill();
