import TextureLoader from './TextureLoader.js'
import Player from './Player.js'
import Renderer from './Renderer.js'
import World from './World.js'
import Keyboard from './Keyboard.js'
import Mouse from './Mouse.js'

const textureURL = './DirtTexture.jpeg'
const textureLoader = new TextureLoader()
textureLoader.load(textureURL)
const canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth, canvas.height = window.innerHeight
const player = new Player(new THREE.Vector3(0, 0, 15), 50, window.innerWidth / window.innerHeight, 0.1, 1000)
player.setSpeed(0.1, 0.1, 0.1)
const keyboard = new Keyboard(player)
const mouse = new Mouse(player, canvas)
const world = new World()
const renderer = new Renderer(canvas, world, player, 0xAAAAAA)
world.add(player.camera)
renderer.render()