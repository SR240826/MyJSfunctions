export class keys {
    // set the intended keys to control and velocity of controllable object    

    constructor(left, right, up, down, velocityX, velocityY) {
        this.direction = {
            left: left,
            right: right,
            up: up,
            down: down,
        }

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
            case (this.direction.left):
                this.keystatus.left = true;
                this.velocity.x = -1;
                break;
            case (this.direction.right):
                this.keystatus.right = true;
                this.velocity.x = 1;
                break;
            case (this.direction.up):
                this.keystatus.up = true;
                this.velocity.y = -1;
                break;
            case (this.direction.down):
                this.keystatus.down = true;
                this.velocity.y = 1;
                break;
        }
    }

    //key up event
    resetkey(e){
        switch (e.key.toLowerCase()) {
            case (this.direction.left):
                this.keystatus.left = false;
                break;
            case (this.direction.right):
                this.keystatus.right = false;
                break;
            case (this.direction.up):
                this.keystatus.up = false;
                break;
            case (this.direction.down):
                this.keystatus.down = false;
                break;
        }
        this.velocity.x = 0;
        this.velocity.y = 0
    }
}