import { ContextExclusionPlugin } from "webpack";

class MovingObject {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.radius = obj.radius;
        this.color = obj.color;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();

        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2*Math.PI,
            false
        );

        ctx.fill();
    }

    move() {
        let newX = this.pos[0] + this.vel[0];
        let newY = this.pos[1] + this.vel[1];
        this.pos = [newX, newY];
        // ctx.clearRect(0,0, window.canvas.width, window.canvas.height);
        // this.draw(ctx);
    }
}



export default MovingObject;