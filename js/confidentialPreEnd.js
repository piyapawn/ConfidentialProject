// Page
let topHead
let ground1
let ground2
let tableBG1

// Sub Ground 1
let sg1LeftText
let sg1MiddleText1
let sg1MiddleTextBox2
let sg1MiddleText2

// Sub Ground 1
let sg2TopBottomText
let sg2MiddleLeftText
let sg2MiddleMiddleText
let sg2MiddleRightText
let sg2BottomRightTopText

// Table BG 1
let tbTextBox
let tbText

// Weave Box
let weaveBox1
let weaveBox2
let weaveBox3
let weaveBox4

// Grid Block
let gridBlock

function windowLoad() {
    // Page
    topHead = document.getElementById('top-head')
    ground1 = document.getElementById('ground-1')
    ground2 = document.getElementById('ground-2')
    tableBG1 = document.getElementById('table-bg-1')

    // Sub Ground 1
    sg1LeftText = document.getElementById('sg1-left-text')
    sg1MiddleText1 = document.getElementById('sg1-middle-text1')
    sg1MiddleText2 = document.getElementById('sg1-middle-text2')
    sg1MiddleTextBox2 = document.getElementById('sg1-middle-text-box2')

    // Sub Ground 1
    sg2TopBottomText = document.getElementById('sg2-top-bottom-text')
    sg2MiddleLeftText = document.getElementById('sg2-middle-left-text')
    sg2MiddleMiddleText = document.getElementById('sg2-middle-middle-text')
    sg2MiddleRightText = document.getElementById('sg2-middle-right-text')
    sg2BottomRightTopText = document.getElementById('sg2-bottom-right-top-text')

    // Weave Box
    weaveBox1 = document.getElementById('weave-box-1')
    weaveBox2 = document.getElementById('weave-box-2')
    weaveBox3 = document.getElementById('weave-box-3')
    weaveBox4 = document.getElementById('weave-box-4')

    // Grid Block
    gridBlock = document.getElementsByClassName('grid-fade')

    // Table BG 1
    tbTextBox = document.getElementById('tb-text-box')
    tbText = document.getElementById('tb-text')

    bottomLineActivate(1)
    bottomLineActivate(2)
    revealListofElement([sg1LeftText, sg1MiddleText1, weaveBox1])

    console.log('Ground 1 Top: ', ground1.offsetTop)
    console.log('Ground 1 Bottom: ', ground1.offsetTop + ground1.offsetHeight)
    console.log('TableBG 1 Top: ', tableBG1.offsetTop)
    console.log('TableBG 1 Bottom: ', tableBG1.offsetTop + tableBG1.offsetHeight)

    const audio = document.querySelector("audio");
    audio.play();
}

function scrollAnimation() {
    // let planeScroll = document.getElementById('plane-area').scrollTop

    let bodyScroll = document.documentElement.scrollTop

    let scrollText = document.getElementById('scroll-text-show')
    scrollText.innerHTML = Math.floor(bodyScroll)

    const windowHeight = window.innerHeight

    const ground1OffsetBottom = ground1.offsetTop + ground1.offsetHeight
    const ground2OffsetTop = ground1OffsetBottom
    const tableBG1OffsetTop = tableBG1.offsetTop
    const tableBG1OffsetBottom = tableBG1.offsetTop + tableBG1.offsetHeight

    let leftLine = document.getElementById('left-line')

    let eachScroll = 120

    // Ground 1 Reveal
    if(bodyScroll > (ground1OffsetBottom - windowHeight)) {
        bottomLineActivate(3)
        bottomLineActivate(4)
        revealListofElement([sg1MiddleTextBox2, sg1MiddleText2])
    }
    // Ground 2 Reveal
    if(bodyScroll >= ground2OffsetTop) {
        bottomLineActivate(5)
        revealListofElement([weaveBox2, sg2TopBottomText])
    }
    if(bodyScroll > ground2OffsetTop+(eachScroll*2.5)) {
        bottomLineActivate(6)
        revealListofElement([sg2MiddleLeftText])
    }
    if(bodyScroll > ground2OffsetTop+(eachScroll*5)) {
        bottomLineActivate(7)
        revealListofElement([sg2MiddleMiddleText])
    }
    if(bodyScroll > ground2OffsetTop+(eachScroll*7.5)) {
        bottomLineActivate(8)
        revealListofElement([sg2MiddleRightText])
    }
    if(bodyScroll > ground2OffsetTop+(eachScroll*10)) {
        bottomLineActivate(9)
        leftLine.style.height = '100%'
        revealListofElement([weaveBox3, sg2BottomRightTopText])
    }
    if(bodyScroll > (tableBG1OffsetTop - windowHeight)) {
        bottomLineActivate(10)
    }

    // TableBG 1 Reveal
    if(bodyScroll >= (tableBG1OffsetTop - windowHeight/2)) {
        revealListofElement([weaveBox4, tbTextBox, tbText])
    }

    // TableBG 2 Reveal
    if(bodyScroll >= tableBG1OffsetBottom) {
        topHead.style.display = 'none'
        ground1.style.display = 'none'
        ground2.style.display = 'none'
        tableBG1.style.display = 'none'
        document.getElementsByClassName('scrollmagic-pin-spacer')[0].style.display = 'none'

        setTimeout(() => {
            revealListofElement([gridBlock[0], gridBlock[1], gridBlock[2], gridBlock[8], gridBlock[9], gridBlock[10]])
        }, 1000)
        setTimeout(() => {
            revealListofElement([gridBlock[3], gridBlock[4], gridBlock[5], gridBlock[6]])
        }, 1250)
        setTimeout(() => {
            revealListofElement([gridBlock[7], gridBlock[11], gridBlock[12], gridBlock[13]])
        }, 1500)

        loadHTML('confidentialEnd.html', 2000)
    }
}

function bottomLineActivate(numOfLine) {
    let bottomLine = document.getElementById(`bottom-line-${numOfLine}`)
    bottomLine.style.width = '100%'
}

function revealListofElement(listOfElement) {
    for(let i = 0; i < listOfElement.length; i++) {
        listOfElement[i].style.opacity = 1
    }
}