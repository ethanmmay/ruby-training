
function fun() {
  var theClass = document.getElementById("theClass").value;
  var teacherName = document.getElementById("teacherName").value;
  var topic = document.getElementById("topic").value;
  var secret = document.getElementById("secret").value;
  var res = document.getElementById("res");

  if (theClass == "Math" && teacherName == "Rois" && topic == "Quadratics" && secret == "473829") {
    location.replace("mathRoisSine473829");
  }

  else if (theClass == "English" && teacherName == "Rois" && topic == "Grammar" && secret == "473829") {
    location.replace("englishRoisSine473829");
  }

  else if (theClass != "Math" || theClass!= "English") {
    res.style.display = "block";
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "I don't recognize that class";
  }

  else if (teacherName != "Rois") {
    res.style.display = "block";
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "I don't recognize that teacher";
  }

  else if (topic != "Quadratics" || topic != "Grammar") {
    res.style.display = "block";
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "I don't recognize that topic";
  }

  else if (secret != "473829") {
    res.style.display = "block";
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "I don't recognize that class code";
  }
}

var check1 = false;
var check2 = false;

function rootSolve1() {
  if(root1 == 'x + 3' || root1 == 'x+ 3' || root1 == 'x +3' || root1 == 'x+3' || root1 == 'x-2' || root1 == 'x -2' || root1 == 'x- 2' || root1 == 'x - 2' ) {
    if(root2 != root1) {
      check1 = true;
    }
  }
  else {
    res3.style.display = "block";
    res3.style.backgroundColor = "red";
    res3.style.color = "white";
    res3.innerHTML = "Sorry, you got the first root wrong!";
  }
  if(root2 == 'x + 3' || root2 == 'x+ 3' || root2 == 'x +3' || root2 == 'x+3' || root2 == 'x-2' || root2 == 'x -2' || root2 == 'x- 2' || root2 == 'x - 2' ) {
    if(root1 != root2) {
      check2 = true;
    }
    else {
      res2.style.display = "block";
      res2.style.backgroundColor = "red";
      res2.style.color = "white";
      res2.innerHTML = "Sorry, you got the second root wrong!";
    }
  }
}

function quadMove() {
  location.replace("../../../../../cameronr/projects/javascriptforms/quadraticformula/quadraticGuide.html")
}
function graphMove() {
  location.replace("../../../../../cameronr/projects/javascriptforms/graphing/graphingGuide.html")
}
function factMove() {
  location.replace("../../../../../cameronr/projects/javascriptforms/factoring/factoring.html")
}
function compMove() {
  location.replace("../../../../../cameronr/projects/javascriptforms/completing/completing.html")
}
