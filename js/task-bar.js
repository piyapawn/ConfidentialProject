// Task Bar Variables
let taskButton
let taskBar
let usernameText
let aboutInfo

function taskBarVariablesLoad() {
    //Load Local Storage Variables
    loadLocalStorageValue()

    taskButton = document.getElementById("task-button")
    taskBar = document.getElementById("task-bar")
    usernameText = document.getElementById("username-text")
    aboutInfo = document.getElementsByClassName("task-hidden-about")

    setUsername()
}

// Task Bar Open or Close
let stateNumCheck = 0
function taskBarOpenOrClose() {
    if(stateNumCheck%2 == 0) {
        taskButtonTransform('x', 'calc(var(--grid)*10)')
        taskBarTranslationX(0)
    }
    else {
        taskButtonTransform('x', '0%')
        taskBarTranslationX(-100)
    }
    stateNumCheck++
}

function setUsername() {
    usernameText.innerText = localUsername
}

// Task Button Flashing On/Off
function taskButtonFlashing(state) {
    taskButton.style.animation = '0.75s taskButtonFlashing alternate infinite'
    if(state === 'r') {
        taskButton.style.animationPlayState = 'running'
    }
    else if(state === 'p') {
        taskButton.style.animationPlayState = 'paused'
    }
}

// Task Button Transform
function taskButtonTransform(translation, distance) {
    if(translation === 'x') {
        taskButton.style.transform = `translateX(${distance}) rotate(-90deg)`
    }
    else if(translation === 'y') {
        taskButton.style.transform = `translateY(${distance}) rotate(-90deg)`
    }
}

// Task Button Translation X
function taskBarTranslationX(distance) {
    taskBar.style.transform = `translateX(${distance}%)`
}

// Task Bar About Click
function aboutClick(state) {
    if(state === 'open') {
        aboutInfo[0].style.transform = 'translateY(-95.5vh) translateX(0%)'
    }
    else if(state === 'close') {
        aboutInfo[0].style.transform = 'translateY(-95.5vh) translateX(-100%)'
    }
}
