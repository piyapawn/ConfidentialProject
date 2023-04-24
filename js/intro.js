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
        nextPage.style.zIndex = 1
        nextPage.style.opacity = 1
        nextPage.style.display = "inline-block"
        
        prevPage.style.zIndex = -999
        prevPage.style.opacity = 0
        prevPage.style.display = "none"
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

    // console.log('Scroll Offset: '+page2.scrollTop)

    // Scroll Section 2
    // if(page2.scrollTop == section[0].offsetTop) {
    //     for(let i = 0; i <= 38; i++) {
    //         // sec2AllPic[i].style.display = 'inline-block'
    //         // sec2AllPic[i].style.animation = `reveal 0.1s`
    //         // sec2AllPic[i].style.animationDelay = `${0.5*i}s`
    //         sec2AllPic[i].style.opacity = 1
    //         sec2AllPic[i].style.transition = "0.05s"
    //         sec2AllPic[i].style.transitionDelay = `${0.01*i}s`
    //     }
    //     console.log('Scroll Sec2')
    // }

    // Scroll Section 2
    let sec2AllPic = document.getElementsByClassName('sec2-allpic')
    for(let i = 0; i < 39; i++) {
        if(page2.scrollTop >= sec2AllPic[i].offsetTop+(0.1*sec2OffsetTop)) {
            sec2AllPic[i].style.opacity = 1
            sec2AllPic[i].style.transition = "0.05s"
        }
    }

    // Scroll Section 3
    let sec3AllPic = document.getElementsByClassName('sec3-allpic')
    for(let i = 0; i < 39; i++) {
        if(page2.scrollTop >= sec3AllPic[i].offsetTop+(sec2OffsetTop+(0.1*sec2OffsetTop))) {
            sec3AllPic[i].style.opacity = 1
            sec3AllPic[i].style.transition = "0.05s"
        }
    }

    // Scroll Section 4
    let sec4AllPic = document.getElementsByClassName('sec4-allpic')
    for(let i = 0; i < 35; i++) {
        if(page2.scrollTop >= sec4AllPic[i].offsetTop+(sec3OffsetTop+(0.1*sec2OffsetTop))) {
            sec4AllPic[i].style.opacity = 1
            sec4AllPic[i].style.transition = "0.05s"
        }
    }

    // Scroll to Next Page
    let page3 = document.getElementById('intro3')
    if(page2.scrollTop > section[2].offsetTop) {
        page2.style.opacity = 0
        page2.style.zIndex = 1
    }
}