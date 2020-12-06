// Code adapted from// https://www.youtube.com/watch?v=v3kDlRx0c5M


// Get the DOM Elements for the Alarm Clock section
const alarmSetButton = document.getElementById("alarmSetButton");
const alarmDisplay = document.getElementById("alarmSound");
const bellIconDiv = document.getElementById("alarmBell");

// Declare the alarm variables
let alarmElement;
let alarmActive = false;

// initial page load shows the bell-slash icon to show the alarm is not set
function bellIcon() {
  bellIconDiv.innerHTML = '<i class="far fa-bell-slash"></i>';
}

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
    alarmDisplay.play();

    // Assign css class to bell icon to make the image shake
    bellIconDiv.classList.add("bell-icon-shake");
  }
  setTimeout(alarmTime, 1000);
}


function createAlarm() {
  const alarmHrs = document.getElementById("alarmHrs");
  const alarmMins = document.getElementById("alarmMins");
  alarmSetButton.onclick = function() {
    if(alarmActive === false) {

      // Disable the alarm Hours and minutes selectors when the alarm is set
      alarmHrs.disabled = true;
      alarmMins.disabled = true;
      alarmElement = alarmHrs.value + ":" + alarmMins.value + ":00";

      // Change the colour and text of the alarm clock button
      this.innerText = "Clear Alarm";
      alarmSetButton.className = "btn-red btn-shape";

      // Show a bell icon when the alarm is set
      bellIconDiv.innerHTML = '<i class="far fa-bell"></i>';
      alarmActive = true;
    } else {
      // Enable the alarm Hours and minutes selectors when the alarm is not set
      alarmHrs.disabled = false;
      alarmMins.disabled = false;
      alarmDisplay.pause();
      this.innerText = "Set Alarm";

      // Assign css class to button
      alarmSetButton.className = "btn-green btn-shape";

      // Show a bell-slash icon  when the alarm is not set
      bellIconDiv.innerHTML = '<i class="far fa-bell-slash"></i>';

      //  Removes the image shake css styling class
      bellIconDiv.classList.remove("bell-icon-shake");
      alarmActive = false;
    }
  };
  bellIcon();
  alarmTime();
}

createAlarm();