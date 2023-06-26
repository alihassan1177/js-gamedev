import './style.css'

const doc = document
const app = doc.querySelector("#app")
const canvas = doc.createElement("canvas")
const context = canvas.getContext("2d")
app.appendChild(canvas)

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT