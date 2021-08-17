export default class TextureLoader{
    static textures = new Map()
    constructor(){
        this.textureLoader = new THREE.TextureLoader()
    }
    load(url){
        if(TextureLoader.textures.has(url)) {
            console.warn('There is this texture yet!')
            return
        }
        const texture = this.textureLoader.load(url)
        TextureLoader.textures.set(url, texture)
    }
}