// Local Storage Variables

// Login
let localUsername
let localProfilePicture

// Time Stamp
let localZone1TimeStamp
let localZone2TimeStamp
let localZone3TimeStamp

// Select Personalities Picture
let localPersonalitiesSelectedPicture

// Notice Selected Text
let localNoticeSelected

// Slider & Delete Data
let localSliderValue1
let localSliderValue2
let localIsDeletedData

function loadLocalStorageValue() {
    // Login
    localUsername = localStorage.getItem('username')
    localProfilePicture = localStorage.getItem('profile-picture')

    // Time Stamp
    localZone1TimeStamp = localStorage.getItem('zone1-time-stamp')
    localZone2TimeStamp = localStorage.getItem('zone2-time-stamp')
    localZone3TimeStamp = localStorage.getItem('zone3-time-stamp')

    // Select Personalities Picture
    localPersonalitiesSelectedPicture = localStorage.getItem('personalities-selected-picture')
    if(localPersonalitiesSelectedPicture != '') {
        localPersonalitiesSelectedPicture = localPersonalitiesSelectedPicture.split(',')
    }

    // Notice Selected Text
    localNoticeSelected = localStorage.getItem('notice-selected')

    // Slider & Delete Data
    localSliderValue1 = localStorage.getItem('slider-value1')
    localSliderValue1 = parseInt(localSliderValue1)

    localSliderValue2 = localStorage.getItem('slider-value2')
    localSliderValue2 = parseInt(localSliderValue2)

    localIsDeletedData = localStorage.getItem('is-deleted-data')
    if(localIsDeletedData == 'true') {
        localIsDeletedData = true
    }
    else if(localIsDeletedData == 'false') {
        localIsDeletedData = false
    }
    console.log('Deleted Data: ', localIsDeletedData)
}

function clearAllLocalData() {
    // Login
    localUsername = localStorage.setItem('username', '')
    localProfilePicture = localStorage.setItem('profile-picture', '')

    // Time Stamp
    localZone1TimeStamp = localStorage.setItem('zone1-time-stamp', '')
    localZone2TimeStamp = localStorage.setItem('zone2-time-stamp', '')
    localZone3TimeStamp = localStorage.setItem('zone3-time-stamp', '')

    // Select Personalities Picture
    localPersonalitiesSelectedPicture = localStorage.setItem('personalities-selected-picture', '')

    // Notice Selected Text
    localNoticeSelected = localStorage.setItem('notice-selected', '')

    // Slider & Delete Data
    localSliderValue1 = localStorage.setItem('slider-value1', 0)
    localSliderValue2 = localStorage.setItem('slider-value2', 0)
    localIsDeletedData = localStorage.setItem('is-deleted-data', false)
}