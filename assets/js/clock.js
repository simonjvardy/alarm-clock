/* global Image */
/*jslint browser: true */
/*jslint white: true */
/*jshint esversion: 6 */

/* 
Code credit: Adapted from various tutorials on the following sites
http://www.dhtmlgoodies.com/tutorials/canvas-clock/
http://www.jquery2dotnet.com/2012/11/html5-clocks.html
http://www.script-tutorials.com/html5-clocks/
https://www.w3schools.com/graphics/canvas_clock.asp
*/


// Get the javascript DOM reference to the canvas tag
const canvas = document.getElementById('clockCanvas');

/*
The context method contains all the properties which
will be used to draw on the canvas
*/
const context = canvas.getContext('2d');

// Create a new HTMLImageElement instance
const clockFaceImg = new Image();

// Set the initial state of the clockFaceImgLoaded flag to false
let clockFaceImgLoaded = false;

/* 
Ensure the image has loaded from the server before drawing anything
on the canvas. clockFaceImgLoaded returns true once the image is loaded
*/
clockFaceImg.onload = function () {
    clockFaceImgLoaded = true;
};
clockFaceImg.src = 'assets/img/clock-face-circle2.png';


// Add the clock face
function loadBackgroundImage () {
    // Reposition the image back to the canvas top left corner
    context.drawImage(clockFaceImg, canvas.width/2 * -1, 
        canvas.height/2 * -1, canvas.width, canvas.height); 
}

/*
Utility to convert degrees to Radians to pass
as an argument in the context.rotate() method.
*/
function convertDegreeToRadians(deg) {
    return (Math.PI / 180) * deg;
}

/*
All the hands are a similar stretched diamond shapes,
so this function prevents repetition of code
*/
function createHand(size, thickness, shadow) {
    /*
    The value of thickness is either set as a
    function argument or defaults to 4
    */
    thickness = thickness || 4; 

    /*
    Drop Shadow effects for the clock hands 
    https://www.w3schools.com/tags/ref_canvas.asp
    */
    context.shadowBlur = 10;
    context.shadowColor = '#555';

    // shadow x-axis and y-axis offset argument values
    context.shadowOffsetX = shadow;
    context.shadowOffsetY = shadow;

    // Draw the basic clock hand shape
    context.beginPath();

    // Start drawing from the canvas center
    context.moveTo(0,0);

    /*
    draw 1st (short) side of the diamond up and out,
    to a value set by argument 'thickness * -1'
    */
    context.lineTo(thickness * -1, -10);
    
    /*
    draw 2nd (long) side of the diamond up,
    to a value set by argument 'size * -1'
    */
    context.lineTo(0, size * -1);

    /* Draw 3rd (long) side of the diamond down,
    to to a value set by argument 'thickness'
    */
    context.lineTo(thickness,-10);

    /*
    Draw the 4th (short) side of the diamond back
    to the canvas centre
    */
    context.lineTo(0,0);

    // fill the clock had with the defines colour    
    context.fill();
}

// Create the clock hour hand
function createHourHand(currentDate) {
    /*
    Adding Minutes value / 60 lets the hour hand
    move smoothly from hour to hour
    */
    let hrs = currentDate.getHours() + currentDate.getMinutes() / 60;

    /*
    Modulus operator just calculates the the same rotation
    for the 24hr clock values e.g. 03:00 or 15:00 = 90° rotation
    */
    let degrees = (hrs * 360 / 12) % 360;

    // Save the "zero rotation" start point of the canvas
    context.save();
    context.fillStyle = 'black';

    /*
    For each hour value, the hand will 
    rotate 30 degrees (30 x 12 = 360)
    */
    context.rotate(convertDegreeToRadians(degrees));

    // Draw the hour hand with size, thickness and shadow arguments
    createHand(138, 7, 3);

    /*
    Return the canvas rotation back to the initial
    save point, ready for the next rotation function
    */
    context.restore();
}

// Create the clock minutes hand
function createMinuteHand(currentDate) {
    /*
    Adding seconds value / 60 lets the minute hand
    move smoothly from minute to minute
    */
    let min = currentDate.getMinutes() + currentDate.getSeconds() / 60;
    context.save();
    context.fillStyle = 'black';

    /*
    For each minute value, the hand will 
    rotate 6 degrees (60 x 6 = 360)
    */
    context.rotate(convertDegreeToRadians(min * 6));
    createHand(163, 7, 5);
    context.restore();
}

// Create the clock seconds hand
function createSecondHand(currentDate) {
    /*
    Extract the seconds value from the 
    input date: gets a value between 0 - 59
    */
    let sec = currentDate.getSeconds();
    context.save(); 
    context.fillStyle = 'red';

    /*
    for each seconds value, the hand will 
    rotate 6 degrees (60 x 6 = 360)
    */
    context.rotate(convertDegreeToRadians(sec * 6));
    createHand(188);
    context.restore();
}

// Write text on the clock face
function writeAMPM(currentDate) {
    // Set the text font properties
    context.font = "24pt Serif";
    let hours = currentDate.getHours();

    /*
    if the hours value is grater than 12 then
    set the value to PM else AM
    */
    let am_pm = (hours >= 12 ? 'PM' : 'AM');

    /*
    returns the height and width of the text 
    for the font properties
    */
    let textSize = context.measureText(am_pm);

    /*
    Draws the text and positions the text centered
    about the y=0 x=-40 position
    */
    context.fillText(am_pm, 0 - textSize.width / 2,-63);  
    context.fillStyle = "#777777";
}

function writeDate(currentDate) {
    // Set the text font properties
    context.font = "20pt Serif";

    // Get the 4 digit year from the date
    let year = currentDate.getFullYear();

    /*
    Converts the date month value into the month
    name from the months array
    */
   const months = ["January", "February", "March", "April", "May",
   "June", "July", "August", "September", "October", "November",
   "December"];
    let month = months[currentDate.getMonth()];

    // The day of the month
    let dayNumber = currentDate.getDate();
    

    /*
    converts the day of the week number into
    the day name from the days array
    */
    const days = [ 'Sun', 'Mon', 'Tues','Wed', 'Thurs', 'Fri', 'Sat'];
    let day = days[currentDate.getDay()];

    // String concatenation of the full date text to be displayed
    let dateString = day + " " + dayNumber + " " + month + ", " + year;

    /*
    returns the height and width of the text
     for the font properties
     */
    let textSize = context.measureText(dateString);

    /*
    Draws the text and positions the text centered about
    the y=0 x=-40 position
    */
    context.fillText(dateString, 0 - textSize.width / 2, 63);
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
    /*
    Test that the clock background image file has loaded before 
    creating the clock.
    if not, wait 10ms and try calling the clock() function again
    */
    if (!clockFaceImgLoaded) {
        setTimeout(clock, 100);
        return;
    }
    /*
    Remap the (0,0) position on the canvas to the
    centre ready for canvas rotation
    */
    context.translate(canvas.width/2, canvas.height/2);

    // Update the createClock() function every second
    setInterval(createClock, 1000);
}

clock();
