function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
}

const clickSource = "/zone01/audio/clickedS.mp3"
const clickSound = new Audio(clickSource);

function showToolInfo(infoId, buttonId) {
    clickSound.play();

    document.getElementById(infoId).style.zIndex = 2;
    document.getElementById(buttonId).style.animation = "none";
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).style.cursor = 'default';
    document.getElementById(buttonId).style.backgroundColor = 999999;
}

function playVid(toolId, progressId, infoId) {
    let toolVideo = document.getElementById(toolId);
    let progressVideo = document.getElementById(progressId);

    clickSound.play();

    if(toolId == 'account-01'){
        document.getElementById('metaIs').style.opacity = '100%';
    }
    toolVideo.style.visibility = 'visible';
    progressVideo.style.visibility = 'visible';
    toolVideo.play();
    progressVideo.play();
    document.getElementById(infoId).style.display = "none";
}

function disabledCurrentVid(tool, progress) {
    document.getElementById(tool).style.display = "none";
    document.getElementById(progress).style.display = "none";
}

function activeNextBt(nextBt, currentTool, currentProgress) {
    if(currentTool == 'account-02') {
        document.getElementById('metaIs').style.opacity = '0%';
    }
    document.getElementById(nextBt).style.animation = "blink 0.7s infinite";
    document.getElementById(nextBt).disabled = false;
    document.getElementById(nextBt).style.cursor = 'pointer';
    disabledCurrentVid(currentTool, currentProgress)
    if (nextBt == "tab-social") {
        document.getElementById('tab-normal').style.backgroundColor = 999999;
        document.getElementById('tab-social').style.backgroundColor = 'white';
        document.getElementById("tab-social").style.cursor = "pointer";
    }
}

// for social media part
function activeSocialZone() {
    document.getElementById("forNametag").innerHTML = "for social media";
    document.getElementById("tab-social").style.backgroundColor = "whtie";
    document.getElementById("tab-social").style.animation = "none";
    document.getElementById("iconSet1").style.display = "none";
    document.getElementById("iconSet2").style.display = "flex";
}

function playContVid(tool, progress, nextTool, nextProgress) {
    disabledCurrentVid(tool, progress)
    document.getElementById(nextTool).play();
    document.getElementById(nextProgress).play();
}

// show button to result , end zone01
function toResult() {
    const resultBt = document.getElementById('resultButton');
    const hintBtn = document.getElementById('hintButton');
    resultBt.style.zIndex = 2;
    resultBt.style.visibility = "visible";

    hintBtn.style.zIndex = -4;
    hintBtn.style.visibility = "hidden";
}

function showResult() {
    clickSound.play();
    const resultBt = document.getElementById('resultButton');
    const endBg = document.getElementById('endingResult');
    const nextZBt = document.getElementById('nextZoneButton');

    resultBt.style.zIndex = -4;
    resultBt.style.visibility = 'hidden';
    endBg.style.zIndex = 3;
    endBg.style.visibility = 'visible'
    nextZBt.style.zIndex = 3;
    nextZBt.style.visibility = 'visible'
}

// toggle tool info
function toggle(eleId) {
    clickSound.play();

    document.getElementById(eleId).classList.toggle('showRequire');
}

// guide animation
function activeGuide(current, next) {
    clickSound.play();
    document.getElementById(current).style.display = 'none'
    document.getElementById(next).style.display = 'block'
    document.getElementById(next).style.zIndex = 3
    document.getElementById(next).style.animation = "fadeClear 0.7s 1"
    if(current == 'guide03') {
        document.getElementById(next).style.display = 'none'
        document.getElementById('hintButton').style.zIndex = 3
    }
}

function showhideGuide(button) {
    clickSound.play();
    if(button == 'hintButton') {
        document.getElementById('guidePic').style.zIndex = 3
    }
    else{
        document.getElementById('guidePic').style.zIndex = -4
    }
}

function endIt() {
    const bgAudio = document.getElementById('bgAudio');
    const endSource = "/zone01/audio/gameEnd.mp3";
    const endSound = new Audio(endSource);
    bgAudio.pause();
    endSound.play()

    clickSound.play();
    const endZBt = document.getElementById('endingZone')
    endZBt.style.zIndex = 4
    endZBt.style.animation = 'slideIn 1s 1'
    endZBt.style.animationFillMode = 'forwards'
}