export default class Block{
    constructor(position, texture, size){
        this.position = position, this.texture = texture, this.size = size
        this.boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z)
        this.material = new THREE.MeshBasicMaterial({map: texture})
        this.mesh = new THREE.Mesh(this.boxGeometry, this.material)
        this.mesh.position.set(position.x, position.y, position.z)
    }
}