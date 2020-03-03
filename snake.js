function Snake() {
    this.x = 0;
    this.y = 0;
    this.velX = scale * 1;
    this.velY = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function () {
        ctx.fillStyle = "#FFFFFF";

        // Draw the tail
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        // Draw the head
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function () {
        // Update every tail position
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        // Update the tail
        this.tail[this.total - 1] = {
            x: this.x,
            y: this.y
        };

        // Velocity update
        this.x += this.velX;
        this.y += this.velY;

        // Check the canvas width and height 
        if (this.x > canvas.width) {
            this.x = 0;
        }

        if (this.x < 0) {
            this.x = canvas.width;
        }

        if (this.y > canvas.height) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    this.changeDirection = function (direction) {
        // Direction and play audio
        switch (direction) {
            case 'Up':
                this.velX = 0;
                this.velY = -scale * 1;
                up.play();
                break;

            case 'Down':
                this.velX = 0;
                this.velY = scale * 1;
                down.play();
                break;

            case 'Left':
                this.velY = 0;
                this.velX = -scale * 1;
                left.play();
                break;

            case 'Right':
                this.velY = 0;
                this.velX = scale * 1;
                right.play();
                break;
        }
    }

    this.eat = function (fruit) {
        // Check collides with fruit, play audio and add +1 tail
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            eat.play();
            return true;
        }
    }

    this.checkCollision = function () {
        // Check collides itself and resets
        for (var i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                dead.play();
                this.tail = [];
                this.total = 0;
            }
        }
    }
}