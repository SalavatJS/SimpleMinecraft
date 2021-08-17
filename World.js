import TextureLoader from './TextureLoader.js'
import Block from './Block.js'
export default class World extends THREE.Scene{
    constructor(size = new THREE.Vector3(10, 10, 10)){
        super()
        this.blocks = []
        this.size = size.clone()
        this.textures = TextureLoader.textures
        this.generateWorld()
    }
    addBlock(...blocks){
        blocks.forEach((block) => {
            this.blocks.push(block)
            this.add(block.mesh)
        })
    }
    generateWorld(){
        const newWorld = []
        for(let w = 0; w < this.size.x; w++){
            for(let h = 0; h < this.size.y; h++){
                for(let d = 0; d < this.size.z; d++){
                    newWorld.push(new Block(new THREE.Vector3(w, h, d), this.textures.get('./DirtTexture.jpeg'), 
                        new THREE.Vector3(1, 1, 1)))
                }
            }
        }
        this.addBlock(...newWorld)
    }
}