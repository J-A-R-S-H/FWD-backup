const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")





const parsedCollisions = collisionsLeve1.parse2D()
const collisionBlocks = parsedCollisions.createObjectsFrom2D()

//16:9 aspect ratio
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576 



const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "imgs/backgroundLevel1.png"
})

const player = new Player({
    collisionBlocks,
    imageSrc: "../imgs/king/idle.png",
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 3,
            loop: true,
            imageSrc: "../imgs/king/idle.png"
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 3,
            loop: true,
            imageSrc: "../imgs/king/idleLeft.png"
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "../imgs/king/runRight.png"
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "../imgs/king/runLeft.png"
        },
    },
})

const doors = [
    new Sprite({
        position: {
            x: 767,
            y: 270,
        },
        imageSrc: "imgs/doorOpen.png",
        frameRate: 5,
        frameBuffer: 8,
        loop: false,
    })
]


const keys = {
    w: {
        pressed: false
    },

    a: {
        pressed: false
    },

    d: {
        pressed: false
    },
}


function animate() {
    window.requestAnimationFrame(animate)

    backgroundLevel1.draw()
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })

    doors.forEach((door) => {
        door.draw()
    })

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.switchSprite("runRight")
        player.velocity.x = 4
        player.lastDirection = "right"
    }
    else if (keys.a.pressed) {
        player.switchSprite("runLeft")
        player.velocity.x = -4
        player.lastDirection = "left"
    }
    else {
        if (player.lastDirection === "left") {
            player.switchSprite("idleLeft")
        } else {
            player.switchSprite("idleRight")
        }
    }
    player.draw()
    player.update()
}

animate()