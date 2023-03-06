console.log("Webpack is working!")

import MovingObject from "./moving_object.js";

const mo = new MovingObject({
    pos: [100, 100],
    vel: [10, 10],
    radius: 100,
    color: "#00FF00"
  });

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function(){
    window.canvas = document.getElementById("game-canvas");
    window.ctx = canvas.getContext("2d");
});

window.mo = mo;