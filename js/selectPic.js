function windowLoad() {
    taskBarVariablesLoad()
}

function closeGuide() {
    let guide = document.getElementById('guide')
    guide.style.display = 'none'
}

function hoverPicture(nameOfPic) {
    let hiddenPic = document.getElementById(`pic-wrap-hidden-${nameOfPic}`)
    hiddenPic.style.display = 'block'
}

function notHoverPicture(nameOfPic) {
    let hiddenPic = document.getElementById(`pic-wrap-hidden-${nameOfPic}`)
    hiddenPic.style.display = 'none'
}

const selectCheck = {
    e1: false,
    e2: false,
    e3: false,
    o2: false,
    o3: false,
    o6: false,
    a1: false,
    a2: false,
    a3: false,
    c1: false,
    c2: false,
    c4: false
}

function selectPicture(nameOfSelectedPic) {
    let selectedPicWrap = document.getElementById(`pic-wrap-${nameOfSelectedPic}`)
    let selectedPic = document.getElementById(`picture-${nameOfSelectedPic}`)
    let closeButton = document.getElementById(`close-button-${nameOfSelectedPic}`)
    let completedSelected = document.getElementById('completed-select')

    if(limitSelectCheck()) {
        updateSelectCheck(true, nameOfSelectedPic)
    }
    else {
        completedSelected.style.display = 'flex'
        return
    }

    selectedPicWrap.style.setProperty('--boxShadowImage', 'inset 0 0 0 5px var(--blue)')
    selectedPic.style.border = 'none'
    closeButton.style.display = 'block'


}

function unselectPicture(nameOfSelectedPic) {
    let selectedPicWrap = document.getElementById(`pic-wrap-${nameOfSelectedPic}`)
    let selectedPic = document.getElementById(`picture-${nameOfSelectedPic}`)
    let closeButton = document.getElementById(`close-button-${nameOfSelectedPic}`)

    selectedPicWrap.style.setProperty('--boxShadowImage', 'none')
    selectedPic.style.border = '1px solid black'
    closeButton.style.display = 'none'

    updateSelectCheck(false, nameOfSelectedPic)
}

function updateSelectCheck(boolean, nameOfSelectedPic) {
    Object.keys(selectCheck).forEach((item) => {
        if(item == nameOfSelectedPic) {
            selectCheck[item] = boolean
        }
    })
}

function limitSelectCheck() {
    let numOfSelected = 0
    let numOfSelectedText = document.getElementById('num-selected-text')
    let okButton = document.getElementById('ok-button')

    Object.keys(selectCheck).forEach((item) => {
        if(selectCheck[item] == true) {
            numOfSelected++
        }
    })
    numOfSelectedText.innerHTML = numOfSelected

    if(numOfSelected == 4) {
        okButton.style.display = 'block'
    }
    else {
        okButton.style.display = 'none'
    }

    if(numOfSelected <= 3) {
        return true
    }
    else {
        return false
    }
}

function closeCompletedSelect() {
    let completedSelected = document.getElementById('completed-select')
    completedSelected.style.display = 'none'
}

function openFindTarget() {
    let findTargetArea = document.getElementById('find-target')
    let loadingTarget = document.getElementsByClassName('loading-target')
    let findTarget = document.getElementById('find-target-wrap')
    let foundTarget = document.getElementById('found-target-wrap')

    findTargetArea.style.display = 'flex'

    for(let i = 0; i <= 3; i++) {
        setTimeout(() => {
            loadingTarget[i].style.opacity = 1
        }, 600*(i+1))
    }

    setTimeout(() => {
        findTarget.style.display = 'none'
        foundTarget.style.display = 'flex'
    }, 3000)
}

// Set  Selected Picture to Local Storage
function setLocalSelectedPic() {
    let selectedPicArray = []

    Object.keys(selectCheck).forEach((item) => {
        if(selectCheck[item] == true) {
            selectedPicArray.push(item)
        }
    })

    localStorage.setItem('personalities-selected-picture', selectedPicArray)
}