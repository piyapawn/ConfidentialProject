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

// Declare Variables (after Window Load)
function windowLoad() {
    // Load Task Bar Variables
    taskBarVariablesLoad()

    //Load Local Storage Variables
    loadLocalStorageValue()

    userpicBox = document.getElementById("user-pic-box")
    usernameBox = document.getElementById("username-box")

    arrowButtonBG = document.getElementsByClassName("arrow-button")
    arrowButton = document.getElementsByClassName("arrow-button-icon")
    editButton = document.getElementById("edit-button-icon")
    circleDot = document.getElementsByClassName("circleClass")

    input = document.getElementById("input")

    picturePick = document.getElementById("picture-pick")
    picNumber = document.getElementsByClassName("img-select-button")

    spaceTextArea = document.getElementById("space-text-area")

    document.getElementsByTagName("body")[0].style.animation = 'fade-in 0.5s'

    // Task Bar
    taskButtonTransform('x', '-100%')

    console.log('Local Username: ', localUsername)
    if(localUsername !== '' || localUsername !== null || localUsername !== undefined) {
        input.value = localUsername
        editUsername()
    }

    if(localProfilePicture == 'male') {
        selectPic(1)

        userpicBox.style.backgroundColor = 'white'
        circleDot[0].style.animationPlayState = 'paused'
        circleDot[0].style.backgroundColor = 'var(--yellow)'
    }
    else if(localProfilePicture == 'female') {
        selectPic(2)

        userpicBox.style.backgroundColor = 'white'
        circleDot[0].style.animationPlayState = 'paused'
        circleDot[0].style.backgroundColor = 'var(--yellow)'
    }
    else if(localProfilePicture == 'not specified') {
        selectPic(3)

        userpicBox.style.backgroundColor = 'white'
        circleDot[0].style.animationPlayState = 'paused'
        circleDot[0].style.backgroundColor = 'var(--yellow)'
    }

    if(localUsername !== '' && localProfilePicture !== '') {
        taskButtonFlashing('r')
        taskButtonTransform('y', 0)
    }
}

function textRunningAnimation(numCount) {
    let runningText = document.getElementById(`running-text-${numCount}`)

    runningText.style.animation = 'textRunning1 20s linear infinite'
}

function removeRunningText(numCount) {
    let runningText = document.getElementById(`running-text-${numCount}`)

    runningText.remove()
}

let picSelectCheck = false
let nameFillCheck = false

// Open Pic Nav
let check = 0
function openAndCloseNav() {
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
                taskButtonFlashing('r')
                taskButtonTransform('y', 0)
            }
        }
        else {
            userpicBox.style.backgroundColor = 'var(--white2)'
            circleDot[0].style.animationPlayState = 'running'
            taskButtonFlashing('p')
            taskButtonTransform('x', '-100%')
            picSelectCheck = false
        }
    }
    check++
}

// Edit or Set Username
let editCheck = 0
function editUsername() {
    if(input.value === null || input.value === '') {
        return
    }
    console.log('Input: ', input.value)
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

        localStorage.setItem('username', input.value)
        taskBarVariablesLoad()

        nameFillCheck = true
        if(picSelectCheck) {
            taskButtonFlashing('r')
            taskButtonTransform('y', 0)
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
        taskButtonFlashing('p')
        taskButtonTransform('x', '-100%')
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

        localStorage.setItem('profile-picture', 'male')
    }
    else if(picNum === 2) {
        picNumber[0].style.border = 'none'
        picNumber[1].style.border = '5px solid blue'
        picNumber[2].style.border = 'none'

        localStorage.setItem('profile-picture', 'female')
    }
    else if(picNum === 3) {
        picNumber[0].style.border = 'none'
        picNumber[1].style.border = 'none'
        picNumber[2].style.border = '5px solid blue'

        localStorage.setItem('profile-picture', 'not specified')
    }
    
    picSelectCheck = true
}

// Task Bar Check
function taskbarCheck() {
    console.log("Pic check: "+picSelectCheck+" Name check: "+nameFillCheck)
    if(picSelectCheck && nameFillCheck) {
        taskButtonFlashing('r')
        taskButtonTransform('y', 0)
        taskBarOpenOrClose()
    }
    else {
        taskButtonFlashing('p')
        taskButtonTransform('x', '-100%')
    }
}