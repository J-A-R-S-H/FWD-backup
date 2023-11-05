window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            if (player.velocity.y === 0) {
                player.velocity.y = -20
            }
            break
        case "a":
            keys.a.pressed = true
            player.velocity.x = -4
            break

        case "d":
            keys.d.pressed = true
            player.velocity.x = 4
            break
    }
})

window.addEventListener("keyup", (event) => {
    switch (event.key) {

        case "a":
            keys.a.pressed = false
            player.velocity.x = 0
            break

        case "d":
            keys.d.pressed = false
            player.velocity.x = 0
            break
    }
})