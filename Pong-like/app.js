/*
npm i three@0.121.1
    ^ Working Library Version
*/

import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'
import { scene as scene, camera as camera, renderer as renderer } from "./setup.js";
import { BoxGeometry1 as BoxGeometry1 } from "./shapes.js";

const b1 = new BoxGeometry1({width: 50, height: 5, depth: 10}, {x: 5, y: 5, z: 5}, new THREE.MeshBasicMaterial( { color: 0xffffff } ));
b1.draw();

document.addEventListener("keypress", function(ev) {
    setTimeout(() => {
        switch(ev.key) {
            case 'w': b1.pos.z-=3; break;
            case 's': b1.pos.z+=3; break;
            case 'a': b1.pos.x-=3; break;
            case 'd': b1.pos.x+=3; break;
        }
    }, 170);
});

// Instantiating OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function () {
/*     controls.minPolarAngle = 0 // 0.7559694104239078 = 45 deg
    controls.maxPolarAngle = 3.141592653589793 // 1.5707963267948966 = 0 deg */
});

// Lock/Unlock controls
controls.enabled = false; // locked state
animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}