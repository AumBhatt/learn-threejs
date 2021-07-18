import { scene as scene, camera as camera, renderer as renderer } from "./setup.js";

let BoxGeometry1 = class {
    constructor({width, height, depth}, {x, y, z}, material) {
        this.shape = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
        this.move(x, y, z);
    }

    draw() {
        scene.add(this.shape);
    }
    get pos() {
        return this.shape.position;
    }
    get dims() {
        var dimParams = this.shape.geometry.parameters;
        return {
            width: dimParams.width,
            height: dimParams.height,
            depth: dimParams.depth
        };
    }
    move(x = this.pos.x, y = this.pos.y, z = this.pos.z) {
        this.shape.position.set(x, y, z);
    }
};


// Square `Ring` for arena bounds
const geometry = new THREE.RingGeometry( 295, 320, 4 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const arena = new THREE.Mesh( geometry, material );
arena.rotation.set(1.5708, 0, 0.785398);
scene.add( arena );

const floorBox = new BoxGeometry1(
    {width: 420, height: 0, depth: 420},
    {x: 0, y: -1, z: 0},
    new THREE.MeshBasicMaterial( { color: 0x353b48 } )
);

//floorBox.draw();
function drawNet() {
    const netMaterial = new THREE.LineDashedMaterial({
        color: 0xffffff,
        linewidth: 100,
        scale: 1,
        dashSize: 45,
        gapSize: 35
    });

    const points = [];
    points.push( new THREE.Vector3( 0, 0, 0 ) );
    points.push( new THREE.Vector3( 420, 0, 0 ) );

    const netGeometry = new THREE.BufferGeometry().setFromPoints( points );

    const netLine = new THREE.Line(netGeometry, netMaterial);
    netLine.position.x -= 210;
    netLine.computeLineDistances();
    scene.add( netLine );
};

drawNet();

export {
    BoxGeometry1 as BoxGeometry1
};