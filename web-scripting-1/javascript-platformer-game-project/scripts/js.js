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
    imageSrc: "../imgs/backgroundLevel1.png"
})

const player = new Player({
    collisionBlocks,
    imageSrc: "../imgs/king/idle.png"
})


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
    player.velocity.x = 0
    if (keys.d.pressed) {
        player.velocity.x = 4
    }
    else if (keys.a.pressed) {
        player.velocity.x = -4
    }

    player.draw()
    player.update()
}

animate()