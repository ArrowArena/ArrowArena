import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.body.appendChild(
renderer.domElement
);

const light = new THREE.DirectionalLight(
0xffffff,
2
);

light.position.set(10,20,10);

scene.add(light);

const ambient = new THREE.AmbientLight(
0xffffff,
0.5
);

scene.add(ambient);

const ground = new THREE.Mesh(
new THREE.BoxGeometry(50,1,50),
new THREE.MeshStandardMaterial({
color:0x55aa55
})
);

ground.position.y=-0.5;

scene.add(ground);

const cube = new THREE.Mesh(
new THREE.BoxGeometry(2,2,2),
new THREE.MeshStandardMaterial({
color:0x777777
})
);

cube.position.set(
0,
1,
-8
);

scene.add(cube);

camera.position.set(
0,
3,
10
);

function animate(){

requestAnimationFrame(
animate
);

renderer.render(
scene,
camera
);

}

animate();

window.addEventListener(
'resize',
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

}
);
