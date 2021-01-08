var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
var y;
// Values for the Data Plot
var itemName = ["Madagascar", "Congo", "Burundi", "Malawi", "Mozambique", "Liberia", "Niger", "Eritrea", "Guinea", "Yemen", "Togo", "Mali", "Kiribati", "Ethiopia", "Comoros"];
var itemValue = [1.477, 0.753, 0.951, 0.819, 1.208, 0.934, 1.069, 1.210, 1.388, 1.3, 1.525, 1.614, 1.640, 1.656, 1.735];
// Main Function init()
function init() {
    console.log("yahoo");
    sections = 15;
    Val_max = 3;
    var stepSize = 1;
    var columnSize = 30;
    var rowSize = 10;
    var margin = 10;
    var header = "COUNTRY PPP IN BILLIONS"

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "#5050ff;"

    // Defining Scales for future Use
    yScale = (canvas.height - columnSize - margin) / (Val_max);
    xScale = (canvas.width - rowSize) / (sections + 1);

    context.strokeStyle = "#5050ff;";
    context.beginPath();

    context.font = "19 pt Mukta";
    context.fillText(header, 0, columnSize - margin);
    context.font = "16 pt Mukta";

    var count = 0;
    for (scale = Val_max; scale >= 0; scale = scale - stepSize) { // Drawing the y-grid
        y = columnSize + (yScale * count * stepSize);
        context.fillText(scale, margin, y + margin);
        context.moveTo(rowSize, y)
        context.lineTo(canvas.width, y)
        count++;
    }
    console.log("stroke beginning");
    context.stroke();

    context.font = "20 pt Mukta";
    context.textBaseline = "bottom";
    for (i = 0; i < 15; i++) {
        computeHeight(itemValue[i]);
        context.fillText(itemName[i], xScale * (i + 1), y - margin);
    }

    context.fillStyle = "#5050ff";
    context.shadowColor = "#5050ff80";

    context.shadowOffsetX = 9;
    context.shadowOffsetY = 3;

    context.translate(0, canvas.height - margin);
    context.scale(xScale, -1 * yScale);
    for (i = 0; i < 15; i++) {
        context.fillRect(i + 1, 0, 0.3, itemValue[i]);
    }
}


    function computeHeight(value) {
        y = canvas.height - value * yScale;
    }

    function update() {
        console.log("yeehaw");
        var country = document.getElementById("country").value;
        var a = itemName.indexOf(country);
        console.log("a is" + a);
        var ppp = document.getElementById("ppp").value;
        itemValue[a] = ppp;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.setTransform(1,0,0,1,0,0);
        context.clearRect(0,0,canvas.width,canvas.height);
        init()
    }