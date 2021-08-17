export default class Renderer{
    constructor(canvas, world, player, clearColor){
        this.world = world, this.player = player
        this.renderer = new THREE.WebGLRenderer({canvas})
        this.setClearColor(clearColor)
    }
    setClearColor(color){
        this.renderer.setClearColor(new THREE.Color(color))
    }
    render(){
        requestAnimationFrame(this.render.bind(this))

        this.renderer.render(this.world, this.player.camera)
    }
}