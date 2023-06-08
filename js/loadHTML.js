function loadHTML(htmlPath, timeout) {
    console.log("Load")

    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.animation = 'fade-out 0.5s'
    }, timeout-300);

    setTimeout(() => {
        window.location.replace(htmlPath);
    }, timeout);
}