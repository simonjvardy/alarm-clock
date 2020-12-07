// Code adapted from// https://www.youtube.com/watch?v=v3kDlRx0c5M


// Get the DOM Elements for the Alarm Clock section
const alarmSetButton = document.getElementById("alarmSetButton");
const alarmSound = document.getElementById("alarmSound");
const alarmBellImg = document.getElementById("alarmBell");
const alarmHrs = document.getElementById("alarmHrs");
const alarmMins = document.getElementById("alarmMins");

// Declare the alarm variables
//let currentTime;
let alarmElement;
let alarmActive = false;

/*
Get the current time and compare to the alarm time set by the
user once per second
*/
function alarmTime() {
  let currentDate = new Date();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let secondsText = (seconds < 10 ? '0' + seconds : String(seconds));
  let currentTime = String(hour) + ":" + String(minute) + ":" + secondsText;
  if(currentTime === alarmElement) {
    alarmSound.play();

    // Assign css class to alarm bell icon to make the image shake
    alarmBellImg.classList.add("bell-icon-shake");
  }
  setTimeout(alarmTime, 1000);
}

alarmSetButton.onclick = function() {
  if(alarmActive === false) {

    // Disable the alarm Hours and minutes selectors when the alarm is set
    alarmHrs.disabled = true;
    alarmMins.disabled = true;
    alarmElement = alarmHrs.value + ":" + alarmMins.value + ":00";

    // Change the colour and text of the alarm clock button
    this.innerText = "Clear Alarm";
    alarmSetButton.className = "btn-red btn-shape";

    // Show a bell icon image when the alarm is set
    alarmBellImg.innerHTML = '<i class="far fa-bell"></i>';
    alarmActive = true;
  } else {
    // Enable the alarm Hours and minutes selectors when the alarm is not set
    alarmHrs.disabled = false;
    alarmMins.disabled = false;
    alarmSound.pause();
    this.innerText = "Set Alarm";

    // Assign css class to button
    alarmSetButton.className = "btn-green btn-shape";

    // Show a bell-slash icon image when the alarm is not set
    alarmBellImg.innerHTML = '<i class="far fa-bell-slash"></i>';

    // Removes the image shake css styling class
    alarmBellImg.classList.remove("bell-icon-shake");
    alarmActive = false;
  }
};

alarmTime();
