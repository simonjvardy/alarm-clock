// Continuously check the alarm input values
const alarmHours = document.getElementById("alarmHrs");
const alarmMinutes = document.getElementById("alarmMins");

setInterval(function(){
    console.log(alarmHours.value, alarmMinutes.value);
}, 1000);