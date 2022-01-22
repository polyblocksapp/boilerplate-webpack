
/******************************
  a boilerplate for SVG.js
*******************************/

const SVG = require("@svgdotjs/svg.js");

let centerX = document.body.clientWidth * 0.5;
let centerY = document.body.clientHeight * 0.5;

let draw = SVG().addTo('body').size('100%', '100%');

let baseWidth = document.body.clientWidth * 0.3;
let number = 6 + Math.floor(pb.random() * 5);

let polygonStr = [];
for (let i = 0; i < number; i++) {

  let angle = i / number * Math.PI * 2.0;
  let radius = baseWidth + pb.random() * baseWidth * 0.3; 
  let x = centerX + Math.cos(angle) * radius;
  let y = centerY + Math.sin(angle) * radius;
  polygonStr.push([x + ',' + y])
}

var polygon = draw.polygon(polygonStr.join(' '))
polygon.fill('#f06');