
function fun() {
  var theClass = document.getElementById("theClass").value;
  var teacherName = document.getElementById("teacherName").value;
  var topic = document.getElementById("topic").value;
  var secret = document.getElementById("secret").value;
  var res = document.getElementById("res");

  if (theClass == "Math" && teacherName == "Rois" && topic == "Quadratics" && secret == "473829") {
    location.replace("mathRoisSine473829");
  }

  else if (theClass != "Math") {
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

  else if (topic != "Quadratics") {
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

var check1;
var check2;

function rootSolve() {
  var root1 = document.getElementById("root1").value;
  var root2 = document.getElementById("root2").value;
  if(root2 != root1) {
    if(root1 == 'x + 3' || root1 == 'x+ 3' || root1 == 'x +3' || root1 == 'x+3' || root1 == 'x-2' || root1 == 'x -2' || root1 == 'x- 2' || root1 == 'x - 2') {
      if(check2) {
        location.replace("correct");
      }
      check1 = true;
    }
    else {
      res2.style.display = "block";
      res2.style.backgroundColor = "red";
      res2.style.color = "white";
      res2.innerHTML = "Sorry, you got the first root wrong!";
    }
    if(root2 == 'x + 3' || root2 == 'x+ 3' || root2 == 'x +3' || root2 == 'x+3' || root2 == 'x-2' || root2 == 'x -2' || root2 == 'x- 2' || root2 == 'x - 2') {
      if(check1) {
        location.replace("correct");
      }
      check2 = true;
    }
    else {
      res3.style.display = "block";
      res3.style.backgroundColor = "red";
      res3.style.color = "white";
      res3.innerHTML = "Sorry, you got the second root wrong!";
    }
  }
  else {
    res3.style.display = "block";
    res3.style.backgroundColor = "red";
    res3.style.color = "white";
    res3.innerHTML = "HINT: They are not the same!";
  }
}
