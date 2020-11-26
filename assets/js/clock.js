// Code credit: Adapted from various tutorials on the following sites
// http://www.dhtmlgoodies.com/tutorials/canvas-clock/
// http://www.jquery2dotnet.com/2012/11/html5-clocks.html
// http://www.script-tutorials.com/html5-clocks/
// https://www.w3schools.com/graphics/canvas_clock.asp

const canvas = document.getElementById('clockCanvas');// Get the javascript DOM reference to the canvas tag
const context = canvas.getContext('2d'); // The context method contains all the properties which we will use to draw on the canvas

const clockFaceImg = new Image();  // Create a new HTMLImageElement instance
let clockFaceImgLoaded = false;  // Set the initial state of the clockFaceImgLoaded flag to false

// Ensure the image has loaded from the server before drawing anything on the canvas - clockFaceImgLoaded returns true once the image is loaded
clockFaceImg.onload = function() {
    clockFaceImgLoaded = true;
}
clockFaceImg.src = 'assets/img/clock-face-circle2.png';


// Add the clock face
function loadBackgroundImage() {
    // Reposition the image back to the canvas top left corner
    context.drawImage(clockFaceImg, canvas.width/2 * -1, canvas.height/2 * -1, canvas.width, canvas.height); 
}

// Utility to convert degrees to Radians to pass as an argument in the context.rotate() method.
function convertDegreeToRadians(deg) {
    return (Math.PI / 180) * deg
 } 


// Create the clock hour hand
function createHourHand(currentDate) {
    let hrs = currentDate.getHours() + currentDate.getMinutes() / 60;  // Adding Minutes value / 60 lets the hour hand move smoothly from hour to hour
    let degrees = (hrs * 360 / 12) % 360;  // Modulus operator just calculates the the same rotation for the 24hr clock values e.g. 03:00 or 15:00 = 90° rotation
    context.save();  // Save the "zero rotation" start point of the canvas
    context.fillStyle = 'black'; 
    context.rotate(convertDegreeToRadians(degrees));  // for each hour value, the hand will rotate 30 degrees (30 x 12 = 360)
    createHand(110, 7, 3);  // Draw the hour hand with size, thickness and shadow arguments
    context.restore();  // Return the canvas rotation back to the initial save point, ready for the next rotation function
}

// Create the clock minutes hand
function createMinuteHand(currentDate) {
    let min = currentDate.getMinutes() + currentDate.getSeconds() / 60;  // Adding seconds value / 60 lets the minute hand move smoothly from minute to minute
    context.save();  
    context.fillStyle = 'black';  
    context.rotate(convertDegreeToRadians(min * 6));  // for each minute value, the hand will rotate 6 degrees (60 x 6 = 360)
    createHand(130, 7, 5);
    context.restore();      
}

// Create the clock seconds hand
function createSecondHand(currentDate) {
    let sec = currentDate.getSeconds();  // Extract the seconds value from the input date: gets a value between 0 - 59
    context.save(); 
    context.fillStyle = 'red';
    context.rotate(convertDegreeToRadians(sec * 6));  // for each seconds value, the hand will rotate 6 degrees (60 x 6 = 360)
    createHand(150);
    context.restore();
}

// Write text on the clock face
function writeAMPM(currentDate) {
    context.font = "18pt Serif"; // Set the text font properties
    let hours = currentDate.getHours();
    let am_pm = hours >= 12 ? 'PM' : 'AM';  //  if the hours value is grater than 12 then set the value to PM else AM
    let textSize = context.measureText(am_pm);  // returns the height and width of the text for the font properties
    context.fillText(am_pm, 0 - textSize.width / 2,-40);  // Draws the text and positions the text centered about the y=0 x=-40 position
    context.fillStyle = "#777777";
}

function writeDate(currentDate) {
    context.font = "12pt Serif"; // Set the text font properties
    let year = currentDate.getFullYear();  // Get the 4 digit year from the date
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[currentDate.getMonth()];  // Converts the date month value into the month name from the months array
    let dayNumber = currentDate.getDate();  // The day of the month
    const days = ['Mon', 'Tues','Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    let day = days[currentDate.getDay()];  // converts the day of the week number into the day name from the days array
    let dateString = day + " " + dayNumber + " " + month + ", " + year;
    let textSize = context.measureText(dateString);  // returns the height and width of the text for the font properties
    context.fillText(dateString, 0 - textSize.width / 2, 60);  // Draws the text and positions the text centered about the y=0 x=-40 position
}

// All the hands are a similar stretched diamond shapes, so this function prevents repetition of code
function createHand(size, thickness, shadow) {
        thickness = thickness || 4;  // The value of thickness is either set as a function argument or defaults to 4

        // Drop Shadow effects for the clock hands https://www.w3schools.com/tags/ref_canvas.asp
        context.shadowBlur = 10;  // The blur effect size
        context.shadowColor = '#555';  // Shadow colour
        context.shadowOffsetX = shadow;  // shadow x-axis offset argument value
        context.shadowOffsetY = shadow;  // shadow y-axis offset argument value

        // Draw the basic clock hand shape
        context.beginPath();
        context.moveTo(0,0); // Start drawing from the canvas center
        context.lineTo(thickness * -1, -10);  // draw 1st (short) side of the diamond up and out, to a value set by argument 'thickness * -1'
        context.lineTo(0, size * -1); // draw 2nd (long) side of the diamond up, to a value set by argument 'size * -1' 
        context.lineTo(thickness,-10);  // Draw 3rd (long) side of the diamond down, to to a value set by argument 'thickness'
        context.lineTo(0,0);  //  Draw the 4th (short) side of the diamond back to the canvas centre
        context.fill();  // fill the clock had with the defines colour
     }

// Create the whole clock
function createClock() {
    loadBackgroundImage();
    let currentDate = new Date();
    writeAMPM(currentDate);
    writeDate(currentDate);
    createHourHand(currentDate);
    createMinuteHand(currentDate);
    createSecondHand(currentDate);
}

// Make the clock run
function clock() {
    // Test that the clock background image file has loaded before creating the clock - if not, wait 10ms and try calling the clock() function again
    if (!clockFaceImgLoaded) {
        setTimeout('clock()', 100);
        return;
    }    
    context.translate(canvas.width/2, canvas.height/2);  // Remap the (0,0) position on the canvas to the centre ready for canvas rotation
    setInterval('createClock()', 1000);  // Update the createClock() function every second
}

clock(); // Start the application