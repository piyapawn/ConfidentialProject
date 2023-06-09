// Declare Variables
// Append Data
let categoriesInfoText
let categoriesBoxText

let leftText
let leftContent
let rightContentPre
let rightContentConclusion
let scrollButton

let notice
let selectedText
let noticeTopic

let noticeTextBox
let noticeSelectBox
let noticeNextButton

let deleteDataPage
let deleteDataIcon
let ddPageContent
let ddBackButton
let deleteDataBigIcon

let ddCapsule
let ddTopicText
let ddPageWrapHuman

let deleteGaugePage
let period
let periodTimeText

let continueButton
let deleteGaugeSlider1
let deleteGaugeSlider2

let completedDelete
let periodDeletedText

let profilePic
let employeeProfilePic

let allContent

let selectWeavePicPage

function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()

    let nameText = document.getElementById('name-text')
    nameText.innerText = localUsername

    let timStampZone1 = document.getElementById('time-stamp-text-zone-1')
    let timStampZone2 = document.getElementById('time-stamp-text-zone-2')
    let timStampZone3 = document.getElementById('time-stamp-text-zone-3')
    timStampZone1.innerText = 'IN : ' + localZone1TimeStamp
    timStampZone2.innerText = 'IN : ' + localZone2TimeStamp
    timStampZone3.innerText = 'IN : ' + localZone3TimeStamp

    setInterval(currentTimeRunning, 1000, 'time-text')

    setInterval(function() {
        if(localIsDeletedData) {
            
        }
    }, 1000);

    // Append Data Text
    categoriesInfoText = document.getElementById('categories-info-text')
    categoriesBoxText = document.getElementsByClassName('category-box-text')

    leftText = document.getElementById('left-text')
    leftContent = document.getElementById('left-content')
    rightContentPre = document.getElementById('right-content-pre')
    rightContentConclusion = document.getElementById('right-content-conclusion')

    noticeTextBox = document.getElementById('notice-text-box')
    noticeSelectBox = document.getElementById('notice-select-box')
    noticeNextButton = document.getElementById('notice-next-button')
    scrollButton = document.getElementById('scroll-button')

    notice = document.getElementById('notice')
    selectedText = document.getElementById('selected-text')
    noticeTopic = document.getElementById('notice-topic')

    deleteDataPage = document.getElementById('delete-data-page')
    deleteDataIcon = document.getElementById('delete-data-icon')
    ddPageContent = document.getElementById('dd-page-content')
    ddBackButton = document.getElementById('dd-back-button')
    deleteDataBigIcon = document.getElementById('delete-data-big-icon')

    ddCapsule = document.getElementById('dd-capsule')
    ddTopicText = document.getElementById('dd-page-wrap-topic-text')
    ddPageWrapHuman = document.getElementById('dd-page-wrap-right-human')

    deleteGaugePage = document.getElementById('delete-gauge-page')
    period = document.getElementById('period')
    periodTimeText = document.getElementById('period-time-text')

    continueButton = document.getElementById('continue-button')

    deleteGaugeSlider1 = document.getElementById(`delete-gauge-slider-1`)
    deleteGaugeSlider2 = document.getElementById(`delete-gauge-slider-2`)

    completedDelete = document.getElementById(`completed-delete`)
    periodDeletedText = document.getElementById(`period-span-text`)

    profilePic = document.getElementById('profile-pic')
    employeeProfilePic = document.getElementById('employee-id-profile-pic')

    allContent = document.getElementById('all-content')

    selectWeavePicPage = document.getElementById('select-weave-pic')

    deleteGaugeSlider1.value = localSliderValue1
    deleteGaugeSlider2.value = localSliderValue2

    // Reload Web
    sliderChange(localSliderValue1, 1)
    sliderChange(localSliderValue2, 2)

    if(localNoticeSelected != '') {
        noticeNext()
        noticeSelected(localNoticeSelected)
    }

    if(localIsNextToConclusion) {
        nextToConclusion()
    }
    else {
        typingTextAnimtion(['คุณเองก็ถูกจับตามอง', 'และเป็นไปตามแผนที่เราวางไว้', 'เช่นเดียวกับผู้คนทั่วโลก', 'ที่ใช้อินเทอร์เน็ต'], 'span-text')
    }

    if(localIsDeletedData) {
        allContent.addEventListener("scroll", allContentScroll)
        revealElement(scrollButton, 'block')
    }

    const audio = document.querySelector("audio");
    audio.play();
}

function fetchJsonFile() {
    // Fetch Json File
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

function typingTextAnimtion(textList, className) {
    let spanText = document.getElementsByClassName(className)

    let letterArray = []
    letterArray.push(0)
    let letterNum = 0
    for(let i = 0; i < textList.length; i++) {
        letterArray.push(textList[i].length)
        letterNum += letterArray[i]

        setTimeout(() => {
            for(let j = 0; j < textList[i].length; j++) {
                setTimeout(() => {
                    spanText[i].innerHTML += textList[i][j]
                }, 100*j);
            }
        }, 100*letterNum);
    }
}

function noticeBoxOpen() {
    notice.style.width = '100%'
    
    setTimeout(() => {
        noticeTopic.style.opacity = 1
        noticeTextBox.style.opacity = 1
        noticeNextButton.style.opacity = 1
    }, 1000)
}

function nextToConclusion() {
    leftText.innerHTML = `
    <span class="span-text-2"></span><br>
    <span class="span-text-2 font-superSpace"></span><br>
    <span class="span-text-2 font-superSpace"></span>`

    typingTextAnimtion(['ข้อมูลส่วนตัวของคุณ', 'จะยังคงเป็นส่วนตัว', 'อยู่จริงหรือ?'], 'span-text-2')
    
    hideElement(rightContentPre)
    revealElement(rightContentConclusion, 'flex')

    localStorage.setItem('next-to-conclusion', true)

    if(localNoticeSelected == '') {
        setTimeout(() => {
            noticeBoxOpen()
        }, 500)
    }

    // Fetch Json File
    fetchJsonFile()
}

function noticeNext() {
    noticeTextBox.style.display = 'none'
    noticeSelectBox.style.display = 'flex'

    noticeNextButton.style.display = 'none'
}

function noticeSelected(text) {
    notice.style.marginLeft = '3vw'
    notice.style.marginBottom = 'calc(var(--grid) * 3.2)'
    notice.style.width = 'calc(var(--grid) * 4.3)'
    notice.style.height = 'calc(var(--grid) * 0.8)'
    notice.style.background = 'var(--white2)'

    selectedText.innerText = text

    hideElement(noticeTextBox)
    hideElement(noticeSelectBox)
    hideElement(noticeTopic)

    revealElement(selectedText, 'block')
    revealElement(deleteDataPage, 'flex')

    localStorage.setItem('notice-selected', text)
}

let state = 0

function openActionClick() {
    loadLocalStorageValue()

    deleteDataPage.removeAttribute("onclick")

    // STATE CHECK = 1
    if(stateCheck('open') == 1) {
        deleteDataPageChange(
            'calc(var(--grid) * 24)', 
            '100%', 
            '0', 
            '0', 
            'none',
            '0px', 
            'var(--white2)', 
            'default', 
            '0s'
            )

        revealElement(ddPageContent, 'block')
        hideElement(deleteDataIcon)

        hideElement(scrollButton)

        if(localProfilePicture == 'male') {
            profilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 3.png"
            employeeProfilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 3.png"
        }
        else if(localProfilePicture == 'female') {
            profilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 4.png"
            employeeProfilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 4.png"
        }
        else if(localProfilePicture == 'not specified') {
            profilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 5.png"
            employeeProfilePic.src = "/Assets/PictureAndVdo/ASCII-art (63) 5.png"
        }
    }
    // STATE CHECK = 2
    else if(stateCheck('open') == 2) {
        deleteDataPageChange('100%')

        deleteDataBigIcon.style.marginLeft = '5vw'

        ddTopicText.style.marginLeft = '5vw'

        period.style.display = 'flex'

        setTimeout(() => {
            ddTopicText.innerText = 'เลือกระดับการลบที่ต้องการดำเนินการ :'
        }, 250)

        revealElement(deleteGaugePage, 'block')
        hideElement(ddCapsule)

        if(localIsDeletedData) {
            ddPageWrapHuman.style.transform = 'translateX(100%)'

            deleteGaugeSlider1.disabled = true
            deleteGaugeSlider2.disabled = true
        }
    }

}

function backActionClick() {
    loadLocalStorageValue()

    // STATE CHECK = 1
    if(stateCheck('back') == 1) {
        deleteDataPageChange(
            'calc(var(--grid) * 24)', 
            '100%', 
            '0', 
            '0', 
            'none',
            '0px', 
            'var(--white2)', 
            'default', 
            '0s'
            )

        deleteDataBigIcon.style.marginLeft = '2.5vw'

        ddTopicText.style.marginLeft = 'calc(var(--grid) * 1)'

        setTimeout(() => {
            ddTopicText.innerText = 'เครือข่ายย่อยที่มีข้อมูลชุดนี้ :'

            period.style.display = 'none'
        }, 250)

        revealElement(ddCapsule, 'flex')
        hideElement(deleteGaugePage)

        if(localIsDeletedData) {
            ddPageWrapHuman.style.transform = 'translateX(0%)'

            deleteGaugeSlider1.disabled = true
            deleteGaugeSlider2.disabled = true
        }
    }
    // STATE CHECK = 0
    else if(stateCheck('back') == 0) {
        deleteDataPageChange(
            'calc(var(--grid) * 1.5)', 
            'calc(var(--grid) * 1.5)', 
            'calc(var(--grid) * 2)', 
            'calc(var(--grid) * 1)', 
            '1px solid black', 
            '5px', 
            'var(--white)', 
            'pointer', 
            '1s'
            )

        setTimeout(() => {
            deleteDataPage.setAttribute('onclick','openActionClick()')
        }, 250)

        revealElement(deleteDataIcon, 'block')
        hideElement(ddPageContent)

        if(localIsDeletedData) {
            revealElement(scrollButton, 'block')
        }
    }

}

function deleteDataPageChange(width, height, bottom, right, border, borderRadius, background, cursor, animationTime) {
    deleteDataPage.style.width = width
    deleteDataPage.style.height = height
    deleteDataPage.style.bottom = bottom
    deleteDataPage.style.right = right
    deleteDataPage.style.border = border
    deleteDataPage.style.borderRadius = borderRadius
    deleteDataPage.style.background = background
    deleteDataPage.style.cursor = cursor
    deleteDataPage.style.setProperty('--animationTime', animationTime)
}

function stateCheck(action) {
    if(action == 'open') {
        state++
    }
    else if(action == 'back') {
        state--
    }

    if(state < 0) {
        state =  0
    }
    if(state > 2) {
        state =  2
    }

    return state
}

function sliderChange(value, num) {
    let deleteGaugeSlider = document.getElementById(`delete-gauge-slider-${num}`)

    deleteGaugeSlider.style.backgroundSize = value+'% 100%'

    // SLIDER VALUE
    let value1 = deleteGaugeSlider1.value
    let value2 = deleteGaugeSlider2.value

    // Value 1 Bool Check
    const value1Check1 = value1 < 20
    const value1Check2 = value1 >= 20 && value1 != 100
    const value1Check3 = value1 == 100
    // Value 2 Bool Check
    const value2Check1 = value2 != 100
    const value2Check2 = value2 == 100

    if(value1Check2 && value2Check1) {
        period.style.opacity = 1
        periodTimeText.innerText = '1-2 วินาที'

        continueButtonState(true)
    }
    else if(value1Check1 && value2Check2 || value1Check2 && value2Check2) {
        period.style.opacity = 1
        periodTimeText.innerText = 'อย่างน้อย 30 วัน'

        continueButtonState(true)
    }
    else if(value1Check3 && value2Check1) {
        period.style.opacity = 1
        periodTimeText.innerText = 'อย่างน้อย 90 วัน'

        continueButtonState(true)
    }
    else if(value1Check3 && value2Check2) {
        period.style.opacity = 1
        periodTimeText.innerText = 'อย่างน้อย 120 วัน'

        continueButtonState(true)
    }
    else {
        period.style.opacity = 0

        continueButtonState(false)
    }
}

function continueDeleteClick() {
    // SLIDER VALUE
    let value1 = deleteGaugeSlider1.value
    let value2 = deleteGaugeSlider2.value

    if(value1 >= 20 || value2 == 100) {
        revealElement(completedDelete, 'flex')
        periodDeletedText.innerText = periodTimeText.innerText

        localStorage.setItem('slider-value1', value1)
        localStorage.setItem('slider-value2', value2)
        localStorage.setItem('is-deleted-data', true)

        deleteGaugeSlider1.disabled = true
        deleteGaugeSlider2.disabled = true

        hideElement(continueButton)
    }

    allContent.addEventListener("scroll", allContentScroll)
}

function closeCompletedDelete() {
    hideElement(completedDelete)
    ddPageWrapHuman.style.transform = 'translateX(100%)'
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

function continueButtonState(bool) {
    if(localIsDeletedData === true) {
        return
    }
    if(bool) {
        continueButton.style.opacity = 1
        continueButton.style.cursor = 'pointer'
        continueButton.style.pointerEvents = 'auto'
    }
    else {
        continueButton.style.opacity = 0
        continueButton.style.cursor = 'default'
        continueButton.style.pointerEvents = 'none'
    }
}

// OPEN E-BOOK LINK
function openEbookLink() {
    window.open("https://online.flippingbook.com/view/831297895/")
}

function allContentScroll() {
    if(state == 0) {

        // Close Conclusion Page
        rightContentConclusion.style.transform = 'translateX(100vw)'
        setTimeout(() => {
            hideElement(rightContentConclusion)
            hideElement(leftContent)
        }, 500)

        hideElement(deleteDataPage)

        // Open Select Weave Pic Page
        setTimeout(() => {
            revealElement(selectWeavePicPage, 'flex')
            loadWeavePic()
        }, 1000)
        
        localStorage.setItem('select-weave-pic-page', true)
    }
}

let isLoadWeavePic = false
function loadWeavePic() {
    if(!isLoadWeavePic) {
        for(let i = 1; i <= 12; i++) {
            selectWeavePicPage.innerHTML += `
            <button class="weave-pic-button" id="weave-pic-button-${i}" onclick="selectWeavePic(${i}), clickSoundPlay()">
                <img class="weave-pic" src="/Assets/PictureAndVdo/confidential3/button_ascii${i}.png" alt="">
                <div class="weave-pic-hover background-yellow" id="weave-pic-hover-${i}">
                    <p class="font-dbHelvethaica font-blue">( press )</p>
                </div>
                <div class="weave-pic-selected background-white1" id="weave-pic-selected-${i}">
                    <p class="font-dbHelvethaica font-blue">weave</p>
                </div>
            </button>
            `
        }

        setTimeout(() => {
            for(let i = 1; i <= 12; i++) {
                let weavePicButton = document.getElementById(`weave-pic-button-${i}`)
    
                setTimeout(() => {
                    weavePicButton.style.display = 'block'
                }, 100*i);
            }
        }, 2000)

        isLoadWeavePic = true
    }
    else {
        return
    }
}

let selectedCount = 0
let selectedArray = Array(12).fill(false)
function selectWeavePic(numOfPic) {
    let weavePicSelected = document.getElementById(`weave-pic-selected-${numOfPic}`)
    let allWeavePicSelected = document.getElementsByClassName(`weave-pic-selected`)

    if(!selectedArray[numOfPic-1] && selectedCount < 3) {
        weavePicSelected.style.display = 'flex'
        selectedCount++

        selectedArray[numOfPic-1] = true
    }

    if(selectedCount == 3) {
        setTimeout(() => {
            for(let i = 0; i < 12; i++) {
                allWeavePicSelected[i].style.display = 'flex'
            }
        }, 1000)
        loadHTML('confidentialPreEnd.html', 2000)
    }
}