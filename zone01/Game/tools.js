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
    clickSound.play();

    if(toolId == 'account-01'){
        document.getElementById('metaIs').style.opacity = '100%';
    }
    document.getElementById(toolId).play();
    document.getElementById(progressId).play();
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
    document.getElementById('resultButton').style.zIndex = 2;
    document.getElementById('hintButton').style.zIndex = -4;
}

function showResult() {
    clickSound.play();
    document.getElementById('resultButton').style.zIndex = -4;
    document.getElementById('endingResult').style.zIndex = 3;
    document.getElementById('nextZoneButton').style.zIndex = 3;
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
    document.getElementById('endingZone').style.zIndex = 4
    document.getElementById('endingZone').style.animation = 'slideIn 1s 1'
    document.getElementById('endingZone').style.animationFillMode = 'forwards'
}