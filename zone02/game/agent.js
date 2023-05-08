function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
}


var choosenUser = [];
var isQuiz01Done = false;
var isQuiz02Done = false;
var isQuiz03Done = false;

// Add quantity of user that selected
function addQuant(quantityId, answer, sendBtId) {
    const quantityEle = document.getElementById(quantityId);
    let quantity = parseInt(quantityEle.innerHTML);

    storing(answer);
    if(quantityId === 'quantity1' && quantity<5) {
        quantity += 1;
    }else if ( quantity < 3 ) {
        quantity += 1;
    }

    quantityEle.innerHTML = quantity;

    if (quantity === 5 || ( quantity === 3 && quantityId !== 'quantity1')) {
        disableBt(sendBtId);
        document.getElementById(sendBtId).style.background = '#D0FF0B';
    }
}

// end this zone, when task completed
function endIt() {
    document.getElementById('endingZone').style.zIndex = 4
    document.getElementById('endingZone').style.animation = 'slideIn 1s 1'
    document.getElementById('endingZone').style.animationFillMode = 'forwards'
}

// sending the answer of selected user
function storing(answer) {
    choosenUser.push(answer);
}

// check the answer if it all is correct or not
function checkAns(sendBtId, quantId, unitId) {
    if(choosenUser.includes('0')) {
        choosenUser = [];
        document.getElementById(quantId).innerHTML = '0';
        disableBt(sendBtId)
        document.getElementById(sendBtId).style.background = '#D0FF0B';
        alert('Some user is not matching requirement.\nPlease select again.');
    }
    else if(!choosenUser.includes('0')){
        document.getElementById(quantId).innerHTML = 'COMPLETE';
        document.getElementById(quantId).style.border = 'solid 1px';
        document.getElementById(quantId).style.padding = '5px';
        document.getElementById(quantId).style.textDecoration = 'none';
        document.getElementById(unitId).style.display = 'none';
        document.getElementById(sendBtId).style.display = 'none';
        if(sendBtId == 'send01') {
            isQuiz01Done = true;
        } else if(sendBtId == 'send02') {
            isQuiz02Done = true;
        } else if(sendBtId == 'send03') {
            isQuiz03Done = true;
        }
    }

    // if finish every quiz , end this zone
    if( isQuiz01Done && isQuiz02Done && isQuiz03Done) {
        alert('its end yay!');
        endIt();
    }
}

// toggle button
function disableBt(buttonId) {
    let isActive = document.getElementById(buttonId).disabled
    document.getElementById(buttonId).disabled = !isActive;
    if(!isActive) {
        document.getElementById(buttonId).style.cursor = 'default';
    }
    else {
        document.getElementById(buttonId).style.cursor = 'pointer';
    }
}

function toggle(eleId) {
    document.getElementById(eleId).classList.toggle('showRequire');
}

function showRequirement(questId, otherBt1, otherBt2, userId) {
    toggle(questId);
    toggle(userId);
    disableBt(otherBt1);
    disableBt(otherBt2);
}

function showhideInfo(infoId, showorhide, bt) { 
    if(showorhide) {
        document.getElementById(infoId).style.height = '100%'
        document.getElementById(infoId).style.width = '100%'
        document.getElementById(infoId).style.transition = 'height 0.3s, width 0.5s'
        document.getElementById(bt).style.zIndex = 3
    }
    else {
        document.getElementById(infoId).style.height = '0%'
        document.getElementById(infoId).style.width = '0%'
        document.getElementById(infoId).style.transition = 'height 0.3s, width 0.5s'
        document.getElementById(bt).style.zIndex = -3
    }
}

// guide animation
function activeGuide(current, next) {
    document.getElementById(current).style.display = 'none'
    document.getElementById(next).style.display = 'block'
    document.getElementById(next).style.zIndex = 3
    document.getElementById(next).style.animation = "fadeClear 0.7s 1"
    if(current == 'guide02') {
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
