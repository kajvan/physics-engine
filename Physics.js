const Vector2D = require('./Vector.js');

class Physics{
    constructor(drag = 0.9, staticFriction = 0.9){
        this.drag = drag;
        this.velocity = new Vector2D(0, 0);
        this.acceleration = new Vector2D(0, 0);
        this.staticFriction = staticFriction;
        this.grounded = false;
        //add rotational physics
        this.rotationalVelocity = 0;
        this.rotationalAcceleration = 0;
    }

    gravity(){
        if(this.grounded) return;
        this.acceleration.y -= process.env.GRAVITY;
    }

    applyForce(force){
        this.acceleration.add(force);
    }

    applyTorque(torque){
        this.rotationalAcceleration += torque;
    }

    update(){
        if(this.grounded){
            this.velocity.mult(this.staticFriction);
        }
        else {
            this.gravity();
        }
        this.velocity.add(this.acceleration);
        this.velocity.mult(this.drag);
        this.acceleration.mult(0);
        this.rotationalVelocity += this.rotationalAcceleration;
        this.rotationalVelocity *= this.drag;
        this.rotationalAcceleration = 0;
    }

    getVelocity(){
        return this.velocity;
    }

    getRotationalVelocity(){
        return this.rotationalVelocity;
    }

    setGrounded(grounded){
        this.grounded = grounded;
    }

    isGrounded(){
        return this.grounded;
    }

    setDrag(drag){
        this.drag = drag;
    }

    getDrag(){
        return this.drag;
    }

    setStaticFriction(staticFriction){
        this.staticFriction = staticFriction;
    }

    getStaticFriction(){
        return this.staticFriction;
    }

    setVelocity(velocity){
        this.velocity = velocity;
    }

    setRotationalVelocity(rotationalVelocity){
        this.rotationalVelocity = rotationalVelocity;
    }

    setAcceleration(acceleration){
        this.acceleration = acceleration;
    }

    setRotationalAcceleration(rotationalAcceleration){
        this.rotationalAcceleration = rotationalAcceleration;
    }

    getAcceleration(){
        return this.acceleration;
    }

    getRotationalAcceleration(){
        return this.rotationalAcceleration;
    }
}

module.exports = Physics;