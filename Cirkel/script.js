// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
function drawcircle(){
    let x = getRandomNumber(width);
    let y = getRandomNumber(height);
    var minRadius = 25;
    context.beginPath();
    context.lineWidth = "5";
    context.fillStyle = colors[getRandomNumber(colors.length)];
    context.arc(x,y,minRadius * Math.random(),0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
}

let colors = ["red", "blue", "green"];

function animate(){
    drawcircle();
}

setInterval(animate, 1)

for (let i = 0; i<0; i++) {
    drawcircle();
}

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}
