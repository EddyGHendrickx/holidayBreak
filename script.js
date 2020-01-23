armSeconds = document.getElementById("armSec");
armMinutes = document.getElementById("armMin");
armHours = document.getElementById("armHour");


let s = 50;
let m = 59;
let h = 0;
//Seconds Timer
setInterval(function () {
    armSeconds.setAttribute("style", `transform: rotate(${s * 6}deg)`);
    if (s === 60) {
        minutePasses();
        s = 0;
        s++;
    } else {
        s++;
    }
}, 1000);

//Minutes Timer
function minutePasses() {
    m++;
    armMinutes.setAttribute("style", `transform: rotate(${m * 6}deg)`);
    if (m === 60) {
        hourPasses();
        m = 0;
    }
}

function hourPasses() {
    h++;
    armHours.setAttribute("style", `transform: rotate(${h * 30}deg)`);
    if (h === 60){
        h = 0;
    }
}