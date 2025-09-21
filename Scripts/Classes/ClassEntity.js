class Actor{
    constructor(x, y, size, color, targetX, targetY){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.targetX = targetX;
        this.targetY = targetY;
    }


    draw()
        { 
            ctx.fillStyle = this.color; 
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    

    updatePosition() {
        
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
            this.x = this.targetX;
            this.y = this.targetY;
            return;
        }

        this.x += dx * 0.1;
        this.y += dy * 0.1;
    }
        //функция расчитывает столкновения очень поленая если да возвращает true сли нет то false
    intersects(other) 
    {
        return this.x < other.x + other.size &&
                this.x + this.size > other.x &&
                this.y < other.y + other.size &&
                this.y + this.size > other.y;
    }

}

class Actor_Character extends Actor{
    constructor(x, y, size, color, targetX, targetY, health, sleep, fortune, food, blood, exp, expToNew, speed, cash){
        super(x, y, size, color, targetX, targetY);
        this.health = health;
        this.sleep = sleep;
        this.fortune = fortune;
        this.food = food;
        this.blood = blood;
        this.exp = exp;
        this.expToNew = expToNew;
        this.speed = speed;
        this.isDead = false;
        this.cash = cash;

        this.image = new Image();
        this.image.src = "";
    }
    /*
    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        } else {
            // fallback если текстура еще не загружена
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }
    */
}

/* Базовый шаблон для новых классов
class ClassName extends Actor{
    constructor(x, y, size, color, targetX, targetY){
        super(x, y, size, color, targetX, targetY);

    }
}
*/

class Actor_Casino extends Actor{
    constructor(x, y, size, color, targetX, targetY){
        super(x, y, size, color, targetX, targetY);
        
    }
}

let isInCasino = false; 
let IsDaveMode = false;
let casino = new Actor_Casino(260, 40, 40 , "#0099ff", 260, 40)
let player = new Actor_Character(500, 220, 40, "#ff6600", 500, 260, 100, 100, 40, 100, 100, 1, 10, 2, 1000);