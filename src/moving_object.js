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
}

// class MovingObject {
//     constructor({options}) {
//         // this.pos = options[pos];
//         // this.vel = options[vel];
//         // this.radius = options[radius];
//         // this.color = options[color];
//     }
// }

export default MovingObject;