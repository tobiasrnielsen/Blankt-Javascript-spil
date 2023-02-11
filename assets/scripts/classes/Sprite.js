class Sprite {
    constructor ({ position, imageSrc }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => { this.loaded = true }
        this.image.src = imageSrc
        this.loaded = false
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './assets/img/backgroundLevel1.png',
})