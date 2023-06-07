var timeCard
const today = new Date();
var time = today.toLocaleTimeString();

function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
    
    currentTimeRunning('time-in')
    let timeIn = document.getElementById('timeIn')
    localStorage.setItem('zone2-time-stamp', timeIn.innerText)
    setInterval(currentTimeRunning, 1000, 'live-time')

    let nameText = document.getElementById('name-text')
    nameText.innerText = localUsername
}

function showCtmInfo() {
    document.getElementsByClassName('customer')[0].style.display = 'flex';
}

function hideCtmInfo() {
    document.getElementsByClassName('customer')[0].style.display = 'none';
}
