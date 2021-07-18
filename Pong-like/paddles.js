import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'
import { scene as scene, camera as camera, renderer as renderer } from "./setup.js";
import { BoxGeometry1 as BoxGeometry1 } from "./shapes.js";

// max-z: abs(185), max-x: abs(175)

const player1 = new BoxGeometry1({width: 50, height: 5, depth: 10}, {x: 0, y: 5, z: 185}, new THREE.MeshBasicMaterial( { color: 0xff0000 } ));
player1.draw();

const player2 = new BoxGeometry1({width: 50, height: 5, depth: 10}, {x: 0, y: 5, z: -185}, new THREE.MeshBasicMaterial( { color: 0x0000ff } ));
player2.draw();

document.addEventListener('keypress', (event) => {
    switch(event.key) {
        case 'a':
        case 'A':
            movePlayer(player1, "left");
            break;
        case 'd':
        case 'D':
            movePlayer(player1, "right");
            break;
    }
});

function movePlayer(player, direction) {
    var speed = 5;
    var limit = 175;
    switch(direction) {
        case "left":
            if(player.pos.x >= -limit)
                player.pos.x -= speed;
            else
                player.pos.x += speed;
            break;
        case "right":
            if(player.pos.x <= limit)
                player.pos.x += speed;
            else
                player.pos.x -= speed;
            break;
    }

    console.clear();
    console.log(player.pos.x)
}