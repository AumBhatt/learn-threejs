/*
npm i three@0.121.1
    ^ Working Library Version
*/

import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'
import { scene as scene, camera as camera, renderer as renderer } from "./setup.js";
import { BoxGeometry1 as BoxGeometry1 } from "./shapes.js";

let floorGroup = (x, y, z) => {
    let box1 = new BoxGeometry1(
        {width: 10, height: 2, depth: 10}, 
        {x: 5, y: 0, z: 5}, 
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    box1.draw();
    return new THREE.Group().add(box1.shape);
}

scene.add(floorGroup(5, 0, 5));

// Instantiating OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

/* controls.addEventListener('change', function () {
    controls.minPolarAngle = 0.7559694104239078; // 45 deg
    controls.maxPolarAngle = 1.5707963267948966; // 0 deg
}); */

animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}