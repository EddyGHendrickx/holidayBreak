let sounds = [];
let newKeys = [];
let changes = [];
document.querySelectorAll("audio").forEach(function (el) {
    sounds.push(new Audio(el.src));
   // console.log(sounds);
});
for (let i = 0; i < sounds.length; i++) {
    newKeys.push(document.getElementsByClassName("key")[i].childNodes[1].innerHTML.toLowerCase());
    changes.push(document.getElementsByClassName("key")[i]);
}
document.addEventListener("keypress", function (e) {
    changes[newKeys.indexOf(e.key)].setAttribute("style", "border: 5px solid yellow; transform: scale(1.05, 1.05); transition: all 300ms linear");
    sounds[newKeys.indexOf(e.key)].play();
    setTimeout(function (){
        changes[newKeys.indexOf(e.key)].removeAttribute("style");
    }, 300);
    }
);

