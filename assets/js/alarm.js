/*jslint white: true */
/*jshint esversion: 6 */

// Get the DOM Element for the DOM audio element
const alarmSound = document.getElementById("alarmSound");

// Declare the alarm calculation variables
let alarmElement;
let alarmActive = false;

/*
initial page load shows the bell-slash icon to show
the alarm is not set
 */
function loadBellIcon() {
  const bellIcon = document.getElementById("alarmBell");
  bellIcon.innerHTML = '<i class="far fa-bell-slash"></i>';
}

/*
Get the current time and compare to the alarm time set
by the user once per second. if there is equality then
play the alarm sound and shake the alarm bell icon
*/
function alarmTime() {
  let now = new Date();
  /*
  Return the time portion of a Date object as a string
  in the format "hh:mm:ss"
  */
  let currentTime = now.toLocaleTimeString();
  if (currentTime === alarmElement) {
    alarmSound.play();

    // Assign css class to bell icon to make the image shake
    document.getElementById("alarmBell").classList.add("bell-icon-shake");
  }
  setTimeout(alarmTime, 1000);
}

/*
The alarm button changes text and colour when clicked
to show alarm set and cleared states. The hours
and minutes selectors are disabled while the
alarm is set.
*/
function alarmSetClear() {
  const bellIcon = document.getElementById("alarmBell");
  const alarmHrs = document.getElementById("alarmHrs");
  const alarmMins = document.getElementById("alarmMins");
  const setAlarmButton = document.getElementById("setAlarmButton");
  if (alarmActive === false) {
    /*
    Disable the alarm Hours and minutes selectors when
    the alarm is set
    */
    alarmHrs.disabled = true;
    alarmMins.disabled = true;
    alarmElement = alarmHrs.value + ":" + alarmMins.value + ":00";

    // Change the colour and text of the alarm clock button
    this.innerText = "Clear Alarm";
    setAlarmButton.className = "btn-red btn-shape";

    // Show a bell icon when the alarm is set
    bellIcon.innerHTML = '<i class="far fa-bell"></i>';

    alarmActive = true;
  } else {
    /*
    Enable the alarm Hours and minutes selectors when the
    alarm is not set
    */
    alarmHrs.disabled = false;
    alarmMins.disabled = false;
    alarmSound.pause();
    this.innerText = "Set Alarm";
    setAlarmButton.className = "btn-green btn-shape";

    // Show a bell-slash icon  when the alarm is not set
    bellIcon.innerHTML = '<i class="far fa-bell-slash"></i>';

    //  Removes the image shake css styling class
    bellIcon.classList.remove("bell-icon-shake");
    alarmActive = false;
  }
}

function createAlarm() {  
  loadBellIcon();
  alarmTime();
  alarmSetClear();
}

createAlarm();