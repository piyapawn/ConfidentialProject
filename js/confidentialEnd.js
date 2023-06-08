// Declare Variables
let selectedText
let endShare
let endEBook
let endProfile

let employeeProfilePic

let confidentialEnd

let restartButton
let footer
let scrollImage

// Text
let leftTopContentText
let middleContentText
let rightTopContentText

// Append Data
let categoriesInfoText
let categoriesBoxText

function windowLoad() {
    loadLocalStorageValue()

    let nameText = document.getElementById('name-text')
    nameText.innerText = localUsername

    let timStampZone1 = document.getElementById('time-stamp-text-zone-1')
    let timStampZone2 = document.getElementById('time-stamp-text-zone-2')
    let timStampZone3 = document.getElementById('time-stamp-text-zone-3')
    timStampZone1.innerText = 'IN : ' + localZone1TimeStamp
    timStampZone2.innerText = 'IN : ' + localZone2TimeStamp
    timStampZone3.innerText = 'IN : ' + localZone3TimeStamp

    // Append Data Text
    categoriesInfoText = document.getElementById('categories-info-text')
    categoriesBoxText = document.getElementsByClassName('category-box-text')

    selectedText = document.getElementById('selected-text')
    selectedText.innerText = localNoticeSelected

    endShare = document.getElementById('confidential-end-share')
    endEBook = document.getElementById('confidential-end-e-book')
    endProfile = document.getElementById('confidential-end-profile-info')

    employeeProfilePic = document.getElementById('employee-id-profile-pic')

    confidentialEnd = document.getElementById('confidential-end')

    restartButton = document.getElementById('restart-button')
    footer = document.getElementById('footer')
    scrollImage = document.getElementById('scroll-image')

    leftTopContentText = document.getElementById('left-top-content')
    middleContentText = document.getElementById('middle-bottom-content')
    rightTopContentText = document.getElementById('right-top-content')

    if(localProfilePicture == 'male') {
        employeeProfilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 3.png"
    }
    else if(localProfilePicture == 'female') {
        employeeProfilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 4.png"
    }
    else if(localProfilePicture == 'not specified') {
        employeeProfilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 5.png"
    }

    if(localIsScrollEnd) {
        confidentialTrueEnd()
    }

    const audio = document.querySelector("audio");
    audio.play();
}

function fetchJsonFile() {
    fetch('/json/personalities.json')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        appendData(data)
    })
    .catch(function (err) {
        console.log('Error: ', err)
    })
}

function appendData(data) {
    console.log('Personality Type: ', findPersonalities())
    
    Object.keys(data).forEach((item) => {
        if(data[item].personalities == findPersonalities()) {
            categoriesInfoText.innerText = data[item].info
            categoriesBoxText[0].innerText = data[item].categories1
            categoriesBoxText[1].innerText = data[item].categories2
        }
    })
}

function findPersonalities() {
    let e = 0
    let o = 0
    let a = 0
    let c = 0

    for(let i = 0; i < 4; i++) {
        if(localPersonalitiesSelectedPicture[i][0] == 'e') {
            e++
        }
        if(localPersonalitiesSelectedPicture[i][0] == 'o') {
            o++
        }
        if(localPersonalitiesSelectedPicture[i][0] == 'a') {
            a++
        }
        if(localPersonalitiesSelectedPicture[i][0] == 'c') {
            c++
        }
    }

    let personalitiesType = ''

    // e
    if(e == 0 || e == 1) {
        personalitiesType += "I"
    }
    else if(e == 2 || e == 3) {
        personalitiesType += "E"
    }
    // o
    if(o == 0 || o == 1) {
        personalitiesType += "S"
    }
    else if(o == 2 || o == 3) {
        personalitiesType += "N"
    }
    // a
    if(a == 0 || a == 1) {
        personalitiesType += "T"
    }
    else if(a == 2 || a == 3) {
        personalitiesType += "F"
    }
    // c
    if(c == 0 || c == 1) {
        personalitiesType += "P"
    }
    else if(c == 2 || c == 3) {
        personalitiesType += "J"
    }

    return personalitiesType
}

let scrollAction = false
function confidentialTrueEnd() {
    if(!scrollAction) {
        hideElement(scrollImage)
        revealElement(restartButton, 'flex')
        footer.style.transform = 'translateY(0%)'
    
        confidentialEnd.style.overflow = 'hidden'
        
        moveText(leftTopContentText, 'top', 'left', 2, 3)
        moveText(middleContentText, 'bottom', 'left', 1, 15.5)
        moveText(rightTopContentText, 'top', 'right', 2, 3)

        scrollAction = true

        localStorage.setItem('scroll-end', true)
    }
}

function moveText(elementText, position1, position2, numOfPos1, numOfPos2) {
    if(position1 == 'top') {
        elementText.style.top = `calc(var(--grid) * ${numOfPos1})`
    }
    else if(position1 == 'bottom') {
        elementText.style.bottom = `calc(var(--grid) * ${numOfPos1})`
    }
    if(position2 == 'right') {
        elementText.style.right = `calc(var(--grid) * ${numOfPos2})`
    }
    else if(position2 == 'left') {
        elementText.style.left = `calc(var(--grid) * ${numOfPos2})`
    }
}

let elementOpenBool = false;

function openConfidentialEndElement(element) {
    console.log('Element Open?: ', elementOpenBool)

    if(!elementOpenBool) {
        if(element == 'share') {
            revealElement(endShare, 'flex')
        }
        else if(element == 'e-book') {
            revealElement(endEBook, 'flex')
        }
        else if(element == 'profile') {
            revealElement(endProfile, 'flex')
            fetchJsonFile()
        }
        elementOpenBool = true
    }
}

function closeConfidentialEndElement(element) {
    console.log('Element Open?: ', elementOpenBool)

    if(elementOpenBool) {
        if(element == 'share') {
            hideElement(endShare)
        }
        else if(element == 'e-book') {
            hideElement(endEBook)
        }
        else if(element == 'profile') {
            hideElement(endProfile)
        }
        elementOpenBool = false
    }
}

function revealElement(element, display) {
    element.style.display = display
    setTimeout(() => {
        element.style.opacity = 1
    }, 250)
}

function hideElement(element) {
    element.style.opacity = 0
    setTimeout(() => {
        
        element.style.display = 'none'
    }, 250)
}

// OPEN E-BOOK LINK
function openEbookLink() {
    window.open("https://online.flippingbook.com/view/831297895/")
}

// DOWNLOAD IMAGE
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'worldwideweave_share'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

// COPY LINK
function copyLink() {
    navigator.clipboard.writeText("https://worldwideweave.netlify.app/");
}