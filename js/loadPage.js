function loadPage(nextPageId, prevPageId) {
    let nextPage = document.getElementById(nextPageId)
    let prevPage = document.getElementById(prevPageId)

    console.log("next page: "+nextPageId+"| prev page: "+prevPageId)

    if(nextPageId === "intro3" && prevPageId === "intro2") {
        setTimeout(() => {
            nextPage.style.zIndex = 1
            nextPage.style.opacity = 1
            nextPage.style.display = "inline-block"
            
            prevPage.style.zIndex = -999
            prevPage.style.opacity = 0
            prevPage.style.display = "none"
        }, 4000);
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
    let light = document.getElementsByClassName("light")
    light[0].style.background = "black"
    light[0].style.animation = "blackToTransparent 2s ease-in alternate"
    setTimeout(() => {
        light[0].style.background = "transparent"
    }, 2000);

    let fade = document.getElementById("fadingEffect")
    fade.style.zIndex = 10
    fade.style.animation = "fadeBlack 4s ease-in alternate"
    fade.style.animationDelay = "2s"
    setTimeout(() => {
        fade.style.display = "none"
    }, 6000);
}