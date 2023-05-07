// Local Storage Variables

// Login
let localUsername
let localProfilePicture

// Select Personalities Picture
let localPersonalitiesSelectedPicture

// Notice Selected Text
let localNoticeSelected

// Slider & Delete Data
let localSliderValue1
let localSliderValue2
let localDeletedData

// Local Storage Object
let localObject

function loadLocalStorageValue() {
    // Login
    localUsername = localStorage.getItem('username')
    localProfilePicture = localStorage.getItem('profile-picture')

    // Select Personalities Picture
    localPersonalitiesSelectedPicture = localStorage.getItem('personalities-selected-picture')
    localPersonalitiesSelectedPicture = localPersonalitiesSelectedPicture.split(',')

    // Notice Selected Text
    localNoticeSelected = localStorage.getItem('notice-selected')

    // Slider & Delete Data
    localSliderValue1 = localStorage.getItem('slider-value1')
    localSliderValue1 = parseInt(localSliderValue1)

    localSliderValue2 = localStorage.getItem('slider-value2')
    localSliderValue2 = parseInt(localSliderValue2)

    localDeletedData = localStorage.getItem('deleted-data')

    localDeletedData = localStorage.getItem('deleted-data')
}

function parseIntValue(localValue) {
    localValue = parseInt(localValue)
    console.log('Parse Int: ', localValue)
    console.log('Parse Int: ', localSliderValue1)
}

function parseBoolean(localValue) {
    if(localValue == 'true') {
        localValue = true
    }
    else if(localValue == 'false') {
        localValue = false
    }
}

function parseArrayValue(localValue) {
    localValue = localValue.split(',')
    console.log('After Split: ', localValue)
}

function clearAllLocalData() {
    // Notice Selected Text
    localNoticeSelected = localStorage.setItem('notice-selected', '')

    // Slider & Delete Data
    localSliderValue1 = localStorage.setItem('slider-value1', 0)
    localSliderValue2 = localStorage.setItem('slider-value2', 0)
    localDeletedData = localStorage.setItem('deleted-data', false)
}