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

let circleObject = {};
circleObject.x = 400;
circleObject.y = 200;
circleObject.radius = 40;
circleObject.color = "purple";
circleObject.speedX = 3;
circleObject.speedY = 2;

circleObject.draw = function(){
    context.beginPath();
    context.lineWidth = "5";
    context.fillStyle = circleObject.color;
    context.arc(circleObject.x, circleObject.y, circleObject.radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.stroke();
}

circleObject.update = function(){
    circleObject.x = circleObject.x + circleObject.speedX;
    circleObject.y = circleObject.y + circleObject.speedY;

    if(circleObject.x - circleObject.radius <= 0) {
        circleObject.speedX = -circleObject.speedX;
    } 
    
    else if(circleObject.y - circleObject.radius <= 0) {
        circleObject.speedY = -circleObject.speedY;
    }
    
    else if(circleObject.x + circleObject.radius >= window.innerWidth) {
        circleObject.speedX = -circleObject.speedX;
    }
    
    else if(circleObject.y + circleObject.radius >= window.innerHeight) {
        circleObject.speedY = -circleObject.speedY;
    }
}



function anime(){
    context.clearRect(0, 0, width, height);
    // circleObject.x += circleObject.speedX;
    // circleObject.y += circleObject.speedY;
    circleObject.update();
    circleObject.draw();
}

setInterval(anime, 10);