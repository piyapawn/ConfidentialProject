// Define Variables
let imageBox
let dot
let image
let product
let infoBox

let subnetButtons
let subnetTopicAreas
let subnetTopics
let subnetLargeTopicAreas
let subnetLargeTopics
let subnetContentAreas

let body
let bg
let blueBGTexts
let subNetwork

let subWWW

// Declare Variables (after Window Load)
function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()

    setInterval(currentTimeRunning, 1000, 'info-time')

    document.getElementsByTagName("body")[0].style.animation = 'fade-in 0.5s'

    body = document.getElementsByTagName('body')
    console.log('Body : ', body[0])

    bg = document.getElementById('bg')

    blueBGTexts = document.getElementsByClassName('blue-bg')
    subNetwork = document.getElementsByClassName('sub-network')
    for(let i of blueBGTexts) {
        console.log('blueBGTexts Text : ', i.offsetTop)
    }

    subWWW = document.getElementsByClassName('sub-www')

    setTimeout(() => {
        blueBGTexts[0].style.opacity = 1
    }, 500)
}

let checkArray = Array(7).fill(true)
function databaseBoxClick(id) {
    imageBox = document.getElementById(`img-box-${id}`)
    dot = document.getElementById(`dot-${id}`)
    console.log('Check Array: ', checkArray)
    
    if(checkArray[id-1]) {
        dot.style.animationPlayState = 'paused'
        dot.style.background = 'var(--yellow)'
        imageBox.style.display = 'block'
        imageBox.style.animation = 'fade-in 0.5s'
        imageBox.style.opacity = 1
        checkArray[id-1] = false
    }
    else {
        dot.style.animationPlayState = 'running'
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

function subnetButtonClick() {
    subnetButtons = document.getElementsByClassName('sub-network')
    subnetTopicAreas = document.getElementsByClassName('subnet-topic-area')
    subnetTopics = document.getElementsByClassName('subnet-topic-text')
    subnetLargeTopicAreas = document.getElementsByClassName('subnet-large-topic-area')
    subnetContentAreas = document.getElementsByClassName('subnet-content-area')

    for(let i = 0; i < subnetButtons.length; i++) {
        subnetButtons[i].style.height = 'calc(var(--gridHeight) * 15)'

        subnetTopicAreas[i].style.height = 'calc(var(--gridHeight) * 10.5)'
        subnetTopics[i].style.display = 'none'
        subnetLargeTopicAreas[i].style.display = 'flex'
        subnetContentAreas[i].style.display = 'flex'

        console.log('Button Click')
    }
}

function scrollRevealText() {
    let bodyScroll = document.documentElement.scrollTop

    // let scrollText = document.getElementById('scrollTop-text')
    // scrollText.innerHTML = 'Scroll: '+ Math.floor(bodyScroll)

    let bgImage = document.getElementById('bg-image')

    let sticky1 = document.getElementsByClassName('sticky-1')

    for(let i = 0; i < subNetwork.length; i++) {
        let scene = [3550, 3850, 4150, 4450]
        let count = bodyScroll - scene[i]
        if(bodyScroll >= scene[i]) {
            subNetwork[i].style.opacity = (count * 0.01)
            subNetwork[i].style.transform = 'translateY(0)'
        }
        else {
            subNetwork[i].style.opacity = 0
            subNetwork[i].style.transform = 'translateY(calc(var(--gridHeight) * 5))'
        }
    }

    for(let i = 0; i < subWWW.length; i++) {
        let scene = [5745, 6045, 6345]
        let count = bodyScroll - scene[i]
        if(bodyScroll >= scene[i]) {
            subWWW[i].style.opacity = (count * 0.01)
            subWWW[i].style.transform = 'translateY(0)'
        }
        else {
            subWWW[i].style.opacity = 0
            subWWW[i].style.transform = 'translateY(calc(var(--gridHeight) * 5))'
        }
    }

    for(let i = 1; i < blueBGTexts.length-2; i++) {
        if(bodyScroll+window.innerHeight/1.5 >= blueBGTexts[i].offsetTop) {
            blueBGTexts[i].style.opacity = 1
        }
    }
    if(bodyScroll >= 3550) {
        blueBGTexts[4].style.opacity = 1
    }
    if(bodyScroll >= 5745) {
        blueBGTexts[5].style.opacity = 1
    }

    let footerNextPage = document.getElementsByClassName('footer-next-page')[0]
    let arrowDown = document.getElementById('scroll-arrow')
    if(bodyScroll >= 6645) {
        footerNextPage.style.opacity = 1
        arrowDown.style.opacity = 0
    }
    else {
        footerNextPage.style.opacity = 0
        arrowDown.style.opacity = 1
    }

    // for(let i = 0; i < subNetwork.length; i++) {
    //     if(bodyScroll+window.innerHeight/1.8 >= subNetwork[i].offsetTop) {
    //         subNetwork[i].style.opacity = 1
    //         subNetwork[i].style.transform = 'translateY(0)'
    //     }
    // }
}






// Scroll Magic

// const tween = new TiemlineLite()

// tween.add(
//     TweenLite.to('.sticky'), 1, {

//     }
// )

