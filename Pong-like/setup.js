/*
npm i three@0.121.1
    ^ Working Library Version
*/

//import { FirstPersonControls } from '../three_0.121.1/three/examples/jsm/controls/OrbitControls.js'

// Scene
const scene = new THREE.Scene();
const aspect = (window.innerWidth - (window.innerWidth * 0.2)) / (window.innerHeight - (window.innerHeight * 0.2));

// Camera
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
camera.position.set(0, 250, 400); // 100, 150, 100
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer( { canvas: document.getElementById("bg") } );
renderer.setSize(window.innerWidth, window.innerHeight);

// Axes Helper
const axesHelper = new THREE.AxesHelper(20);
scene.add( axesHelper );

// Grid Helper
const gridHelper = new THREE.GridHelper( 500, 50 );
//scene.add(gridHelper);

export {
    scene as scene, 
    camera as camera, 
    renderer as renderer
};