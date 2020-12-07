// Code adapted from// https://www.youtube.com/watch?v=v3kDlRx0c5M


// Get the DOM Elements for the Alarm Clock section
const alarmSetButton = document.getElementById("alarmSetButton");
const alarmSound = document.getElementById("alarmSound");
const alarmBellImg = document.getElementById("alarmBell");
const alarmHrs = document.getElementById("alarmHrs");
const alarmMins = document.getElementById("alarmMins");

// Declare the alarm variables
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

  /*
  For cross browser compatibility:
  Some browsers return the hours, minutes and seconds values that are 
  less than 10   as single digit values e.g. 01:09:05 can also be 1:9:5. 
  The following code block   tests for this and return the string in 
  hh:mm:ss format
  */
  let hoursText = (hour.toString().length < 2 ? '0' + hour : String(hour));
  let minutesText = (minute.toString().length < 2 ? '0' + minute : String(minute));
  let secondsText = (seconds.toString().length < 2 ? '0' + seconds : String(seconds));
  let currentTime = hoursText + ":" + minutesText + ":" + secondsText;
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
