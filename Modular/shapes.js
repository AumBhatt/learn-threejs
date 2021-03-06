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
    move(x, y, z) {
        this.shape.position.set(x, y, z);
    }
};

export {
    BoxGeometry1 as BoxGeometry1
};