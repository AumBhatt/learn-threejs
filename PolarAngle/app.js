/*
npm i three@0.121.1
    ^ Working Library Version
*/

//import { FirstPersonControls } from '../three_0.121.1/three/examples/jsm/controls/OrbitControls.js'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'

/*
    Make an HTML <canvas> to render our scene in it.

    To create a scene we need 3 objs:
        1. Scene
        2. Camera Type :
            ArrayCamera, Camera, CubeCamera, OrthographicCamera, *[PerspectiveCamera], StereoCamera
        3. Renderer :
            *[WebGLRenderer], WebGL1Renderer, CSS2DRenderer, CSS3DRenderer, SVGRenderer
 */

// Scene
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(100, 150, 100);
scene.add(camera);
// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg") });
renderer.setSize(window.innerWidth, window.innerHeight);

/*
    Class for Type 1 Box
    Obj.position.x/y/z -> set/get position of Obj
    Or use Obj.position.set(x, y, z);
*/

let BoxType1 = class {
    constructor(width, height, depth, material) {
        this.shape = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    }
    draw() {
        scene.add(this.shape);
    }
    get pos() {
        return this.shape.position;
    }
    move(x, y, z) {
        this.shape.position.set(x, y, z);
    }
};

// Instantiating obj of class BoxType1 and Drawing it.
let box1 = new BoxType1(10, 2, 10, new THREE.MeshBasicMaterial({ color: 0xffffff }));
box1.draw();

// Instantiating OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Reading the current polar angle of OrbitControl
console.log(controls.getPolarAngle())

/* 
    Using OrbitControl.min/maxPolarAngle to restrict Y-Axis movement:

 */ 
    controls.addEventListener('change', function () {
        controls.minPolarAngle = 0.7559694104239078; // 45 deg
        controls.maxPolarAngle = 1.5707963267948966; // 0 deg
    });


/*
    Animation Loop
    controls.update() : required if controls.enableDamping or controls.autoRotate are set to true
*/
animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}