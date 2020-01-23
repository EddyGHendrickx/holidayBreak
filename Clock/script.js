armSeconds = document.getElementById("armSec");
let i = 0;
setInterval(function () {

    armSeconds.setAttribute("style", `transform: rotate(${i*6}deg)`);
    if(i === 61){
        i = 0;
        i++;
    } else {
        i++;
    }
}, 1000);