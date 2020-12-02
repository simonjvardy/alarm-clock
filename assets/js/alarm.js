/*jslint white: true */
/*jshint esversion: 6 */

// Code adapted from// https://www.youtube.com/watch?v=v3kDlRx0c5M

// Get the DOM Elements for the Alarm Clock section
const alarmHrs = document.getElementById("alarmHrs");
const alarmMins = document.getElementById("alarmMins");
const startStop = document.getElementById("startStop");
const alarmDisplay = document.getElementById("alarmSound");
const bellIconDiv = document.getElementById("alarmBell");

/*
initial page load shows the bell-slash icon to show
 the alarm is not set
 */
bellIconDiv.innerHTML = '<i class="far fa-bell-slash"></i>';

// Declare the alarm calculation variables
let currentTime;
let alarmElement;
let alarmActive = false;

/*
Get the current time and compare to the alarm time set
by the user once per second
*/
function alarmTime() {
  let now = new Date();

  /*
  Return the time portion of a Date object as a string
  in the format "hh:mm:ss"
  */
  currentTime = now.toLocaleTimeString();
  if (currentTime === alarmElement) {
    alarmDisplay.play();

    // Assign css class to bell icon to make the image shake
    bellIconDiv.classList.add("bell-icon-shake");
  }
  setTimeout(alarmTime, 1000);
}
alarmTime();

startStop.onclick = function () {
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
    document.getElementById("startStop").className = "btn-red btn-shape";

    // Show a bell icon when the alarm is set
    bellIconDiv.innerHTML = '<i class="far fa-bell"></i>';

    alarmActive = true;
  } else {
    /*
    Enable the alarm Hours and minutes selectors when the
    alarm is not set
    */
    alarmHrs.disabled = false;
    alarmMins.disabled = false;
    alarmDisplay.pause();
    this.innerText = "Set Alarm";
    document.getElementById("startStop").className = "btn-green btn-shape";

    // Show a bell-slash icon  when the alarm is not set
    bellIconDiv.innerHTML = '<i class="far fa-bell-slash"></i>';

    //  Removes the image shake css styling class
    bellIconDiv.classList.remove("bell-icon-shake");
    alarmActive = false;
  }
};