function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
}

const value = 71;
const clickSource = "/zone01/audio/clickedS.mp3"
const clickSound = new Audio(clickSource);

function clickSoundPlay() {
    clickSound.play();
}

function selectContent(vidId, clearVidId, crContentId, nContentId) {
    let currentContent = document.getElementById(crContentId);
    let nextContent = document.getElementById(nContentId);
    
    clickSound.play();
    clearFeed(clearVidId);

    playVid(vidId);
    // hide current content
    currentContent.style.display = 'none'
    // show next content
    nextContent.style.display = 'block'

    const staticimg =  document.getElementById('staticimg')
    // changing the static img to specific only for this content04
    if(nContentId == 'content04') {
        staticimg.src = "/zone03/game/contents/choices/static-q4.png"
    }else if(crContentId == 'content04') {
        switch(vidId) {
            case 'vid07':
                staticimg.src = "/zone03/game/contents/choices/static-q42.png";
                break;
            case 'vid08':
                staticimg.src = "/zone03/game/contents/choices/static-q41.png";
                break;
        }
    }
}

var angle = 0;
function setClickRediant() {
      angle += (angle === 270) ? 45 : 90;
      var gradient = "conic-gradient(#D0FF0B " + angle + "deg, transparent 0deg)";
      document.getElementById("radiant").style.background = gradient;
}

function setProgress(score) {
    let progress = document.getElementById('progress');
    let currentW = progress.offsetWidth;
    const audioSourceC = "/zone01/audio/correctS.mp3"
    const audioSourceF = "/zone01/audio/falseS.mp3"
    const soundC = new Audio(audioSourceC)
    const soundF = new Audio(audioSourceF)

    console.log('Its width: '+currentW);
    if(score == '1' && currentW < 500) {
        setClickRediant()
        if(currentW+value >= 500) {
            progress.style.width = '500' +'px';
        }
        progress.style.width = currentW + value +'px';
        soundC.play();
    }else if (score == '0') {
        if(currentW-value < 71) {
            progress.style.width = '0' +'px';
            return
        }
        progress.style.width = currentW - value +'px';
        soundF.play();
    }

    togglePostSelection('enable')
}

function playVid(vidId) {
    let vid = document.getElementById(vidId);
    const imgStatic = document.getElementById('staticimg');
    
    imgStatic.style.zIndex = '-2'
    vid.style.visibility = 'visible';
    vid.play();
    togglePostSelection('disable');
}

function togglePostSelection(action) {
    
    switch(action) {
        case 'enable':
            const postSelectionE = document.querySelectorAll('.postOver');
            for (let i = 0; i < postSelectionE.length; i++) {
                postSelectionE[i].disabled = false;
                postSelectionE[i].style.cursor = "pointer";
                postSelectionE[i].classList.add('post');
                postSelectionE[i].classList.remove('postOver');
                postSelectionE[i].style.opacity = "1";
            }
            break;
            case 'disable':
            const postSelection = document.querySelectorAll('.post');
            for (let i = 0; i < postSelection.length; i++) {
                postSelection[i].disabled = true;
                postSelection[i].style.cursor = "default";
                postSelection[i].classList.add('postOver');
                postSelection[i].classList.remove('post');
                postSelection[i].style.opacity = "0.5";
            }
            break;
    }

}

function clearFeed(clearVidId) {
    document.getElementById(clearVidId).style.display = 'none';
}

function gameOver() {
    // show the game over info img
    const restartGuide = document.getElementById("restart");
    restartGuide.style.display = "block";

    // set the opacity and disable the contents and interest
    const collectContents = document.querySelectorAll(".contents");

    for (let i = 0; i < collectContents.length; i++) {
        collectContents[i].style.opacity = "0.5";

    }
    togglePostSelection('disable')
}

function hideVid(contentId, score) {
    let vid = document.getElementById(contentId);
    let hovPic = document.getElementById('hoverPic');
    const imgStatic = document.getElementById('staticimg');

    imgStatic.style.zIndex = '1'
    vid.style.display = 'none';

    setProgress(score);

    let progress = document.getElementById('progress');
    let currentW = progress.offsetWidth;

    if(currentW <= 0) {
        gameOver();
        return;
    }

    if(contentId == 'content05') {
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
    clickSound.play();
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
    clickSound.play();
    if(button == 'hintButton') {
        document.getElementById('guidePic').style.zIndex = 3
    }
    else{
        document.getElementById('guidePic').style.zIndex = -4
    }
}

// hide box
function toggleNotice(action) {
    clickSound.play();
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
    const endingEle = document.getElementById('endingZone');
    setProgress(score);
    endingEle.style.zIndex = 4
    endingEle.style.visibility = 'visible'
    endingEle.style.animation = 'slideIn 1s 1'
    endingEle.style.animationFillMode = 'forwards'

    // adding ending zone bg
    const bgAudio = document.getElementById('bgAudio');
    const endSoundSource = "/zone01/audio/gameEnd.mp3";
    const endSound = new Audio(endSoundSource);
    bgAudio.pause();
    endSound.play()
}
