// Canvas variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Scale of the objects
const scale = 30;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// Fruit image
const fruitImg = new Image();
fruitImg.src = 'img/food.png';

// Audios
const up = new Audio();
up.src = "./audio/up.mp3";
const down = new Audio();
down.src = "./audio/down.mp3";
const left = new Audio();
left.src = "./audio/left.mp3";
const right = new Audio();
right.src = "./audio/right.mp3";
const eat = new Audio();
eat.src = "./audio/eat.mp3";
const dead = new Audio();
dead.src = "./audio/dead.mp3";

// Snake
var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    // Initial fruit location
    fruit.pickLocation();

    // Font 
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    window.setInterval(() => {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw fruit
        fruit.draw(fruitImg);

        // Snake update and draw shapes
        snake.update();
        snake.draw();

        // Check if fruit and snake collides
        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        // Writing the total in the top right corner
        ctx.fillText(snake.total, 588, 28);

        // Check if collides in itself
        snake.checkCollision();
    }, 120);
}());

window.addEventListener('keydown', evt => {
    // Check the pressed keys
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
})