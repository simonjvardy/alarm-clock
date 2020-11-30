// Code adapted from// https://www.youtube.com/watch?v=v3kDlRx0c5M

const alarmHrs = document.getElementById("alarmHrs");  // Get the DOM Element for the alarm hours selection
const alarmMins = document.getElementById("alarmMins");  // Get the DOM Element for the alarm minutes selection
const alarmSeconds = "00";  // Set a default seconds value of 00
const startStop =  document.getElementById("startStop");  // Get the DOM Element for the alarm set / clear button
const alarmDisplay = document.getElementById("alarmSound");  // 
let currentTime;
let alarmElement;
let alarmActive = false;

// Get the current time and compare to the alarm time set by the user
function alarmTime() {
  let now = new Date();
  currentTime = now.toLocaleTimeString();  // Return the time portion of a Date object as a string in the format "hh:mm:ss"
  
  if(currentTime === alarmElement) {
    alarmDisplay.play();  // Play the alarm sound when the current time equals the alarm time
  }
  setTimeout(alarmTime, 1000);  // Call the alarmTime function once per second
}
alarmTime();

startStop.onclick = function() {
  if(alarmActive === false) {
    alarmHrs.disabled = true;  // Disable the alarm Hours selector when the alarm is set
    alarmMins.disabled = true;  // Disable the alarm Minutes selector when the alarm is set
    
    alarmElement = alarmHrs.value + ":" + alarmMins.value + ":00";
    // this points to the parent startStop button
    this.innerText = "Clear Alarm";  // Change the button text to Clear Alarm when clicked
    document.getElementById("startStop").className = "btn-danger";  // Assign css class to button
    alarmActive = true;  // Set the alarmActive flag to true
  } else {
    alarmHrs.disabled = false;  // Enable the alarm Hours selector when the alarm is not set
    alarmMins.disabled = false;  // Enable the alarm Minutes selector when the alarm is not set
    
    alarmDisplay.pause();
    this.innerText = "Set Alarm";  // Change the button text to Set Alarm when clicked
    document.getElementById("startStop").className = "btn-success";  // Assign css class to button
    alarmActive = false;
  }
}
