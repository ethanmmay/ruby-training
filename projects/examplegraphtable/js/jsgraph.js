var canvas;
        var context;
        var Val_max;
        var Val_min;
        var sections;
        var xScale;
        var yScale;
        // Values for the Data Plot, they can also be obtained from an external file
        var LeagueWorlds = [1.7, 8.2, 32, 27, 34, 43, 60, 200];
        var SuperBowl = [162.9, 111.3, 111, 106, 114.4, 111, 113.3, 103.4];
        var NBAFinals = [17.5, 16.5, 17.75, 15.75, 20, 20.1, 20.2, 17.75];

        function init() {
            // set these values for your data 
            sections = 8;
            Val_max = 200;
            Val_min = 0;
            var stepSize = 10;
            var columnSize = 50;
            var rowSize = 50;
            var margin = 10;
            var xAxis = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");
            context.fillStyle = "#000000";
            context.font = "20pt Indie Flower" // font family of labels
            yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
            xScale = (canvas.width - rowSize) / sections;
            context.strokeStyle = "#000000"; // color of grid lines
            context.beginPath();
            // print Parameters on X axis, and grid lines on the graph
            for (i = 1; i <= sections; i++) {
                var x = i * xScale + 50;
                context.fillText(xAxis[i], x, columnSize - margin);
                context.moveTo(x, columnSize);
                context.lineTo(x, canvas.height - margin);
            }
            // print row header and draw horizontal grid lines
            var count = 0;
            for (scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
                var y = columnSize + (yScale * count * stepSize);
                context.fillText(scale, margin, y + margin);
                context.moveTo(rowSize, y)
                context.lineTo(canvas.width, y)
                count++;
            }
            context.stroke();
            context.translate(rowSize, canvas.height + Val_min * yScale);
            context.scale(1, -1 * yScale);
            // Color of each dataplot items
            context.strokeStyle = "#ff3a5b";
            plotData(LeagueWorlds);
            context.strokeStyle = "#ffd06d";
            plotData(SuperBowl);
            context.strokeStyle = "#82e5e2";
            plotData(NBAFinals);
        }

        function plotData(dataSet) {
            context.beginPath();
            context.moveTo(0, dataSet[0]);
            for (i = 1; i < sections; i++) {
                context.lineTo(i * xScale, dataSet[i]);
            }
            context.stroke();
        }


        function update() {
            console.log("Hooray! My button click has taken me to the update function!");
            var event = document.querySelector("#event").value;
            console.log("I read the company as: ", event);
            var year = document.querySelector("#year").value;
            console.log("I read the month as: ", year);
            var input = parseFloat(document.querySelector("#input").value);
            console.log("I read the profit as: ", input);

        var yearIndex;
        if (year === "2011") {
            yearIndex = 0;
        } else if (year === "2012") {
            yearIndex = 1;
        } else if (year === "2013") {
            yearIndex = 2;
        } else if (year === "2014") {
            yearIndex = 3;
        } else if (year === "2015") {
            yearIndex = 4;
        } else if (year === "2016") {
            yearIndex = 5;
        } else if (year === "2017") {
            yearIndex = 6;
        } else if (year === "2018") {
            yearIndex = 7;
        } else {
            console.log("Something went wrong in my year conditional!");
        }
        console.log("year Index: ", yearIndex);


        if (event === "LeagueWorlds") {
            LeagueWorlds[yearIndex] = input;
            context.strokeStyle = "#ff3a5b";
            plotData(LeagueWorlds);
        } else if (event === "SuperBowl") {
            SuperBowl[yearIndex] = input;
            context.strokeStyle = "#ffd06d";
            plotData(SuperBowl);
        } else if (event === "NBAFinals") {
            NBAFinals[yearIndex] = input;
            context.strokeStyle = "#82e5e2";
            plotData(NBAFinals);
        } else {
            console.log("Something went wrong with event update");
        }
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        init();
    }

        function updateTable() {
            console.log("Yeehaw im in UpdateTable!");

            LeagueWorlds[0] = parseInt(document.getElementById("worlds1").value);
            LeagueWorlds[1] = parseInt(document.getElementById("worlds2").value);
            LeagueWorlds[2] = parseInt(document.getElementById("worlds3").value);
            LeagueWorlds[3] = parseInt(document.getElementById("worlds4").value);
            LeagueWorlds[4] = parseInt(document.getElementById("worlds5").value);
            LeagueWorlds[5] = parseInt(document.getElementById("worlds6").value);
            LeagueWorlds[6] = parseInt(document.getElementById("worlds7").value);
            LeagueWorlds[7] = parseInt(document.getElementById("worlds8").value);

            SuperBowl[0] = parseInt(document.getElementById("super1").value);
            SuperBowl[1] = parseInt(document.getElementById("super2").value);
            SuperBowl[2] = parseInt(document.getElementById("super3").value);
            SuperBowl[3] = parseInt(document.getElementById("super4").value);
            SuperBowl[4] = parseInt(document.getElementById("super5").value);
            SuperBowl[5] = parseInt(document.getElementById("super6").value);
            SuperBowl[6] = parseInt(document.getElementById("super7").value);
            SuperBowl[7] = parseInt(document.getElementById("super8").value);

            NBAFinals[0] = parseInt(document.getElementById("nba1").value);
            NBAFinals[1] = parseInt(document.getElementById("nba2").value);
            NBAFinals[2] = parseInt(document.getElementById("nba3").value);
            NBAFinals[3] = parseInt(document.getElementById("nba4").value);
            NBAFinals[4] = parseInt(document.getElementById("nba5").value);
            NBAFinals[5] = parseInt(document.getElementById("nba6").value);
            NBAFinals[6] = parseInt(document.getElementById("nba7").value);
            NBAFinals[7] = parseInt(document.getElementById("nba8").value);
            
            console.log("Boop de doop");
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
            init();
    }