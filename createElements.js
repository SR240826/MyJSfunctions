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
    }
    draw() {
        this.#ctx.fillStyle = this.color;
        this.#ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.size.width, 
            this.size.height
            );
        
    }
    update(velocityX, velocityY) {
        this.draw();
        this.position.x += velocityX;
        this.position.y += velocityY;
    }
}

export class Image {
    #image;
    #cropStartX;
    #cropStartY;
    #cropX;
    #cropY;
    #ctx;
    
    constructor(ctx, image, cropStartX, cropStartY, cropX, cropY, imagePosX, imagePosY, imageSizeX, imageSizeY) {
        
        this.#ctx= ctx;
        this.#image = image;
        this.#cropStartX = cropStartX;
        this.#cropStartY = cropStartY;
        this.#cropX = cropX;
        this.#cropY = cropY;
        this.size = {
            width: imageSizeX,
            height: imageSizeY
        }
        this.position = {
            x: imagePosX,
            y: imagePosY
        }
    }
    draw() {
        // *************************
        // this two lines will check collision area/bounding box. uncomment to view
        // this.#ctx.fillStyle = "red";
        // this.#ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        // **************************
        this.#ctx.drawImage(
            this.#image, 
            this.#cropStartX, 
            this.#cropStartY, 
            this.#cropX, 
            this.#cropY, 
            this.position.x, 
            this.position.y, 
            this.size.width, 
            this.size.height
            );
    }
    
    clone() {
        // Create a new instance of the Image class
        const clonedImage = new Image(
            this.#ctx,
            this.#image,
            this.#cropStartX,
            this.#cropStartY,
            this.#cropX,
            this.#cropY,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );

        return clonedImage;
    }
}