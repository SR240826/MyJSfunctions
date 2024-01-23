export class Player {
    #canvas; // main canvas ID
    #ctx; // canvas.getContext('2d');
    constructor(canvas, ctx, color) {
        this.#ctx = ctx;
        this.#canvas = canvas;
        this.size = {
            width: this.#canvas.width/30,
            height: this.#canvas.width/30
        }
        this.position = {
            x: Math.random() * (this.#canvas.width - this.size.width) + 5,
            y: Math.random() * (this.#canvas.height - this.size.height* 2) + 60,
        }
        this.color = color;
        this.velocity = {
            x: 0,
            y: 0
        }
    }
    draw() {
        this.#ctx.fillStyle = this.color;
        this.#ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        
    }
    update(velocityX, velocityY) {
        this.draw();
        this.position.x += velocityX;
        this.position.y += velocityY;
    }
}