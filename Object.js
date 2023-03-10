const Vector2D = require('./Vector.js');
const Physics = require('./Physics.js');

class Object2D{
    constructor(x, y, drag, staticFriction){
        this.position = new Vector2D(x, y); //center of object
        this.corner = [];
        this.angle = 0; //angle of rotation
        this.physics = new Physics(drag, staticFriction);
    }

    addCorner(x, y){
        this.corner.push(new Vector2D(x, y));
    }

    setCorner(index, x, y){
        this.corner[index].set(x, y);
    }

    getCorner(index){
        return this.corner[index];
    }

    getCornerCount(){
        return this.corner.length;
    }

    getCenter(){
        return this.position;
    }

    Rotate(angle){
        this.angle += angle;
    }

    setAngle(angle){
        this.angle = angle;
    }

    getAngle(){
        return this.angle;
    }

    //make angle of rotation by the physics engine
    update(){
        this.physics.update();
        this.position.add(this.physics.getVelocity());
        this.Rotate(this.physics.getRotationalVelocity());
    }

    //set all corners x y position from the rotation and position of the object
    updateCorner(){
        for(let i = 0; i < this.corner.length; i++){
            let x = this.corner[i].x * Math.cos(this.angle) - this.corner[i].y * Math.sin(this.angle);
            let y = this.corner[i].x * Math.sin(this.angle) + this.corner[i].y * Math.cos(this.angle);
            this.corner[i].set(x, y);
        }
    }
}