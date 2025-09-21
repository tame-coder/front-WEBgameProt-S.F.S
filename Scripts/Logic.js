
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function isInteracts(){
    if (player.intersects(casino)) {
        if (!isInCasino) {
            isInCasino = true;
            showCasino(); // вызвать один раз при входе
        }
    } else {
        if (isInCasino) {
            isInCasino = false;
            mainStart(); // выход из казино
        }
    }
}


function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    casino.draw();
    player.draw();
    
    showDevLogs()
    ctx.fillStyle = "white";
    ctx.fillText('Игрок', player.x, player.y - 5);
}

function gameLoop() {
    player.updatePosition();

    isInteracts();
    drawAll();
    requestAnimationFrame(gameLoop);
}

gameLoop();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function move(action){
    if (player.isDead) return;
    

        switch (action) {
            case "up":
                if (player.y > 0) player.targetY -= 10 * player.speed;
                else player.isDead = true;
                break;
            case "down":
                if (player.y + player.size < canvas.height) player.targetY += 10 * player.speed;
                else player.isDead = true;
                break;A
            case "left":
                if (player.x > 0) player.targetX -= 10 * player.speed;
                else player.isDead = true;
                break;
            case "right":
                if (player.x + player.size < canvas.width) player.targetX += 10 * player.speed;
                else player.isDead = true;
                break;
        }
    drawAll();
}
//упровление
document.addEventListener("keydown", function(event) {
    if (event.key === "w") {
        move("up");
    } else if (event.key === "s") {
        move("down");
    } else if (event.key === "a") {
        move("left");
    } else if (event.key === "d") {
        move("right");
    } else if (event.key === "ц") {
        move("up");
    } else if (event.key === "ы") {
        move("down");
    } else if (event.key === "ф") {
        move("left");
    } else if (event.key === "в") {
        move("right");
    }
});


