export class Player {
    #canvas; // main canvas ID
    #ctx; // canvas.getContext('2d');
    constructor(canvas, ctx, color) {
        this.#ctx = ctx;
        this.#canvas = canvas;
        this.size = {
            width: canvas.width/30,
            height: canvas.width/30
        }
        this.position = {
            x: Math.random() * (canvas.width - this.size.width) + 5,
            y: Math.random() * (canvas.height - this.size.height* 2) + 60,
        }
        this.color = color;
    }
    draw() {
        this.#ctx.fillStyle = this.color;
        this.#ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        if (this.position.y > canvas.height - this.size.height) {
            this.#ctx.clearRect(this.position.x, this.position.y, this.size.width, this.size.height);
            this.position.y = Math.random() * (canvas.height - this.size.height* 2) + 60;
            this.draw()
        }
    }
}