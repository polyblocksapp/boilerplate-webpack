/******************************
  a boilerplate for p5.js
*******************************/

const p5 = require("p5");

function sketch(p) {

  let hue = Math.floor(pb.random() * 255);

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 255);
    p.frameRate(8);
  }

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY)
    
    for (let i = 0; i < 20; i++) {
      p.noStroke();
      let saturation = pb.random() * 50 + 120;
      p.fill(hue, saturation, 255, 35);
      
      let factor = pb.random() * 0.5 + 0.3;
      let radius = factor * p.width;
      p.circle(p.width * 0.5, p.height * 0.5, radius)
    }	
  }
}

new p5(sketch, document.body);
