// Declare Variables
let selectedText
let endShare
let endEBook
let endProfile

function windowLoad() {
    loadLocalStorageValue()

    selectedText = document.getElementById('selected-text')
    selectedText.innerText = localNoticeSelected

    endShare = document.getElementById('confidential-end-share')
    endEBook = document.getElementById('confidential-end-e-book')
    endProfile = document.getElementById('confidential-end-profile-info')
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