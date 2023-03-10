class Vector2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(vector){
        this.x += vector.x;
        this.y += vector.y;
    }

    sub(vector){
        this.x -= vector.x;
        this.y -= vector.y;
    }

    mult(scalar){
        this.x *= scalar;
        this.y *= scalar;
    }

    div(scalar){
        this.x /= scalar;
        this.y /= scalar;
    }

    set(x, y){
        this.x = x;
        this.y = y;
    }
}

module.exports = Vector2D;