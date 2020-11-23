// Code credit: Adapted from tutorials on the following sites
// http://www.dhtmlgoodies.com/tutorials/canvas-clock/
// http://www.jquery2dotnet.com/2012/11/html5-clocks.html
// http://www.script-tutorials.com/html5-clocks/
// https://www.w3schools.com/graphics/canvas_clock.asp

// Get the javascript DOM reference to the canvas tag
const canvas = document.getElementById('clockCanvas');
const context = canvas.getContext('2d'); // The context method contains all the properties needed to draw on the canvas

// Code Snippet adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// Fetch the background image and wait for it to load
async function getClockImage() {
    const response = await fetch('assets/img/clock-face.png');
    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    } else {
        const blob = await response.blob();  // returns the results of the fetch function as a blob
        const url = URL.createObjectURL(blob);  // creates a DOMString containing the object URL that can be used to reference the contents of the specified source object.
        clockFaceImg.src = url;
    }
}

getClockImage().catch(error => {
    console.log('There has been a problem with your fetch operation: ' + error.message);
});


/*function getImage(url) {
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
})*/

// Add the clock face
function loadBackgroundImage() {
    context.drawImage(getClockImage, 0, 0, canvas.clientWidth, canvas.height);
}

// Draw the clock hour hand


// Draw the clock minutes hand


// Draw the clock seconds hand


// Write text on the clock face


// Create the whole clock
function generateClock() {
    loadBackgroundImage();
}

// Make the clock run
function clock() {

}

clock();  // start the application