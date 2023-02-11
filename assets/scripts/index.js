const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 // 576

const player = new Player()
const keys = {
    w: { pressed: false },
    a: { pressed: false },
    d: { pressed: false },
    s: { pressed: false },
}

function animate () {
    window.requestAnimationFrame(animate)
        
    backgroundLevel1.draw()

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5
    
    player.draw()
    player.update()
}

animate()
