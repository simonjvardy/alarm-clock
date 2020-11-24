// Get the javascript DOM reference to the canvas tag
const canvas = document.getElementById('clockCanvas');
const context = canvas.getContext('2d'); // The context method contains all the properties which we will use to draw on the canvas


// Configure the loading of the background image
// Ensure the image has loaded from the server first - clockFaceImageLoaded returns true once the image is loaded
// code adapted from http://www.dhtmlgoodies.com/tutorials/canvas-clock/
const clockFaceImg = new Image();
let clockFaceImageLoaded = false;
clockFaceImg.onload = function() {
    clockFaceImageLoaded = true;
}
clockFaceImg.src = 'assets/img/clock-face.png';


// Add the clock face
function loadBackgroundImage() {
    // After the context.translate() remap of (0,0) pos, the top left corner of the image is in the centre of the canvas!
    // Reposition the image back to the canvas top left corner e.g. (-200, -200, 400, 400)
    context.drawImage(clockFaceImg, canvas.width/2 * -1 ,canvas.height/2 * -1,canvas.width, canvas.height);
}

// Create the clock hour hand
createHourHand(currentDate) {

}

// Create the clock minutes hand
createMinuteHand(currentDate) {

}

// Create the clock seconds hand
createSecondHand(currentDate) {
    let sec = currentDate.getSeconds();  // Gives us a value between 0-59
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,-150);
    context.stroke();
}

// Write text on the clock face


// Create the whole clock
function createClock() {
    loadBackgroundImage();
    let currentDate = new Date();
    createHourHand(currentDate);
    createMinuteHand(currentDate);
    createSecondHand(currentDate);
}

// Make the clock run
function clock() {
    // Test that the clock background image file has loaded before creating the clock - if not, wait 10ms and try calling the clock() function again
    if (!clockFaceImageLoaded) {
        setTimeout('clock()', 10);
        return;
    }    
    context.translate(canvas.width/2, canvas.height/2);  // Remap the (0,0) position on the canvas to the centre ready for canvas rotation
    setInterval('generateClock()', 1000);  // Update the createClock() function every second
}

clock(); // Start the application