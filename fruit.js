function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function () {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function (img) {
        ctx.drawImage(img, this.x, this.y, scale, scale);
    }
}