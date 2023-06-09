function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
}


var choosenUser = [];
var clientUnit = '';
var isQuiz01Done = false;
var isQuiz02Done = false;
var isQuiz03Done = false;
const clickSource = "/zone01/audio/clickedS.mp3"
const clickSound = new Audio(clickSource);

function clickSoundPlay() {
    clickSound.play();
}

// Add quantity of user that selected
function addQuant(quantityId, answer, sendBtId, buttonId, userBtId) {
    clickSound.play();
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
    const bgAudio = document.getElementById('bgAudio');
    const endSource = "/zone01/audio/gameEnd.mp3";
    const endSound = new Audio(endSource);

    let endEle = document.getElementById('endingZone')
    endEle.style.zIndex = 4
    endEle.style.animation = 'slideIn 1s 1'
    endEle.style.animationFillMode = 'forwards'
    bgAudio.pause();
    endSound.play();
}

// sending the answer of selected user
function storing(answer) {
    choosenUser.push(answer);
}

// check the answer if it all is correct or not
function checkAns(sendBtId, quantId, unitId) {
    clickSound.play();
    let quantityEle = document.getElementById(quantId);
    if(choosenUser.includes('0')) {
        clientUnit = unitId;
        choosenUser = [];
        quantityEle.innerHTML = '0';
        document.getElementById('alertBG').style.display = "block";
        document.getElementById('alert').style.display = "block";
    }
    else if(!choosenUser.includes('0')){
        const correctSource = "/zone01/audio/zone02-money.mp3";
        const soundC = new Audio(correctSource);
        quantityEle.innerHTML = 'COMPLETE';
        quantityEle.style.border = 'solid 1px';
        quantityEle.style.padding = '5px';
        quantityEle.style.textDecoration = 'none';
        document.getElementById(unitId).style.display = 'none';
        document.getElementById(sendBtId).style.display = 'none';
        if(sendBtId == 'send01') {
            isQuiz01Done = true;
        } else if(sendBtId == 'send02') {
            isQuiz02Done = true;
        } else if(sendBtId == 'send03') {
            isQuiz03Done = true;
        }
        soundC.play()
    }
    
    // if finish every quiz , end this zone
    if( isQuiz01Done && isQuiz02Done && isQuiz03Done) {
        endIt();
    }
}

function acceptFalse() {
    // user lists for each client
    const userSet1 = ['user11', 'user12', 'user13', 'user14', 'user15', 'user16', 'user17'];
    const userSet2 = ['user21', 'user22', 'user23', 'user24', 'user25'];
    const userSet3 = ['user31', 'user32', 'user33', 'user34', 'user35'];
    const btnSet1 = ['choose11', 'choose12', 'choose13', 'choose14', 'choose15', 'choose16', 'choose17'];
    const btnSet2 = ['choose21', 'choose22', 'choose23', 'choose24', 'choose25'];
    const btnSet3 = ['choose31', 'choose32', 'choose33', 'choose34', 'choose35'];
    const sentBt1 = 'send01';
    const sentBt2 = 'send02';
    const sentBt3 = 'send03';


    var useSet = [];
    var useBtn = [];
    // hide the alert message box
    document.getElementById('alertBG').style.display = "none";
    document.getElementById('alert').style.display = "none";
    // clear the border styling of the users
    switch(clientUnit) {
        case 'unit1':
            useSet = userSet1;
            useBtn = btnSet1;
            disableBt(sentBt1);
            document.getElementById(sentBt1).style.background = 'none';
            break;
        case 'unit2':
            useSet = userSet2;
            useBtn = btnSet2;
            disableBt(sentBt2);
            document.getElementById(sentBt2).style.background = 'none';
            break;
        case 'unit3':
            useSet = userSet3;
            useBtn = btnSet3;
            disableBt(sentBt3);
            document.getElementById(sentBt3).style.background = 'none';
            break;
    }
    // styling bg send button

    for (eachUser in useSet) {
        document.getElementById(useSet[eachUser]).style.border = "1px solid";
    }
    // enable the chooseBt of all user in that clients
    for (eachBtn in useBtn) {
        enableBtall(useBtn[eachBtn]);
    }
}

function enableBtall(buttonId) {
    document.getElementById(buttonId).disabled = false;
    document.getElementById(buttonId).style.cursor = 'pointer';
}

// button
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
    clickSound.play();
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
    clickSound.play();
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
            disableBt(usingShowDataSet[eachButton])
        }
    }
}

function showRequirement(questId, otherBt1, otherBt2, userId) {
    clickSound.play();
    let areaProv = document.getElementById('areaText')
    let usersEle = document.getElementById(userId)
    toggle(questId);
    toggle(userId);
    // set opacity to be 100% after animation end
    usersEle.style.animation = "fadeClear 1s 1"
    usersEle.style.animationFillMode = 'forwards'
    disableBt(otherBt1);
    disableBt(otherBt2);

    switch(questId) {
        case 'quest01':
            areaProv.innerHTML = "area : Bangkok";
            break;
        case 'quest02':
            areaProv.innerHTML = "area : Chiang mai";
            break;
        case 'quest03':
            areaProv.innerHTML = "area : Thailand";
            break;
    }
}

function showhideInfo(infoId, showorhide, bt) {
    clickSound.play();
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
    clickSound.play();
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
    clickSound.play();
    if(button == 'hintButton') {
        document.getElementById('guidePic').style.zIndex = 3
    }
    else{
        document.getElementById('guidePic').style.zIndex = -4
    }
}
