/*jslint white: true */
/*jshint esversion: 6 */

// Get the DOM Element for the DOM audio element
const alarmSound = document.getElementById("alarmSound");

<<<<<<< HEAD
// Declare the alarm calculation variables
let alarmElement;
let alarmActive = false;
=======
// Get the DOM Elements for the Alarm Clock section
const alarmHrs = document.getElementById("alarmHrs");
const alarmMins = document.getElementById("alarmMins");
const alarmSetButton = document.getElementById("alarmSetButton");
const alarmDisplay = document.getElementById("alarmSound");
const bellIconDiv = document.getElementById("alarmBell");
>>>>>>> origin/master

/*
initial page load shows the bell-slash icon to show
the alarm is not set
 */
function loadBellIcon() {
<<<<<<< HEAD
  const bellIcon = document.getElementById("alarmBell");
  bellIcon.innerHTML = '<i class="far fa-bell-slash"></i>';
}
=======
  bellIconDiv.innerHTML = '<i class="far fa-bell-slash"></i>';
}

// Declare the alarm calculation variables
//let currentTime;
let alarmElement;
let alarmActive = false;
>>>>>>> origin/master

/*
Get the current time and compare to the alarm time set
by the user once per second. if there is equality then
play the alarm sound and shake the alarm bell icon
*/
function alarmTime() {
    /*
  Return the time portion of a Date object as a string
  in the format "hh:mm:ss"
  */
<<<<<<< HEAD
  let currentTime = now.toLocaleTimeString();
=======
  let currentDate = new Date();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let currentTime = String(hour) + ":" + String(minute) + ":" + String(seconds);
>>>>>>> origin/master
  if (currentTime === alarmElement) {
    alarmSound.play();

<<<<<<< HEAD
    // Assign css class to bell icon to make the image shake
    document.getElementById("alarmBell").classList.add("bell-icon-shake");
=======
     // Assign css class to bell icon to make the image shake
    bellIconDiv.classList.add("bell-icon-shake");
>>>>>>> origin/master
  }
  setTimeout(alarmTime, 1000);
}

/*
The alarm button changes text and colour when clicked
to show alarm set and cleared states. The hours
and minutes selectors are disabled while the
alarm is set.
*/
<<<<<<< HEAD
function alarmSetClear() {
  const bellIcon = document.getElementById("alarmBell");
  const alarmHrs = document.getElementById("alarmHrs");
  const alarmMins = document.getElementById("alarmMins");
  const setAlarmButton = document.getElementById("setAlarmButton");
=======
alarmSetButton.onclick = function () {
>>>>>>> origin/master
  if (alarmActive === false) {
    /*
    Disable the alarm Hours and minutes selectors when
    the alarm is set
    */
    alarmHrs.disabled = true;
    alarmMins.disabled = true;
    alarmElement = alarmHrs.value + ":" + alarmMins.value + ":0";

    // Change the colour and text of the alarm clock button
    this.innerText = "Clear Alarm";
<<<<<<< HEAD
    setAlarmButton.className = "btn-red btn-shape";
=======
    alarmSetButton.className = "btn-red btn-shape";
>>>>>>> origin/master

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
<<<<<<< HEAD
    setAlarmButton.className = "btn-green btn-shape";
=======
    alarmSetButton.className = "btn-green btn-shape";
>>>>>>> origin/master

    // Show a bell-slash icon  when the alarm is not set
    bellIcon.innerHTML = '<i class="far fa-bell-slash"></i>';

    //  Removes the image shake css styling class
    bellIcon.classList.remove("bell-icon-shake");
    alarmActive = false;
  }
}

<<<<<<< HEAD
function createAlarm() {  
  loadBellIcon();
  alarmTime();
  alarmSetClear();
}

createAlarm();
=======
function alarm() {
  loadBellIcon();
  alarmTime();
}

alarm();
>>>>>>> origin/master
