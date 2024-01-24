export class keys {
    // set the intended keys to control and velocity of controllable object
    #left;
    #right;
    #up;
    #down;
    

    constructor(left, right, up, down, velocityX, velocityY) {
        this.#left = left;
        this.#right = right;
        this.#up = up;
        this.#down = down;

        // public or global variables that may need modification from outside
        this.velocity = {
            x: velocityX,
            y: velocityY
        }
        this.keystatus = {
            left: false,
            right: false,
            up: false,
            down: false,
        }
    }
    
    // keydown/key pressed event
    control(event) {
        switch (event.key.toLowerCase()) {
            case (this.#left):
                this.keystatus.left = true;
                this.velocity.x -= 1;
                break;
            case (this.#right):
                this.keystatus.right = true;
                this.velocity.x += 1;
                break;
            case (this.#up):
                this.keystatus.up = true;
                this.velocity.y -= 1;
                break;
            case (this.#down):
                this.keystatus.down = true;
                this.velocity.y += 1;
                break;
        }
    }

    //key up event
    resetkey(e){
        switch (e.key.toLowerCase()) {
            case (this.#left):
                controlkey.keystatus.left = false;
                break;
            case (this.#right):
                controlkey.keystatus.right = false;
                break;
            case (this.#up):
                controlkey.keystatus.up = false;
                break;
            case (this.#down):
                controlkey.keystatus.down = false;
                break;
        }
    }
}