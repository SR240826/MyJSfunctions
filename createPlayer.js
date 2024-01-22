class player { 
    #playerHeight;
    #playerWidth;
    #ctx;
    #playerPosX;
    #playerPosY;
    #color;
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight, color) {
        this.#ctx = ctx;
        this.#playerPosX = playerPosX;
        this.#playerPosY = playerPosY;
        this.#playerWidth = playerWidth;
        this.#playerHeight = playerHeight;
        this.#color = color;
    }
    draw () {
        this.#ctx.fillStyle = this.#color;
        this.#ctx.fillRect(this.#playerPosX, this.#playerPosY, this.#playerWidth, this.#playerHeight) // This will draw a player
    }
    update() {

    }
}