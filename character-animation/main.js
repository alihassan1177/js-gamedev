import { registerAnimations } from "./animations"
import { CANVAS_HEIGHT, FRAME_HEIGHT, CANVAS_WIDTH, FRAME_WIDTH, STAGGERD_FRAMES } from "./constants"
import './style.css'

const doc = document
const app = doc.querySelector("#app")
const canvas = doc.createElement('canvas')
app.appendChild(canvas)

canvas.height = CANVAS_HEIGHT
canvas.width = CANVAS_WIDTH

const animationSelector = doc.querySelector("#animation-selector")

const context = canvas.getContext('2d')

const spriteImage = new Image()
spriteImage.src = "/sprite.png"

const animations = registerAnimations()

let selectedAnimation = Object.keys(animations)[0]

for (const animation in animations) {
  const option = doc.createElement('option')
  option.value = animation
  option.innerText = animation
  animationSelector.appendChild(option)
}

let i = 0
let gameFrame = 0

animationSelector.addEventListener('change', (e) => {
  let value = e.target.value
  selectedAnimation = value
  i = 0
})

function animate() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  context.drawImage(spriteImage, animations[selectedAnimation].frames[i].x, animations[selectedAnimation].frames[i].y, FRAME_WIDTH, FRAME_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  if (gameFrame % STAGGERD_FRAMES == 0) {
    i = i < animations[selectedAnimation].numberOfFrames - 1 ? i + 1 : 0
  }

  gameFrame++

  requestAnimationFrame(animate)
}

animate()