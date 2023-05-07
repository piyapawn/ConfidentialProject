function windowLoadSection() {
    let section = document.getElementsByClassName('intro2-section')

    // Load Section 2 Pic
    for(let i = 1; i <= 39; i++) {
        section[0].innerHTML += `<img class="sec2-allpic" id="sec2-pic${i}" src="/Assets/PictureAndVdo/ทุกสิ่งที่คุณคลิก/ASCII-art-2-${i}.png" alt="">`
    }

    // Load Section 3 Pic
    for(let j = 1; j <= 39; j++) {
        section[1].innerHTML += `<img class="sec3-allpic" id="sec3-pic${j}" src="/Assets/PictureAndVdo/ทุกสิ่งที่คุณเห็น/ASCII-art-3-${j}.png" alt="">`
    }

    // Load Section 4 Pic
    for(let k = 1; k <= 35; k++) {
        section[2].innerHTML += `<img class="sec4-allpic" id="sec4-pic${k}" src="/Assets/PictureAndVdo/ทุกสิ่งที่คุณกระทำ/ASCII-art-1-${k}.png" alt="">`
    }

    console.log('Offset Sec2: '+section[0].offsetTop)
    console.log('Offset Sec3: '+section[1].offsetTop)
    console.log('Offset Sec4: '+section[2].offsetTop)
}

function loadPage(prevPageId, nextPageId) {
    let prevPage = document.getElementById(prevPageId)
    let nextPage = document.getElementById(nextPageId)

    console.log("prev page: "+prevPageId+"| next page: "+nextPageId)

    document.documentElement.style.setProperty('--cursor', 'auto')

    if(prevPageId === "intro1" && nextPageId === "intro2") {
        setTimeout(() => {
            nextPage.style.display = "inline-block"
        }, 5600)

        setTimeout(() => {
            prevPage.style.opacity = 0
            prevPage.style.display = "none"
        }, 5800);

        setTimeout(() => {
            nextPage.style.opacity = 1
        }, 6000);
    }
    else {
        nextPage.style.display = "inline-block"
        nextPage.style.zIndex = 1
        setTimeout(() => {
            nextPage.style.opacity = 1
        }, 500)
        
        prevPage.style.opacity = 0
        setTimeout(() => {
            prevPage.style.display = "none"
            prevPage.style.zIndex = -999
        }, 500)
    }
}

function activeFade() {
    let firstText = document.getElementById("firstText")
    let accessButton = document.getElementById("accessButton")
    let intro1Pic = document.getElementById("intro1-pic")
    let intro1Gif = document.getElementById("intro1-gif")
    let light = document.getElementById("light")

    firstText.style.display = "none"
    accessButton.style.display = "none"

    light.style.background = "white"
    light.style.animation = "whiteToTransparent 2s ease-in alternate"
    setTimeout(() => {
        light.style.background = "transparent"
        intro1Pic.style.display = "none"
        intro1Gif.style.display = "block"
    }, 2000);
}

function revealButtonClick() {
    document.getElementById('accept-gif').style.display = 'none'
}

function acceptButtonClick() {
    let intro3 = document.getElementById("intro3");
    intro3.style.transform = "translateY(-100%)";
    intro3.style.transition = "0.5s";

    let body = document.getElementsByTagName("body")[0]
    body.style.background = "white"
    loadHTML('login.html', 200)
}

function intro2Scroll() {
    let page2 = document.getElementById('intro2')
    let section = document.getElementsByClassName('intro2-section')
    let sec2OffsetTop = section[0].offsetTop
    let sec3OffsetTop = section[1].offsetTop

    console.log('Scroll Offset: '+page2.scrollTop)

    // Scroll Section 2
    let sec2AllTextBoxes = document.getElementsByClassName('sec2-all-text-boxes')
    scrollReveal(2, sec2AllTextBoxes, 'text', 0, ['ทุกสิ่งที่คุณคลิก', 'เป็นแผนของเรา'])

    let sec2AllPic = document.getElementsByClassName('sec2-allpic')
    scrollReveal(2, sec2AllPic, 'pic', 0)

    // Scroll Section 3
    let sec3AllTextBoxes = document.getElementsByClassName('sec3-all-text-boxes')
    scrollReveal(3, sec3AllTextBoxes, 'text', sec2OffsetTop, ['ทุกสิ่งที่คุณเห็น', 'เป็นแผนของเรา'])

    let sec3AllPic = document.getElementsByClassName('sec3-allpic')
    scrollReveal(3, sec3AllPic, 'pic', sec2OffsetTop)

    // Scroll Section 4
    let sec4AllTextBoxes = document.getElementsByClassName('sec4-all-text-boxes')
    scrollReveal(4, sec4AllTextBoxes, 'text', sec3OffsetTop, ['ทุกสิ่งที่คุณกระทำ เป็นแผนของเรา'])

    let sec4AllPic = document.getElementsByClassName('sec4-allpic')
    scrollReveal(4, sec4AllPic, 'pic', sec3OffsetTop)

    // Scroll to Next Page
    let page3 = document.getElementById('intro3')
    if(page2.scrollTop > section[2].offsetTop) {
        // page2.style.opacity = 0
        // page2.style.zIndex = 1
        loadPage('intro2', 'intro3')
    }
}

let typingCall1 = true
let typingCall2 = true
let typingCall3 = true
let typingCall4 = true
let typingCall5 = true

function scrollReveal(section, secClass, textOrPic, secOffsetTop, text) {
    let page2 = document.getElementById('intro2')
    let sec2OffsetTop = document.getElementsByClassName('intro2-section')[0].offsetTop

    if(textOrPic === 'text') {
        for(let i = 0; i < secClass.length; i++) {
            if(page2.scrollTop >= secClass[i].offsetTop+(secOffsetTop+(0.3*sec2OffsetTop))) {
                secClass[i].style.opacity = 1
                secClass[i].style.transform = 'scaleX(1)'
                secClass[i].style.transition = "1s"
                typingTextCheck(i, text[i], section)
            }
        }
    }
    else if(textOrPic === 'pic') {
        for(let i = 0; i < secClass.length; i++) {
            if(page2.scrollTop >= secClass[i].offsetTop+(secOffsetTop+(0.1*sec2OffsetTop))) {
                secClass[i].style.opacity = 1
                secClass[i].style.transition = "0.05s"
            }
        }
    }
}

function typingTextCheck(index, text, section) {
    if(section === 2 && index == 0) {
        if(typingCall1) {
            typingTextAnimtion(index, text, section)
            typingCall1 = false
        }
    }
    else if(section === 2 && index == 1) {
        if(typingCall2) {
            typingTextAnimtion(index, text, section)
            typingCall2 = false
        }
    }
    else if(section === 3 && index == 0) {
        if(typingCall3) {
            typingTextAnimtion(index, text, section)
            typingCall3 = false
            console.log('Text 3')
        }
    }
    else if(section === 3 && index == 1) {
        if(typingCall4) {
            typingTextAnimtion(index, text, section)
            typingCall4 = false
            console.log('Text 4')
        }
    }
    else if(section === 4 && index == 0) {
        if(typingCall5) {
            typingTextAnimtion(index, text, section)
            typingCall5 = false
        }
    }
}

function typingTextAnimtion(index, text, section) {
    let textSec = document.getElementsByClassName(`sec${section}-all-text`)
    setTimeout(() => {
        for(let i = 0; i < text.length; i++) {
            setTimeout(() => {
                textSec[index].innerHTML += text[i]
            }, 100*i);
        }
    }, 800)
}