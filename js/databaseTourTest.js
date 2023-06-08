// Define Variables
let imageBox
let yellowDot

let image
let product
let infoBox

let body
let bg

let subWWW

// CSS Root Variables
let gridVw = 2.565
let gridPx

// Window
let windowHeight

// Declare Variables (after Window Load)
function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()

    setInterval(currentTimeRunning, 1000, 'info-time')

    document.getElementsByTagName("body")[0].style.animation = 'fade-in 0.5s'

    body = document.getElementsByTagName('body')

    bg = document.getElementById('bg')

    // Window
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    gridPx = (windowWidth * gridVw) / 100
    console.log('Grid px: ', Math.ceil(gridPx*64))
}

let checkArray = Array(7).fill(true)
function databaseBoxClick(id) {
    imageBox = document.getElementById(`img-box-${id}`)
    yellowDot = document.getElementById(`yellow-dot-${id}`)
    console.log('Check Array: ', checkArray)
    
    if(checkArray[id-1]) {
        yellowDot.style.animationPlayState = 'paused'
        yellowDot.style.background = 'var(--yellow)'
        imageBox.style.display = 'block'
        imageBox.style.animation = 'fade-in 0.5s'
        imageBox.style.opacity = 1
        checkArray[id-1] = false
    }
    else {
        yellowDot.style.animationPlayState = 'running'
        imageBox.style.animation = 'fade-out 0.5s'
        imageBox.style.opacity = 0
        setTimeout(() => {
            imageBox.style.display = 'none'
        }, 500)
        checkArray[id-1] = true
    }
}

function imageHover(id) {
    image = document.getElementById(`img-${id}`)
    product = document.getElementById(`product-${id}`)
    infoBox = document.getElementById(`info-${id}`)

    image.style.display = 'none'
    product.style.display = 'flex'
    infoBox.style.display = 'flex'
}

function imageNotHover(id) {
    image = document.getElementById(`img-${id}`)
    product = document.getElementById(`product-${id}`)
    infoBox = document.getElementById(`info-${id}`)

    image.style.display = 'block'
    product.style.display = 'none'
    infoBox.style.display = 'none'
}

function scrollAnimation() {
    let bodyScroll = document.documentElement.scrollTop

    let scrollText = document.getElementById('scroll-text-show')
    scrollText.innerHTML = Math.floor(bodyScroll)

    let subnetBox = document.getElementsByClassName('sub-network')

    let subwwwBox = document.getElementsByClassName('sub-www')

    // Subnet Offset
    let subnetContentAreaTop = document.getElementById('subnet-content-area-top')
    let scaOffsetTop = Math.floor(subnetContentAreaTop.offsetTop + gridPx)

    // WWW Offset
    let wwwContentAreaTop = document.getElementById('www-content-area-top')
    let wwwcaOffsetTop = Math.floor(wwwContentAreaTop.offsetTop + gridPx)

    boxReveal(subnetBox[0], scaOffsetTop, 2)
    boxReveal(subnetBox[1], scaOffsetTop, 4)
    boxReveal(subnetBox[2], scaOffsetTop, 6)
    boxReveal(subnetBox[3], scaOffsetTop, 8)

    boxReveal(subwwwBox[0], wwwcaOffsetTop, 3)
    boxReveal(subwwwBox[1], wwwcaOffsetTop, 6)
    boxReveal(subwwwBox[2], wwwcaOffsetTop, 9)

    let footer = document.getElementById('footer-next-page')
    let scrollArrow = document.getElementById('scroll-arrow')

    if(bodyScroll >= wwwcaOffsetTop + (120 * 12)) {
        revealElement(footer, 'flex')
        hideElement(scrollArrow)
    }
    else {
        revealElement(scrollArrow, 'block')
        hideElement(footer)
    }
}

function boxReveal(elementBox, scaOffsetTop, numEach) {
    let bodyScroll = document.documentElement.scrollTop

    if(bodyScroll >= scaOffsetTop + (120 * numEach)) {
        elementBox.style.opacity = 1
        elementBox.style.transform = 'translateY(0%)'
    }
    else {
        elementBox.style.opacity = 0
        elementBox.style.transform = 'translateY(calc(var(--grid) * 5)'
    }
}

function subnetButtonClick() {
    let subnetButtons = document.getElementsByClassName('sub-network')
    let subnetTopicAreas = document.getElementsByClassName('subnet-topic-area')
    let subnetTopics = document.getElementsByClassName('subnet-topic-text')
    let subnetLargeTopicAreas = document.getElementsByClassName('subnet-large-topic-area')
    let subnetContentBoxAreas = document.getElementsByClassName('subnet-content-box-area')

    for(let i = 0; i < subnetButtons.length; i++) {
        subnetButtons[i].style.height = 'calc(var(--grid) * 15)'

        subnetTopicAreas[i].style.height = 'calc(var(--grid) * 10.5)'
        subnetTopics[i].style.display = 'none'
        subnetLargeTopicAreas[i].style.display = 'flex'
        subnetContentBoxAreas[i].style.display = 'flex'

        console.log('Button Click')
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