var timeCard
const today = new Date();
var time = today.toLocaleTimeString();

window.setInterval(displayClock, 1000)

function windowLoad() {
    timeCard = document.getElementById('timeIn').innerHTML = time;
}
