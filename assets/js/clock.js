// Code credit: Adapted from tutorials on the following sites
// http://www.dhtmlgoodies.com/tutorials/canvas-clock/
// http://www.jquery2dotnet.com/2012/11/html5-clocks.html
// http://www.script-tutorials.com/html5-clocks/
// https://www.w3schools.com/graphics/canvas_clock.asp

// Get the javascript DOM reference to the canvas tag
const canvas = document.getElementById('clockCanvas');
const context = canvas.getContext('2d'); // The context method contains all the properties needed to draw on the canvas

//
// Code snippet from https://stackoverflow.com/questions/3511200/new-image-how-to-know-if-image-100-loaded-or-not
// ANd https://web.dev/promises/
function getImage(url) {
    return new Promise(function(resolve, reject) {
        let clockFaceImg = new Image();
        clockFaceImg.onload = function() { 
            resolve(url); 
        }
        clockFaceImg.onerror = function() {
            reject(url);
        }
        clockFaceImg.src = url;
    });
}

getImage('assets/img/clock-face.png').then(function(response) {
    return response;
}, function(error) {
    console.log("Failed to Load!", error);
})

// Add the clock face
function loadBackgroundImage() {
    context.drawImage(getImage, 0, 0, canvas.clientWidth, canvas.height);
}

// Draw the clock hour hand


// Draw the clock minutes hand


// Draw the clock seconds hand


// Write text on the clock face


// Create the whole clock


// Make the clock run
function clock() {

}

clock();  // start the application