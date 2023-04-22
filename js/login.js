// Define Variables
let userpicBox
let usernameBox

let arrowButtonBG
let arrowButton
let editButton
let circleDot

let input

let picturePick
let picNumber
let spaceTextArea
// Task Bar Variables
let taskButton
let taskBar
let usernameText
let aboutInfo

// Declare Variables (after Window Load)
function windowLoad() {
    userpicBox = document.getElementById("user-pic-box")
    usernameBox = document.getElementById("username-box")

    arrowButtonBG = document.getElementsByClassName("arrow-button")
    arrowButton = document.getElementsByClassName("arrow-button-icon")
    editButton = document.getElementById("edit-button-icon")
    circleDot = document.getElementsByClassName("circleClass")

    input = document.getElementById("input")

    picturePick = document.getElementById("picture-pick")
    picNumber = document.getElementsByClassName("img-select-button")

    // Task Bar Variables
    taskButton = document.getElementById("task-button")
    taskBar = document.getElementById("task-bar")
    usernameText = document.getElementById("username-text")
    aboutInfo = document.getElementsByClassName("task-hidden-about")
    spaceTextArea = document.getElementById("space-text-area")

    document.getElementsByTagName("body")[0].style.opacity = 1
}

let picSelectCheck = false
let nameFillCheck = false

// Open Pic Nav
let check = 0
function openAndCloseNav() {
    console.log("UserPic: "+userpicBox)
    if(check%2 == 0) {
        userpicBox.style.transform = "translateY(-64.75vh)"
        userpicBox.style.borderBottom = "0"
        arrowButton[0].style.transform = "rotate(180deg)"
        picturePick.style.transform = "translateY(-64.75vh) scaleY(1)"
    }
    else {
        userpicBox.style.transform = "translateY(0vh)"
        userpicBox.style.borderBottom = "0"
        arrowButton[0].style.transform = "rotate(0deg)"
        picturePick.style.transform = "translateY(-64.75vh) scaleY(0)"
        if( picNumber[0].style.border === '5px solid blue' || 
            picNumber[1].style.border === '5px solid blue' ||
            picNumber[2].style.border === '5px solid blue' ) {
            userpicBox.style.backgroundColor = 'white'
            circleDot[0].style.animationPlayState = 'paused'
            circleDot[0].style.backgroundColor = 'var(--yellow)'
            picSelectCheck = true
            if(nameFillCheck) {
                taskButton.style.animationPlayState = 'running'
                taskButton.style.transform = 'rotate(-90deg) translateY(0vw)'
            }
        }
        else {
            userpicBox.style.backgroundColor = 'var(--white2)'
            circleDot[0].style.animationPlayState = 'running'
            taskButton.style.animationPlayState = 'paused'
            taskButton.style.transform = 'rotate(-90deg) translateY(-5vw)'
            picSelectCheck = false
        }
    }
    check++
}

// Edit or Set Username
let editCheck = 0
function editUsername() {
    if(input.value === null || input.value === '') {
        alert('Please enter the name.')
        return
    }
    if(editCheck%2 == 0) {
        input.disabled = true
        input.style.borderBottom = '1px solid black'
        input.style.fontWeight = 'bold'
        arrowButton[1].style.display = 'none'
        arrowButtonBG[1].style.backgroundColor = 'transparent'
        arrowButtonBG[1].style.border = 'none'
        editButton.style.display = 'block'
        usernameBox.style.backgroundColor = 'white'
        circleDot[1].style.animationPlayState = 'paused'
        circleDot[1].style.backgroundColor = 'var(--yellow)'
        usernameText.innerHTML = input.value
        nameFillCheck = true
        if(picSelectCheck) {
            taskButton.style.animationPlayState = 'running'
            taskButton.style.transform = 'rotate(-90deg) translateY(0vw)'
        }
    }
    else {
        input.disabled = false
        input.style.borderBottom = '0px'
        input.style.fontWeight = '100'
        arrowButton[1].style.display = 'block'
        arrowButtonBG[1].style.backgroundColor = 'var(--yellow)'
        arrowButtonBG[1].style.border = '1px solid black'
        editButton.style.display = 'none'
        usernameBox.style.backgroundColor = 'var(--white2)'
        circleDot[1].style.animationPlayState = 'running'
        taskButton.style.animationPlayState = 'paused'
        taskButton.style.transform = 'rotate(-90deg) translateY(-5vw)'
        nameFillCheck = false
    }
    editCheck++
}

// Select Picture
function selectPic(picNum) {
    if(picNum === 1) {
        picNumber[0].style.border = '5px solid blue'
        picNumber[1].style.border = 'none'
        picNumber[2].style.border = 'none'
    }
    else if(picNum === 2) {
        picNumber[0].style.border = 'none'
        picNumber[1].style.border = '5px solid blue'
        picNumber[2].style.border = 'none'
    }
    else if(picNum === 3) {
        picNumber[0].style.border = 'none'
        picNumber[1].style.border = 'none'
        picNumber[2].style.border = '5px solid blue'
    }
}

// Task Bar Click
let taskCheck = 0
function taskbarClick() {
    console.log("Pic check: "+picSelectCheck+" Name check: "+nameFillCheck)
    if(picSelectCheck && nameFillCheck) {
        taskButton.style.animationPlayState = 'running'
        taskButton.style.transform = 'rotate(-90deg) translateY(0vw)'
        if(taskCheck%2 == 0) {
            taskButton.style.transform = 'translateX(25vw) rotate(-90deg)'
            taskBar.style.transform = 'translateX(0vw)'
        }
        else {
            taskButton.style.transform = 'translateX(0vw) rotate(-90deg)'
            taskBar.style.transform = 'translateX(-25.1vw)'
        }
        taskCheck++
    }
    else {
        taskButton.style.animationPlayState = 'paused'
        taskButton.style.transform = 'rotate(-90deg) translateY(-5vw)'
        alert('Please fill out all fields.')
    }
}
// Task Bar About Click
function aboutClick(clickNum) {
    if(clickNum === 0) {
        aboutInfo[0].style.transform = 'translateY(-95.5vh) translateX(0vw)'
    }
    else {
        aboutInfo[0].style.transform = 'translateY(-95.5vh) translateX(-25vw)'
    }
}
