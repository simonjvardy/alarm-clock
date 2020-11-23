// Code credit: Adapted from tutorials on the following sites
// http://www.dhtmlgoodies.com/tutorials/canvas-clock/
// http://www.jquery2dotnet.com/2012/11/html5-clocks.html
// http://www.script-tutorials.com/html5-clocks/
// https://www.w3schools.com/graphics/canvas_clock.asp

const canvas = document.getElementById('clockCanvas');  // Get the javascript DOM reference to the canvas tag
const context = canvas.getContext('2d'); // The context method contains all the properties needed to draw on the canvas
const clockFaceImg = new Image();
clockFaceImg.src = 'assets/img/clock-face.png';




// Code Snippet adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// Fetch the background image and wait for it to load
/*async function getClockImage() {
    try {
        const response = await fetch('assets/img/clock-face.png');
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        } else {
            const blob = await response.blob();  // returns the results of the fulfilled fetch promise as a blob
            const url = URL.createObjectURL(blob);  // creates a DOMString containing the object URL that can be used to reference the contents of the specified source object.
            clockFaceImg.src = url;
        }
    } catch(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    }
}

getClockImage();


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
})*/

// Add the clock face
clockFaceImg.addEventListener('Load', e => {
    context.drawImage(clockFaceImg, 0, 0, canvas.width, canvas.height);
});
    

// Draw the clock hour hand


// Draw the clock minutes hand


// Draw the clock seconds hand


// Write text on the clock face


// Create the whole clock
function generateClock() {

}

// Make the clock run
function clock() {
    context.translate(canvas.width/2, canvas.height/2);
    generateClock();
}

clock();  // start the application