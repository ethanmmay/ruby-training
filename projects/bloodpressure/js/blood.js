var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
Albertsons = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
IdaCorp = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
glucose = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
pulseox = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
being = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']


function GRAPH() {
 var A1 = parseInt(document.getElementById("A1").value);
 var A2 = parseInt(document.getElementById("A2").value);
 var A3 = parseInt(document.getElementById("A3").value);
 var A4 = parseInt(document.getElementById("A4").value);
 var A5 = parseInt(document.getElementById("A5").value);
 var A6 = parseInt(document.getElementById("A6").value);
 var A7 = parseInt(document.getElementById("A7").value);
 var A8 = parseInt(document.getElementById("A8").value);
 var A9 = parseInt(document.getElementById("A9").value);
 var A10 = parseInt(document.getElementById("A10").value);
 var A11 = parseInt(document.getElementById("A11").value);
 var A12 = parseInt(document.getElementById("A12").value);
 var A13 = parseInt(document.getElementById("A13").value);
 var A14 = parseInt(document.getElementById("A14").value);
 var A15 = parseInt(document.getElementById("A15").value);
 var A16 = parseInt(document.getElementById("A16").value);
 var A17 = parseInt(document.getElementById("A17").value);
 var A18 = parseInt(document.getElementById("A18").value);
 var A19 = parseInt(document.getElementById("A19").value);
 var A20 = parseInt(document.getElementById("A20").value);
 var A21 = parseInt(document.getElementById("A21").value);
 var A22 = parseInt(document.getElementById("A22").value);
 var A23 = parseInt(document.getElementById("A23").value);
 var A24 = parseInt(document.getElementById("A24").value);
 var A25 = parseInt(document.getElementById("A25").value);
 var A26 = parseInt(document.getElementById("A26").value);
 var A27 = parseInt(document.getElementById("A27").value);
 var A28 = parseInt(document.getElementById("A28").value);
 var A29 = parseInt(document.getElementById("A29").value);
 var A30 = parseInt(document.getElementById("A30").value);
 var A31 = parseInt(document.getElementById("A31").value);

 var I1 = parseInt(document.getElementById("I1").value);
 var I2 = parseInt(document.getElementById("I2").value);
 var I3 = parseInt(document.getElementById("I3").value);
 var I4 = parseInt(document.getElementById("I4").value);
 var I5 = parseInt(document.getElementById("I5").value);
 var I6 = parseInt(document.getElementById("I6").value);
 var I7 = parseInt(document.getElementById("I7").value);
 var I8 = parseInt(document.getElementById("I8").value);
 var I9 = parseInt(document.getElementById("I9").value);
 var I10 = parseInt(document.getElementById("I10").value);
 var I11 = parseInt(document.getElementById("I11").value);
 var I12 = parseInt(document.getElementById("I12").value);
 var I13 = parseInt(document.getElementById("I13").value);
 var I14 = parseInt(document.getElementById("I14").value);
 var I15 = parseInt(document.getElementById("I15").value);
 var I16 = parseInt(document.getElementById("I16").value);
 var I17 = parseInt(document.getElementById("I17").value);
 var I18 = parseInt(document.getElementById("I18").value);
 var I19 = parseInt(document.getElementById("I19").value);
 var I20 = parseInt(document.getElementById("I20").value);
 var I21 = parseInt(document.getElementById("I21").value);
 var I22 = parseInt(document.getElementById("I22").value);
 var I23 = parseInt(document.getElementById("I23").value);
 var I24 = parseInt(document.getElementById("I24").value);
 var I25 = parseInt(document.getElementById("I25").value);
 var I26 = parseInt(document.getElementById("I26").value);
 var I27 = parseInt(document.getElementById("I27").value);
 var I28 = parseInt(document.getElementById("I28").value);
 var I29 = parseInt(document.getElementById("I29").value);
 var I30 = parseInt(document.getElementById("I30").value);
 var I31 = parseInt(document.getElementById("I31").value);

 var G1 = parseInt(document.getElementById("G1").value);
 var G2 = parseInt(document.getElementById("G2").value);
 var G3 = parseInt(document.getElementById("G3").value);
 var G4 = parseInt(document.getElementById("G4").value);
 var G5 = parseInt(document.getElementById("G5").value);
 var G6 = parseInt(document.getElementById("G6").value);
 var G7 = parseInt(document.getElementById("G7").value);
 var G8 = parseInt(document.getElementById("G8").value);
 var G9 = parseInt(document.getElementById("G9").value);
 var G10 = parseInt(document.getElementById("G10").value);
 var G11 = parseInt(document.getElementById("G11").value);
 var G12 = parseInt(document.getElementById("G12").value);
 var G13 = parseInt(document.getElementById("G13").value);
 var G14 = parseInt(document.getElementById("G14").value);
 var G15 = parseInt(document.getElementById("G15").value);
 var G16 = parseInt(document.getElementById("G16").value);
 var G17 = parseInt(document.getElementById("G17").value);
 var G18 = parseInt(document.getElementById("G18").value);
 var G19 = parseInt(document.getElementById("G19").value);
 var G20 = parseInt(document.getElementById("G20").value);
 var G21 = parseInt(document.getElementById("G21").value);
 var G22 = parseInt(document.getElementById("G22").value);
 var G23 = parseInt(document.getElementById("G23").value);
 var G24 = parseInt(document.getElementById("G24").value);
 var G25 = parseInt(document.getElementById("G25").value);
 var G26 = parseInt(document.getElementById("G26").value);
 var G27 = parseInt(document.getElementById("G27").value);
 var G28 = parseInt(document.getElementById("G28").value);
 var G29 = parseInt(document.getElementById("G29").value);
 var G30 = parseInt(document.getElementById("G30").value);
 var G31 = parseInt(document.getElementById("G31").value);

 var P1 = parseInt(document.getElementById("P1").value);
 var P2 = parseInt(document.getElementById("P2").value);
 var P3 = parseInt(document.getElementById("P3").value);
 var P4 = parseInt(document.getElementById("P4").value);
 var P5 = parseInt(document.getElementById("P5").value);
 var P6 = parseInt(document.getElementById("P6").value);
 var P7 = parseInt(document.getElementById("P7").value);
 var P8 = parseInt(document.getElementById("P8").value);
 var P9 = parseInt(document.getElementById("P9").value);
 var P10 = parseInt(document.getElementById("P10").value);
 var P11 = parseInt(document.getElementById("P11").value);
 var P12 = parseInt(document.getElementById("P12").value);
 var P13 = parseInt(document.getElementById("P13").value);
 var P14 = parseInt(document.getElementById("P14").value);
 var P15 = parseInt(document.getElementById("P15").value);
 var P16 = parseInt(document.getElementById("P16").value);
 var P17 = parseInt(document.getElementById("P17").value);
 var P18 = parseInt(document.getElementById("P18").value);
 var P19 = parseInt(document.getElementById("P19").value);
 var P20 = parseInt(document.getElementById("P20").value);
 var P21 = parseInt(document.getElementById("P21").value);
 var P22 = parseInt(document.getElementById("P22").value);
 var P23 = parseInt(document.getElementById("P23").value);
 var P24 = parseInt(document.getElementById("P24").value);
 var P25 = parseInt(document.getElementById("P25").value);
 var P26 = parseInt(document.getElementById("P26").value);
 var P27 = parseInt(document.getElementById("P27").value);
 var P28 = parseInt(document.getElementById("P28").value);
 var P29 = parseInt(document.getElementById("P29").value);
 var P30 = parseInt(document.getElementById("P30").value);
 var P31 = parseInt(document.getElementById("P31").value);

 var B1 = parseInt(document.getElementById("B1").value);
 var B2 = parseInt(document.getElementById("B2").value);
 var B3 = parseInt(document.getElementById("B3").value);
 var B4 = parseInt(document.getElementById("B4").value);
 var B5 = parseInt(document.getElementById("B5").value);
 var B6 = parseInt(document.getElementById("B6").value);
 var B7 = parseInt(document.getElementById("B7").value);
 var B8 = parseInt(document.getElementById("B8").value);
 var B9 = parseInt(document.getElementById("B9").value);
 var B10 = parseInt(document.getElementById("B10").value);
 var B11 = parseInt(document.getElementById("B11").value);
 var B12 = parseInt(document.getElementById("B12").value);
 var B13 = parseInt(document.getElementById("B13").value);
 var B14 = parseInt(document.getElementById("B14").value);
 var B15 = parseInt(document.getElementById("B15").value);
 var B16 = parseInt(document.getElementById("B16").value);
 var B17 = parseInt(document.getElementById("B17").value);
 var B18 = parseInt(document.getElementById("B18").value);
 var B19 = parseInt(document.getElementById("B19").value);
 var B20 = parseInt(document.getElementById("B20").value);
 var B21 = parseInt(document.getElementById("B21").value);
 var B22 = parseInt(document.getElementById("B22").value);
 var B23 = parseInt(document.getElementById("B23").value);
 var B24 = parseInt(document.getElementById("B24").value);
 var B25 = parseInt(document.getElementById("B25").value);
 var B26 = parseInt(document.getElementById("B26").value);
 var B27 = parseInt(document.getElementById("B27").value);
 var B28 = parseInt(document.getElementById("B28").value);
 var B29 = parseInt(document.getElementById("B29").value);
 var B30 = parseInt(document.getElementById("B30").value);
 var B31 = parseInt(document.getElementById("B31").value);

 Albertsons.splice(0,31,A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15,A16,A17,A18,A19,A20,A21,A22,A23,A24,A25,A26,A27,A28,A29,A30,A31);

 IdaCorp.splice(0,31,I1,I2,I3,I4,I5,I6,I7,I8,I9,I10,I11,I12,I13,I14,I15,I16,I17,I18,I19,I20,I21,I22,I23,I24,I25,I26,I27,I28,I29,I30,I31);

 glucose.splice(0,31,G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11,G12,G13,G14,G15,G16,G17,G18,G19,G20,G21,G22,G23,G24,G25,G26,G27,G28,G29,G30,G31);

 pulseox.splice(0,31,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31);

 being.splice(0,31,B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16,B17,B18,B19,B20,B21,B22,B23,B24,B25,B26,B27,B28,B29,B30,B31);

 context.setTransform(1,0,0,1,0,0);
 context.clearRect(0,0,canvas.width,canvas.height);
 init()
}

function init() {
 // set these values for your data
 sections = 31;
 Val_max = 220;
 Val_min = 0;
 var stepSize = 10;
 var columnSize = 50;
 var rowSize = 50;
 var margin = 10;
 var xAxis = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
 canvas = document.getElementById("canvas");
 context = canvas.getContext("2d");
 context.fillStyle = "#f00" //axis name color
 context.font = "30pt Verdana"

 yScale = 540 / 220;
 xScale = 1550 / 31;

 context.strokeStyle = "#205099"; // color of grid lines
 context.beginPath();
 // print Parameters on X axis, and grid lines on the graph
 for (i = 1; i <= sections; i++) {
 var x = i * xScale;
 context.fillText(xAxis[i], x, columnSize - margin);
 context.moveTo(x, columnSize);
 context.lineTo(x, 600 - margin);
 }
 context.font = "20pt Verdana"
 // print row header and draw horizontal grid lines
 var count = 0;
 for (scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
 var y = columnSize + (yScale * count * stepSize);
 context.fillText(scale, margin, y + margin);
 context.moveTo(rowSize, y)
 context.lineTo(1600, y)
 count++;
 }
 context.stroke();
 context.translate(rowSize, 600 + Val_min * yScale);
 context.scale(1, -1 * yScale);
 // Color of each dataplot items
 context.strokeStyle = "#FF0066";
 plotData(Albertsons);
 context.strokeStyle = "#9933FF";
 plotData(IdaCorp);
 context.strokeStyle = "ffaa00";
 plotData(glucose);
 context.strokeStyle = "#00ffaa";
 plotData(pulseox);
 context.strokeStyle = "#aaff00";
 plotData(being);
}

function plotData(dataSet) {
 context.beginPath();
 context.moveTo(0, dataSet[0]);
 for (i = 1; i < sections; i++) {
 context.lineTo(i * xScale, dataSet[i]);
 }
 context.stroke();
}