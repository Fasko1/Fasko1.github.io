const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 900;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const lover = new Image();
lover.src = "lovetext.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerframe = 5;

// Button properties
var buttonX = 200;
var buttonY = 400;
var buttonWidth = 150;
var buttonHeight = 50;

// Create a new Audio object with the path to your sound file
var sound = new Audio('lovesong.mp3');

// Function to play the sound
function playSound() {
    sound.play();
}

// Render the button
function drawButton() {
    ctx.fillStyle = 'blue'; // Set button color
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight); // Draw the button
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Все Хорошо', buttonX + 10, buttonY + 30); // Add text to the button
}

// Check if the mouse click is inside the button
canvas.addEventListener('click', function(event) {

    frameY = 3;
    playSound();
    }
);


drawButton(); // Call the function to draw the button

 // Call the function to draw the button
function animate(){
    
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawButton();
    ctx.drawImage(lover, 260,30 ,300, 300);
    //ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth*0.5, spriteHeight*0.5);
    if (gameFrame % staggerframe == 0){
        if (frameX < 6) frameX++;
        else frameX = 0;
    }


    gameFrame++;

    requestAnimationFrame(animate);
};
animate();
