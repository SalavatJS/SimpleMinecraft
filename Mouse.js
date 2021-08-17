export default class Mouse{
    constructor(player, canvas){
        this.player = player
        function mousemoveCallback(event){
            player.camera.rotateY(-event.movementX * 0.005)
            console.log('mousemove')
        }
        function pointerlockchangeCallback(){
            document.removeEventListener('pointerlockchange', pointerlockchangeCallback)
            canvas.addEventListener('click', clickCallback)
            canvas.addEventListener('mousemove', mousemoveCallback)
            console.log('pointerlockchange')
        }
        function clickCallback(){
            canvas.requestPointerLock()
            canvas.removeEventListener('click', clickCallback)
            document.addEventListener('pointerlockchange', pointerlockchangeCallback)
            canvas.removeEventListener('mousemove', mousemoveCallback)
            console.log('click')
        }
        canvas.addEventListener('click', clickCallback)
    }
}