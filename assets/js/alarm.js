// Get alarm Time Setting
const alarmHours = document.getElementById("alarmHrs");
const alarmMinutes = document.getElementById("alarmMins");
const alarmSeconds = '00'
let savedAlarms = 0;

// Save alarm time to local storage
function storeAlarm(h, m) {
    localStorage.setItem('alarm ',  JSON.stringify({ //save alarm hours and minutes values in local storage
        alarmHours: h,
        alarmMinutes: m
    }));
} 

// Get current time
let currentTime = new Date();

// Alarm toggle switch position
let toggleSwitch = document.querySelector("input[id=toggleSwitch]");

// When the toggle switch (checkbox) is "checked" save the alarm time and run the alarm clock else stop the alarm and clear the localStorage
toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");  // check if the event listener is actually working
    storeAlarm(alarmHours, alarmMinutes);  // save the alarm time values to localStorage.
  } else {
    console.log("Checkbox is not checked..");  // check if the event listener is actually working
    localStorage.clear();  // when the toggle switch is OFF clear the localStorage data
  }
});


// When the window loads, check local storage for any saved alarms
window.onload = function(){
    savedAlarms = localStorage.length;
    for (let i =0; i < localStorage.length; i++) {
        const alarm = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // copy back 'alarm' values to the alarmHours and AlarmMinutes selectors
    }
  }

