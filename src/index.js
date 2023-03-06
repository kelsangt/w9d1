console.log("Webpack is working!")

import MovingObject from "./moving_object.js";

const mo = new MovingObject({
    pos: [100, 100],
    vel: [20, 20],
    radius: 100,
    color: "#808080"
  });

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function(){
    window.canvas = document.getElementById("game-canvas");
    window.ctx = canvas.getContext("2d");
    window.canvas.height = window.innerHeight;
    window.canvas.width = window.innerWidth;
});

window.mo = mo;