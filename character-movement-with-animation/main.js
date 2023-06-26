import { registerAnimations } from "./animations"
import { CANVAS_HEIGHT, FRAME_HEIGHT, CANVAS_WIDTH, FRAME_WIDTH, STAGGERD_FRAMES, CHARACTER_SIZE } from "./constants"
import './style.css'

const doc = document
const app = doc.querySelector("#app")
const canvas = doc.createElement('canvas')
app.appendChild(canvas)

canvas.height = CANVAS_HEIGHT
canvas.width = CANVAS_WIDTH

const context = canvas.getContext('2d')

const spriteImage = new Image()
spriteImage.src = "/sprite.png"

const animations = registerAnimations()

let selectedAnimation = Object.keys(animations)[0]

let currentFrame = 0
let gameFrame = 0

const character = {
  animation: animations.idle
}

console.log(animations)

doc.body.addEventListener('keydown', (e) => {
  const key = e.key

  console.log(e)

  if (character.animation.name === "idle" && e.key != "Shift") {
    currentFrame = 0

    if (e.shiftKey && key == "ArrowRight") {
      character.animation = animations.circle
    }

    if (key == "ArrowDown") {
      character.animation = animations.falling
    }

    if (key == "ArrowUp") {
      character.animation = animations.jumping
    }

  }

})

doc.body.addEventListener('keyup', (e) => {
  currentFrame = 0
  character.animation = animations.idle
})

function animate() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  context.drawImage(spriteImage, character.animation.frames[currentFrame].x, character.animation.frames[currentFrame].y, FRAME_WIDTH, FRAME_HEIGHT, 0, CANVAS_HEIGHT - CHARACTER_SIZE, CHARACTER_SIZE, CHARACTER_SIZE)

  if (gameFrame % STAGGERD_FRAMES == 0) {
    currentFrame = currentFrame < character.animation.numberOfFrames - 1 ? currentFrame + 1 : 0
  }

  gameFrame++

  requestAnimationFrame(animate)
}

animate()