export class Player {
    #canvas; // main canvas ID
    #ctx; // canvas.getContext('2d');
    constructor(canvas, ctx, color, width, height) {
        this.#ctx = ctx;
        this.#canvas = canvas;
        this.size = {
            width: width,
            height: height
        }
        this.position = {
            x: Math.random() * (this.#canvas.width - this.size.width),
            y: Math.random() * (this.#canvas.height - this.size.height* 2),
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
    // This is for the change of spawn position to avoid overlap
    updatePosition(pX, pY) {
        this.draw();
        this.position.x = pX;
        this.position.y = pY;
    }
}

// to create any image for static environment or background elements
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
        // Create a new instance of the Image class. Very useful to create and redefine as new array elements
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
    // This is for the change of spawn position to avoid overlap
    update(px, py) {
        this.draw();
        this.position.x = px;
        this.position.y = py;
        
    }
}