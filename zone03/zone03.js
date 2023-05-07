var timeCard
const today = new Date();
var time = today.toLocaleTimeString();

function windowLoad() {
    currentTimeRunning('time-in')
    let timeIn = document.getElementById('timeIn')
    localStorage.setItem('zone3-time-stamp', timeIn.innerText)
    setInterval(currentTimeRunning, 1000, 'live-time')
    loadLocalStorageValue()

    let nameText = document.getElementById('name-text')
    nameText.innerText = localUsername
}
