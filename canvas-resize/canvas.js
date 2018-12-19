console.log('r/place');

const canvas = document.querySelector('canvas');

// setting element to entier width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas)

// c stands for context
// returning an object that allows us to draw 2d elements
const c = canvas.getContext('2d');

// filling object (x, y, width, height)
// will start from upper left of screen
c.fillStyle = "rgba(255, 0,0,0.5)";
// addin color
c.fillRect(100, 100, 100, 100);

c.fillStyle = "rgba(0, 0,255,0.5)";
c.fillRect(400, 100, 100, 100);

c.fillStyle = "rgba(0, 255,0,0.5)";
c.fillRect(600, 300, 100, 100);

// c.fillRect(800, 100, 100, 100);



// ======== Line ========

// start path
c.beginPath();
// set cordinates (x, y)
c.moveTo(50, 300);
// creates line to a new point
c.lineTo(300, 100);
// extending line to another point
c.lineTo(400, 300);
// adding color to our stroke
c.strokeStyle = "blue";
c.stroke();