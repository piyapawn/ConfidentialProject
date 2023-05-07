function currentTimeRunning(className) {
    // Time Normal Format
    let date = new Date()
    let hours = addZero(date.getHours())
    let minutes = addZero(date.getMinutes())
    let seconds = addZero(date.getSeconds())
    let currentTime = hours + ':' + minutes + ':' + seconds

    // Time AM PM Format
    const splittedTime = currentTime.split(':')
    const amOrPm = splittedTime[0] >= 12 ? "AM" : "PM"
    const hours2 = splittedTime[0] % 12 || 12
    const finalTime = addZero(hours2) + ':' + splittedTime[1] + ' ' + amOrPm

    let timetext = document.getElementsByClassName(className)

    for(let i of timetext) {
        i.innerHTML = finalTime
    }
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}