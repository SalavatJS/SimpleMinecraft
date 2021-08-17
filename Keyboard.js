export default class Keyboard{
    static codes = {
        left: 'KeyA',
        right: 'KeyD',
        forward: 'KeyW',
        backward: 'KeyS',
        up: 'Space',
        down: 'ShiftLeft'
    }
    constructor(player){
        this.player = player
        let currentAction = null
        window.addEventListener('keydown', (event) => {
            const code = event.code
            if(code === Keyboard.codes.right){
                currentAction = requestAnimationFrame(this.player.goRight.bind(player))
            }
            else if(code === Keyboard.codes.left){
                currentAction = requestAnimationFrame(this.player.goLeft.bind(player))
            }
            if(code === Keyboard.codes.up){
                currentAction = requestAnimationFrame(this.player.goUp.bind(player))
            }   
            if(code === Keyboard.codes.down){
                currentAction = requestAnimationFrame(this.player.goDown.bind(player))
            } 
            if(code === Keyboard.codes.forward){
                currentAction = requestAnimationFrame(this.player.goForward.bind(player))
            }
            if(code === Keyboard.codes.backward){
                currentAction = requestAnimationFrame(this.player.goBackward.bind(player))
            }
        })
        window.addEventListener('keyup', () => cancelAnimationFrame(currentAction))
    }
}