function fun(){
    var theClass = document.getElementById('theClass').value;
    var theTeacher = document.getElementById('theTeacher').value;
    var theUnit = document.getElementById('theUnit').value;
    var theKey = document.getElementById('theKey').value;
    var res = document.getElementById('res');

    res.style.display = 'block';
        if(theClass == '' || theTeacher == '' || theUnit == '' || theKey == '' )
        {
          res.style.backgroundColor = 'red';
          res.style.color = 'white';
          res.innerHTML = 'Please fill in All the Fields';
        }
        else if(theKey.length < 3)
        {
          res.style.backgroundColor = 'red';
          res.style.color = 'white';
          res.innerHTML = 'theKey word is too short';
        }
        else if (theClass== 'Math' && theTeacher == 'Smith' && theUnit == 'Quadratics' && theKey == 'smithmath2019') {
          res.style.backgroundColor = 'green';
          res.style.color = 'white';
          res.innerHTML = 'You are approved!';
          location.replace("pages/quadratics.html"); //redirects to site
        }
        else if (theClass== 'German' && theTeacher == 'Heisenberg' && theUnit == 'Past Tense' && theKey == 'keyaufdeutsch') {
          res.style.backgroundColor = 'green';
          res.style.color = 'white';
          res.innerHTML = 'You are approved!';
          location.replace("pages/german.html"); //redirects to site
        }
        else
        {
          res.style.backgroundColor = 'red';
          res.style.color = 'white';
          res.innerHTML = 'Incorrect Combination!';
        }

}
