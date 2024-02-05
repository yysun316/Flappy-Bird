var game = document.getElementById("game");
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var messageStart = document.getElementById("messageStart");
var messageEnd = document.getElementById("messageEnd");
var jumping = false;
var counter = 0;
var running = false;

// Start Game
game.addEventListener('click', function () {
    running = true;
    block.style.animationPlayState = "running";
    hole.style.animationPlayState = "running";
    character.style.animationPlayState = "running";
    // Hide start message
    messageStart.style.display = "none";
    // Hide end message
    messageEnd.style.display = "none";
});

hole.addEventListener('animationiteration', () => {
    if (running == true) {
        var random = -((Math.random() * 300) + 150);
        hole.style.top = random + "px";
        counter++;
    }
});
setInterval(function () {
    if (running == true) {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumping == false) {
            character.style.top = (characterTop + 3) + "px";
        }
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var cTop = -(500 - characterTop);
        // Game over: 
        if ((characterTop > 480) || // 1. Character hits the ground 
            ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) { // 2. Character hits the block
            running = false;
            alert("Game over. Score: " + (counter - 1));
            messageEnd.style.display = "block";
            character.style.top = 100 + "px";
            count = 0;
        }
    }
}, 10);

function jump() {
    jumping = true;
    let jumpCount = 0;
    var jumpInterval = setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        // allow character to fall down after jump
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = false;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}