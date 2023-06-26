import {FRAME_WIDTH, FRAME_HEIGHT} from "./constants"

export const animations = {}

export function createAnimation(id, name, frameWidth, frameHeight, numberOfFrames) {
    const frames = {}

    for (let i = 0; i < numberOfFrames; i++) {
        frames[i] = { x: i * frameWidth, y: (id - 1) * frameHeight }
    }

    const animation = {
        id,
        name,
        frameWidth,
        frameHeight,
        numberOfFrames,
        frames
    }

    animations[name] = animation

    return animation
}

export function registerAnimations() {
    createAnimation(1, "idle", FRAME_WIDTH, FRAME_HEIGHT, 7)
    createAnimation(2, "jumping", FRAME_WIDTH, FRAME_HEIGHT, 7)
    createAnimation(3, "falling", FRAME_WIDTH, FRAME_HEIGHT, 7)
    createAnimation(4, "running", FRAME_WIDTH, FRAME_HEIGHT, 8)
    createAnimation(5, "spinning_head", FRAME_WIDTH, FRAME_HEIGHT, 11)
    createAnimation(6, "sitting", FRAME_WIDTH, FRAME_HEIGHT, 5)
    createAnimation(7, "circle", FRAME_WIDTH, FRAME_HEIGHT, 7)
    createAnimation(8, "dash", FRAME_WIDTH, FRAME_HEIGHT, 7)
    createAnimation(9, "falling_down", FRAME_WIDTH, FRAME_HEIGHT, 12)
    createAnimation(10, "dance", FRAME_WIDTH, FRAME_HEIGHT, 4)
    return animations
}