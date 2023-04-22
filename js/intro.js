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