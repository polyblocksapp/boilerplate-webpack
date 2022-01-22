/******************************
  a boilerplate for three.js
*******************************/

const THREE = require("three");

let scene;
let box;
let camera;
let renderer;
let light;

const width  = document.body.clientWidth;
const height = document.body.clientHeight;

let red   = Math.floor(pb.random() * 255);
let green = Math.floor(pb.random() * 255);
let blue  = Math.floor(pb.random() * 255);

let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

scene = new THREE.Scene();

box = new THREE.Mesh(
    new THREE.BoxGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({color: color})
);
box.position.set(0, 0, 0);
scene.add(box);

light = new THREE.DirectionalLight( 0xffffff, 1);
light.position.set(0, 100, 30);
scene.add(light);

camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
camera.position.set(200, 100, 300);
camera.lookAt(box.position);

renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize(width, height);
renderer.setClearColor(0xf5f5f5);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

function render(){
    requestAnimationFrame(render);
    box.rotation.y += 0.005;
    renderer.render(scene, camera);
}
render();