// Get the javascript DOM reference to the canvas tag
let canvas = document.getElementById('clockCanvas');
let context = canvas.getContext('2d'); // The context method contains all the properties which we will use to draw on the canvas


// Configure the loading of the background image
// Ensure the image has loaded from the server first - clockImageLoaded returns true once the image is loaded
let clockImage = new Image();
let clockImageLoaded = false;

// Add the clock face


// Draw the clock hour hand


// Draw the clock minutes hand


// Draw the clock seconds hand


// Write text on the clock face


// Create the whole clock


// Make the clock run