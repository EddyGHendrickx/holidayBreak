armSeconds = document.getElementById("armSec");
armMinutes = document.getElementById("armMin");
armHours = document.getElementById("armHour");
let today = new Date;
console.log(today.getHours());

let s = today.getSeconds();
let m = today.getMinutes();
let h = today.getHours();


armSeconds.setAttribute("style", `transform: rotate(${s * 6}deg)`);
armMinutes.setAttribute("style", `transform: rotate(${m * 6}deg)`);
armHours.setAttribute("style", `transform: rotate(${h * 30}deg)`);

//Seconds Timer
setInterval(function () {
    console.log(h, m, s);
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

