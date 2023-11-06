
class Player extends Sprite {
    constructor({
        collisionBlocks = [], imageSrc
    }) {
        super({ imageSrc })
        this.position = {
            x: 200,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.gravity = 1

        this.collisionBlocks = collisionBlocks
        console.log(this.collisionBlocks)

        this.width = 25
        this.height = 25
        this.sides = {
            bottom: this.position.y + this.height
        }

    }


    update() {
        this.position.x += this.velocity.x

        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.checkForVerticalCollisions()

        //above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
        } else this.velocity.y = 0

    }
    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            //if a collision exists
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
                //collision on left axis going to the left
                if (this.velocity.x < 0) {
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                    break
                }
                if (this.velocity.x > 1) {
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                }

            }
        }
    }

    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }

    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            //if a collision exists
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
                //collision on left axis going to the left
                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                    break
                }
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                }

            }
        }
    }
}


