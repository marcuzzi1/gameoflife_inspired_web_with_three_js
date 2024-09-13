import * as THREE from 'three';

const scene = new THREE.Scene(); // Creating scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Creating camera

const renderer = new THREE.WebGLRenderer(); // Creating renderer
renderer.setSize(window.innerWidth, window.innerHeight); // His size
document.body.appendChild(renderer.domElement); // Adding the renderer to the document (better for seeing something...)

// Messing by creating a basic cube
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 3, 5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Setting camera position
camera.position.z = 2;

// Animate function
function animate() {
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
// Telling to use the animate function
renderer.setAnimationLoop(animate);