//Module for compass 

var moduleCompass = (function () {
    // degrees in 0 

    var degrees = 0;
    
    //function to clear canvas 

    var clearCanvas = function clearCanvas() {
        ctx.clearRect(0, 0, 200, 200);
    }

    //function to draw canvas 
    var draw = function draw() {

        //callback to clear canvas 
        clearCanvas();

        // start draw in coordinates
        ctx.drawImage(img, 0, 0);

        // save the current drawing
        ctx.save();

        // move to drawing  
        ctx.translate(100, 100);

        // Math Pi for rotate draw
        ctx.rotate(degrees * (Math.PI / 180));

        // Draw again de image 
        ctx.drawImage(needle, -100, -100);

        // restore drawing 
        ctx.restore();

        // increment degree
        degrees += 5;
    }

    var imgLoaded = function imgLoaded() {

        setInterval(draw, 100);
    }

    var init = function init() {

        var canvas = document.getElementById('compass');

        if (canvas.getContext('2d')) {
            ctx = canvas.getContext('2d');

            // load the needle image
            needle = new Image();
            needle.src = './img/needle2.png';

            // load the compass image
            img = new Image();
            img.src = './img/compass2.png';
            img.onload = imgLoaded;
        } else {
            alert("Canvas not supported!");
        }
    }

  
    return {
        init: init()
    }
}());


document.getElementById('compass').addEventListener('onload', function(){
    moduleCompass.init();
})
