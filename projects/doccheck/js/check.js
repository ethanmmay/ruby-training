function load() {
    var patient = document.getElementById("patient").value;
    console.log("The patient is " + patient);
    if (patient === "jf") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/julianf/projects/patientdata" },1000);
    } else if (patient === "br") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/bodenr/projects/patientdata.html" },1000);
    } else if (patient === "cr") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/cameronr/projects/patientdata" },1000);
    } else if (patient === "jg") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/julianneg/projects/bloodpressure/index.html" },1000);
    } else if (patient === "fd") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/fenixd/projects/healthGraph/patientdata.html" },1000);
    } else if (patient === "go") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/gavino/patient.html" },1000);
    } else if (patient === "hs") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/hannahs/projects/medChart" },1000);
    } else if (patient === "ko") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/kamlyno/projects/patientdata" },1000);
    } else if (patient === "lp") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/lucap/projects/patientdata" },1000);
    } else if (patient === "ne") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/natee/projects/BloodPressure" },1000);
    } else if (patient === "sm") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/samm/projects/patientdata" },1000);
    } else if (patient === "wc") {
        document.getElementById("notify").innerHTML = "Redirecting to Patient";
        setTimeout(function() { window.location="https://westada.tech/a1/wyattc/projects/patientdata" },1000);
    } else {
        console.log("Something went wrong with the Patient Selector");
        document.getElementById("notify").innerHTML = "Invalid Operand = Choose a Patient";
    }
}