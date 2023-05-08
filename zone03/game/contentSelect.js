function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
}

const value = 71;

function selectContent(vidId, clearVidId, crContentId, nContentId) {
    let currentContent = document.getElementById(crContentId);
    let nextContent = document.getElementById(nContentId);

    clearFeed(clearVidId);
    playVid(vidId);
    // hide current content
    currentContent.style.display = 'none'
    // show next content
    nextContent.style.display = 'block'
}

function setProgress(score) {
    let progress = document.getElementById('progress');
    let currentW = progress.offsetWidth;
    console.log('Its width: '+currentW);
    if(score == '1' && currentW < 500) {
        if(currentW+value >= 500) {
            progress.style.width = '500' +'px';
        }
        progress.style.width = currentW + value +'px';
    }else if (score == '0') {
        if(currentW-value < 71) {
            progress.style.width = '0' +'px';
            return
        }
        progress.style.width = currentW - value +'px';
    }
}

function playVid(vidId) {
    let vid = document.getElementById(vidId);
    vid.play();
}

function clearFeed(clearVidId) {
    document.getElementById(clearVidId).style.display = 'none';
}

function hideVid(contentId, score) {
    let vid = document.getElementById(contentId);
    let hovPic = document.getElementById('hoverPic');
    vid.style.display = 'none';

    setProgress(score);

    if(contentId == 'content05') {
        alert('Wow ene!')
        return;
    }
    // change hover pic & hide vid
    if(contentId == 'content01') {
        hovPic.style.background = 'url(/zone03/game/contents/hover/hover2.png)';
        document.getElementById('vid01').style.display = 'none';
        document.getElementById('vid02').style.display = 'none';
    }else if(contentId == 'content02') {
        hovPic.style.background = 'url(/zone03/game/contents/hover/hover3.png)';
        document.getElementById('vid03').style.display = 'none';
        document.getElementById('vid04').style.display = 'none';
    }else if(contentId == 'content03') {
        hovPic.style.background = 'url(/zone03/game/contents/hover/hover4.png)';
        document.getElementById('vid05').style.display = 'none';
        document.getElementById('vid06').style.display = 'none';
    }else if(contentId == 'content04') {
        hovPic.style.background = 'url(/zone03/game/contents/hover/hover5.png)';
        document.getElementById('vid07').style.display = 'none';
        document.getElementById('vid08').style.display = 'none';
    }
}

function toggle(eleId) {
    document.getElementById(eleId).classList.toggle('showRequire');
}

// guide animation
function activeGuide(current, next) {
    document.getElementById(current).style.display = 'none'
    document.getElementById(next).style.display = 'block'
    document.getElementById(next).style.zIndex = 3
    document.getElementById(next).style.animation = "fadeClear 0.7s 1"
    if(current == 'guide05') {
        document.getElementById('guide').style.display = 'none'
        document.getElementById('hintButton').style.zIndex = 3
    }
}

function showhideGuide(button) {
    if(button == 'hintButton') {
        document.getElementById('guidePic').style.zIndex = 3
    }
    else{
        document.getElementById('guidePic').style.zIndex = -4
    }
}

// hide box
function toggleNotice(action) {
    if(action == 'show') {
        document.getElementById('noticeBox').style.display = 'block';
        document.getElementById('closeBt').style.display = 'block';
        document.getElementById('showNotice').style.display = 'none';
    } else if(action == 'close') {
        document.getElementById('noticeBox').style.display = 'none';
        document.getElementById('closeBt').style.display = 'none';
        document.getElementById('showNotice').style.display = 'block';
    }
}

// end this zone, when task completed
function endIt(score) {
    setProgress(score);
    document.getElementById('endingZone').style.zIndex = 4
    document.getElementById('endingZone').style.animation = 'slideIn 1s 1'
    document.getElementById('endingZone').style.animationFillMode = 'forwards'
}
