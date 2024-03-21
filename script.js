const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minuts");
const secEl = document.getElementById("secends");
const amPmEl = document.getElementById("amPm");

function UpdateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ap = "AM";

    if (h > 12) {
        h = -12;
        ap = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    amPmEl.innerText = ap;

    setTimeout(() => {
        UpdateClock();
    }, 1000)
}
UpdateClock();

