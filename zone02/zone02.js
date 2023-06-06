var timeCard
const today = new Date();
var time = today.toLocaleTimeString();

function windowLoad() {
    taskBarVariablesLoad()
    loadLocalStorageValue()
    
    currentTimeRunning('time-in')
    let timeIn = document.getElementById('timeIn')
    localStorage.setItem('zone2-time-stamp', timeIn.innerText)
    setInterval(currentTimeRunning, 1000, 'live-time')

    let nameText = document.getElementById('name-text')
    nameText.innerText = localUsername
}

function showCtmInfo() {
    document.getElementsByClassName('customer')[0].style.display = 'flex';
}

function hideCtmInfo() {
    document.getElementsByClassName('customer')[0].style.display = 'none';
}

function playSoundAndRedirect(event) {
    // Prevent the default behavior of the link
    event.preventDefault();
  
    // Play the click sound
    var clickSound = document.getElementById("clickSound");
    
    // Wait for the sound to be ready to play
    clickSound.addEventListener("canplaythrough", function() {
      // Play the sound
      clickSound.play();
      
      // Delay the redirection to allow the sound to play
      setTimeout(function() {
      // Redirect to the specified href
        window.location.href = "/zone02/game/agent.html";
      }, 1000); // Adjust the delay time (in milliseconds) as needed
    });
  
    // Load the sound
    clickSound.load();
}