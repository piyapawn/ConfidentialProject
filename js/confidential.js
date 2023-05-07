let arrowLeftBlue
let arrowLeftGrey
let arrowRightBlue
let arrowRightGrey

let arrowLeftButton
let arrowRightButton

let postItCon1
let postItNoteCon1

let postItNoteCon2

let textRun
let rightBottomContent

function windowLoad() {
    taskBarVariablesLoad()
    setInterval(currentTimeRunning, 1000, 'time-text')

    arrowLeftBlue = document.getElementById('arrow-left-blue')
    arrowLeftGrey = document.getElementById('arrow-left-grey')
    arrowRightBlue = document.getElementById('arrow-right-blue')
    arrowRightGrey = document.getElementById('arrow-right-grey')

    arrowLeftButton = document.getElementById('arrow-left-button')
    arrowRightButton = document.getElementById('arrow-right-button')

    postItCon1 = document.getElementById('postit-area-con-1')
    postItNoteCon1 = document.getElementById('postit-note-con-1')

    postItNoteCon2 = document.getElementById('postit-note-con-2')

    textRun = document.getElementById('right-top-text-run')
    rightBottomContent = document.getElementById('right-bottom-content')
}
// -------------- Change Confidential Page --------------
let pageArray = [1, 2, 3]
let numOfPage = 1
function changePage(direction) {
    let pageNumberText = document.getElementById('page-number-text')
    let confidentialPage1 = document.getElementsByClassName(`confidential-1`)
    let confidentialPage2 = document.getElementsByClassName(`confidential-2`)

    if(direction == 'left') {
        numOfPage--
    }
    else if(direction == 'right') {
        numOfPage++
    }

    if (numOfPage < 1) {
        numOfPage = 1
    }
    if (numOfPage > 3) {
        numOfPage = 3
    }

    if(numOfPage == 1) {
        openConfidentialPage(confidentialPage1)
        closeConfidentialPage(confidentialPage2)

        ableArrow(arrowRightBlue, arrowRightGrey, arrowRightButton)
        disableArrow(arrowLeftBlue, arrowLeftGrey, arrowLeftButton)

        pageNumberText.innerHTML = '01'
    }
    else if(numOfPage == 2) {
        closeConfidentialPage(confidentialPage1)
        openConfidentialPage(confidentialPage2)

        ableArrow(arrowRightBlue, arrowRightGrey, arrowRightButton)
        ableArrow(arrowLeftBlue, arrowLeftGrey, arrowLeftButton)

        textRun.style.display = 'flex'
        setTimeout(() => {
            textRun.style.opacity = 1
        }, 250);
        rightBottomContent.style.height = 'calc(100% - var(--grid) * 1)'

        pageNumberText.innerHTML = '02'
    }
    else if(numOfPage == 3) {
        closeConfidentialPage(confidentialPage1)
        closeConfidentialPage(confidentialPage2)

        ableArrow(arrowLeftBlue, arrowLeftGrey, arrowLeftButton)
        disableArrow(arrowRightBlue, arrowRightGrey, arrowRightButton)

        textRun.style.opacity = 0
        setTimeout(() => {
            textRun.style.display = 'none'
        }, 250);

        rightBottomContent.style.height = '100%'

        pageNumberText.innerHTML = '03'
    }
}

function openConfidentialPage(confidentialPage) {
    for(let i = 0; i < confidentialPage.length; i++) {
        confidentialPage[i].style.display = 'block'
        setTimeout(() => {
            confidentialPage[i].style.opacity = 1
        }, 250)
    }
}
function closeConfidentialPage(confidentialPage) {
    for(let i = 0; i < confidentialPage.length; i++) {
        confidentialPage[i].style.opacity = 0
        setTimeout(() => {
            confidentialPage[i].style.display = 'none'
        }, 250)
    }
}

function ableArrow(arrowBlue, arrowGrey, arrowButton) {
    arrowBlue.style.display = 'block'
    arrowGrey.style.display = 'none'
    arrowButton.disabled = false
    arrowButton.style.cursor = 'pointer'
}
function disableArrow(arrowBlue, arrowGrey, arrowButton) {
    arrowBlue.style.display = 'none'
    arrowGrey.style.display = 'block'
    arrowButton.disabled = true
    arrowButton.style.cursor = 'default'
}

// -------------- CONFIDENTIAL 1 --------------

// ARRAY for check Case Box click
let checkArray = Array(6).fill(true) 

function postItHover() {
    let numOfFalse = 0
    for(let i in checkArray) {
        if(!checkArray[i]) {
            numOfFalse++
        }
        console.log('I : ', checkArray[i])
    }
    console.log('Num False: ', numOfFalse)
    if(numOfFalse > 0) {
        return
    }
    else {
        postItNoteCon1.style.opacity = 0
    }
}
function postItOut() {
    postItNoteCon1.style.opacity = 1
}
function caseboxHover(idNum) {
    let caseBox = document.getElementById(`case-box-${idNum}`)
    let caseTopic = document.getElementById(`case-topic-${idNum}`)
    let caseNumText = document.getElementById(`case-num-text-${idNum}`)
    let manyMoreText = document.getElementById('many-more-text')

    console.log('checkArray: ', checkArray[idNum-1])

    if(checkArray[idNum-1]) {
        caseBox.style.backgroundColor = 'var(--yellow)'
        caseTopic.style.opacity = 1
        caseNumText.innerHTML = `0${idNum}`
        caseNumText.style.color = 'var(--black)'
        manyMoreText.style.opacity = 0
    }
}
function caseboxOut(idNum) {
    let caseBox = document.getElementById(`case-box-${idNum}`)
    let caseTopic = document.getElementById(`case-topic-${idNum}`)
    let caseNumText = document.getElementById(`case-num-text-${idNum}`)
    let manyMoreText = document.getElementById('many-more-text')

    if(checkArray[idNum-1]) {
        caseBox.style.backgroundColor = 'var(--white2)'
        caseTopic.style.opacity = 0
        caseNumText.innerHTML = `CASE 0${idNum}`
        caseNumText.style.color = 'var(--blue)'
        manyMoreText.style.opacity = 0.5
    }

}
function clickCasebox(idNum) {
    let caseBox = document.getElementById(`case-box-${idNum}`)
    let caseTopic = document.getElementById(`case-topic-${idNum}`)
    let caseTopicText = document.getElementsByClassName(`text-${idNum}`)
    let caseNumText = document.getElementById(`case-num-text-${idNum}`)
    let backButton = document.getElementById(`back-button-${idNum}`)
    let caseBoxHeader = document.getElementById(`case-box-header-${idNum}`)
    let caseBoxInner = document.getElementById(`case-box-inner-${idNum}`)

    caseBox.style.backgroundColor = 'var(--white2)'
    caseBox.style.width = '100%'
    caseBox.style.height = '100%'
    caseBox.style.zIndex = 10
    caseBox.style.cursor = 'auto'

    caseNumText.innerHTML = `0${idNum}`
    caseTopic.style.opacity = 1
    caseTopic.style.width = 'calc(var(--grid) * 12)'
    caseTopicText[0].style.fontSize = '2.2vw'
    caseTopicText[1].style.fontSize = '2.2vw'

    if(idNum == 6) {
        caseTopicText[0].style.marginLeft = '1vw'
        caseTopicText[1].style.marginLeft = '1vw'
    }
    else {
        caseTopicText[0].style.marginLeft = '3.1vw'
        caseTopicText[1].style.marginLeft = '3.1vw'
    }

    caseBoxHeader.style.height = 'calc(var(--grid) * 5)'

    caseBoxInner.style.display = 'flex'
    setTimeout(() => {
        caseBoxInner.style.opacity = 1
    }, 250)

    backButton.style.display = 'block'
    setTimeout(() => {
        backButton.style.opacity = 1
    }, 250)

    // Change Page Button
    disableArrow(arrowRightBlue, arrowRightGrey, arrowRightButton)

    postItCon1.style.transform = 'scale(0.5)'

    checkArray[idNum-1] = false
}
function clickBackButton(idNum) {
    let caseBox = document.getElementById(`case-box-${idNum}`)
    let caseTopic = document.getElementById(`case-topic-${idNum}`)
    let caseTopicText = document.getElementsByClassName(`text-${idNum}`)
    let caseNumText = document.getElementById(`case-num-text-${idNum}`)
    let backButton = document.getElementById(`back-button-${idNum}`)
    let caseBoxHeader = document.getElementById(`case-box-header-${idNum}`)
    let caseBoxInner = document.getElementById(`case-box-inner-${idNum}`)

    caseBox.style.width = `calc(var(--grid) * (17 + (${idNum} - 1)))`
    caseBox.style.height = `calc(var(--grid) * (14 - (${idNum} - 1)*2))`
    caseBox.style.zIndex = idNum
    caseBox.style.cursor = 'pointer'

    caseNumText.innerHTML = `CASE 0${idNum}`
    caseNumText.style.color = 'var(--blue)'
    caseTopic.style.opacity = 0
    caseTopic.style.width = 'calc(var(--grid) * 9)'
    caseTopicText[0].style.fontSize = '1.5vw'
    caseTopicText[1].style.fontSize = '1.5vw'
    caseTopicText[0].style.marginLeft = '3vw'
    caseTopicText[1].style.marginLeft = '3vw'

    caseBoxHeader.style.height = 'calc(var(--grid) * 2)'

    caseBoxInner.style.opacity = 0
    setTimeout(() => {
        caseBoxInner.style.display = 'none'
    }, 250)

    backButton.style.opacity = 0
    setTimeout(() => {
        backButton.style.display = 'none'
    }, 250)

    // Change Page Button
    ableArrow(arrowRightBlue, arrowRightGrey, arrowRightButton)

    postItCon1.style.transform = 'scale(1)'

    checkArray[idNum-1] = true
}


// -------------- CONFIDENTIAL 2 --------------
function openQuiz(numOfQuiz) {
    let answer = document.getElementById(`answer-${numOfQuiz}`)

    answer.style.display = 'flex'
    answer.style.opacity = 1

    postItNoteCon2.style.opacity = 0
    setTimeout(() => {
        postItNoteCon2.style.display = 'none'
    }, 250)

    disableArrow(arrowRightBlue, arrowRightGrey, arrowRightButton)
    disableArrow(arrowLeftBlue, arrowLeftGrey, arrowLeftButton)
}

function closeAnswer(numOfQuiz) {
    let answer = document.getElementById(`answer-${numOfQuiz}`)

    answer.style.opacity = 0
    setTimeout(() => {
        answer.style.display = 'none'
    }, 250)

    postItNoteCon2.style.display = 'block'
    setTimeout(() => {
        postItNoteCon2.style.opacity = 1
    }, 250)

    ableArrow(arrowRightBlue, arrowRightGrey, arrowRightButton)
    ableArrow(arrowLeftBlue, arrowLeftGrey, arrowLeftButton)
}