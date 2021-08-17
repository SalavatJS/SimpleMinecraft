export default class Player{
    constructor(position, fov, viewRatio, minDist = 0.1, maxDist = 1000, pov = new THREE.Vector3(0, 0, 0)){
        this.camera = new THREE.PerspectiveCamera(fov, viewRatio, minDist, maxDist)
        this.camera.position.x = position.x, this.camera.position.y = position.y, this.camera.position.z = position.z
        this.lookAt(pov)
        this.camera.updateProjectionMatrix()
    }
    setSpeed(rightLeftSpeed, forwardBackwarsSpeed, updownSpeed){
        this.rightLeftSpeed = rightLeftSpeed
        this.forwardBackwarsSpeed = forwardBackwarsSpeed
        this.updownSpeed = updownSpeed
    }
    goRight(){
        this.camera.translateX(this.rightLeftSpeed)
        this.camera.updateProjectionMatrix()
    }
    goLeft(){
        this.camera.translateX(-this.rightLeftSpeed)
        this.camera.updateProjectionMatrix()
    }
    goUp(){
        this.camera.translateY(this.updownSpeed)
        this.camera.updateProjectionMatrix()
    }
    goDown(){
        this.camera.translateY(-this.updownSpeed)
        this.camera.updateProjectionMatrix()
    }
    goForward(){
        this.camera.translateZ(-this.forwardBackwarsSpeed)
        this.camera.updateProjectionMatrix()
    }
    goBackward(){
        this.camera.translateZ(this.forwardBackwarsSpeed)
        this.camera.updateProjectionMatrix()
    }
    lookAt(pov){
        this.camera.lookAt(pov)
        this.camera.updateProjectionMatrix()
    }
}