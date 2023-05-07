// Declare Variables
let selectedText
let endShare
let endEBook
let endProfile

let nameText

// Append Data
let categoriesInfoText
let categoriesBoxText

function windowLoad() {
    loadLocalStorageValue()

    // Append Data Text
    categoriesInfoText = document.getElementById('categories-info-text')
    categoriesBoxText = document.getElementsByClassName('category-box-text')

    // Fetch Json File
    fetchJsonFile()

    selectedText = document.getElementById('selected-text')
    selectedText.innerText = localNoticeSelected

    endShare = document.getElementById('confidential-end-share')
    endEBook = document.getElementById('confidential-end-e-book')
    endProfile = document.getElementById('confidential-end-profile-info')

    nameText = document.getElementById('name-text')
    nameText.innerText = localUsername
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

// function elementArrayBoolCheck() {
//     let numOfTrue = 0
//     for(let i = 0; i < elementArrayBool.length; i++) {
//         if(elementArrayBool[i]) {
//             numOfTrue++
//         }
//     }
//     return numOfTrue
// }

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
    navigator.clipboard.writeText('Copied');
}