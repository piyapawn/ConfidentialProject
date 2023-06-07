function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
}


var choosenUser = [];
var isQuiz01Done = false;
var isQuiz02Done = false;
var isQuiz03Done = false;

// Add quantity of user that selected
function addQuant(quantityId, answer, sendBtId, buttonId, userBtId) {
    const quantityEle = document.getElementById(quantityId);
    let quantity = parseInt(quantityEle.innerHTML);
    let userButton = document.getElementById(userBtId);
    
    // disable choose button of this user, prevent repeat submit
    disableBt(buttonId)
    document.getElementById(buttonId).style.border = "solid 0.5px #0D3BFC"
    // If user is choosen, styling navy border
    userButton.style.border = "solid 3px #0D3BFC";

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
    let endEle = document.getElementById('endingZone')
    endEle.style.zIndex = 4
    endEle.style.animation = 'slideIn 1s 1'
    endEle.style.animationFillMode = 'forwards'
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
        endIt();
    }
}

//   button
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

function showUserData(userId) {
    let userEle = document.getElementById(userId)
    toggle(userId);
    userEle.style.animation = "fadeClear 1s 1"
    userEle.style.animationFillMode = 'forwards'
}

// this function needs client ID and user ID that u want to show the information detail
function showUserDetail(clientId, interestId, currentBtId) {
    const showDataBtSet1 = ['dataBt11', 'dataBt12', 'dataBt13', 'dataBt14', 'dataBt15', 'dataBt16', 'dataBt17'];
    const showDataBtSet2 = ['dataBt21', 'dataBt22', 'dataBt23', 'dataBt24', 'dataBt25'];
    const showDataBtSet3 = ['dataBt31', 'dataBt32', 'dataBt33', 'dataBt34', 'dataBt35'];

    toggle(interestId)

    let usingShowDataSet
    switch(clientId) {
        case 1:
            usingShowDataSet = showDataBtSet1;
            break;
        case 2:
            usingShowDataSet = showDataBtSet2;
            break;
        case 3:
            usingShowDataSet = showDataBtSet3;
            break;
    }

    for (eachButton in usingShowDataSet) {
        if (usingShowDataSet[eachButton] != currentBtId) {
            console.log('thisButton', usingShowDataSet[eachButton])
            disableBt(usingShowDataSet[eachButton])
        }
    }
}

function showRequirement(questId, otherBt1, otherBt2, userId) {
    let areaProv = document.getElementById('areaText')
    let usersEle = document.getElementById(userId)
    toggle(questId);
    toggle(userId);
    // set opacity to be 100% after animation end
    usersEle.style.animation = "fadeClear 1s 1"
    usersEle.style.animationFillMode = 'forwards'
    disableBt(otherBt1);
    disableBt(otherBt2);
    if(questId == "quest01" || questId == "quest02") {
        areaProv.innerHTML = "area : Bangkok";
    }else if(questId == "quest03") {
        areaProv.innerHTML = "area : Chiang mai";
    }
}

function showhideInfo(infoId, showorhide, bt) {
    let informationElement = document.getElementById(infoId)
    if(showorhide) {
        informationElement.style.height = '100%'
        informationElement.style.width = '100%'
        informationElement.style.transition = 'height 0.3s, width 0.5s'
        document.getElementById(bt).style.zIndex = 3
    }
    else {
        informationElement.style.height = '0%'
        informationElement.style.width = '0%'
        informationElement.style.transition = 'height 0.3s, width 0.5s'
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
