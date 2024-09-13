import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer(); // Creating renderer
renderer.setSize(window.innerWidth, window.innerHeight); // His size
document.body.appendChild(renderer.domElement); // Adding the renderer to the document (better for seeing something...)

// Creating camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// Creating the scene
const scene = new THREE.Scene();

// Testing some line drawing
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

const material2 = new THREE.LineBasicMaterial({ color: 0xffffff });
const points2 = [];
points2.push(new THREE.Vector3(0, 0, 0));
points2.push(new THREE.Vector3(0, 10, 0));

const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
const line2 = new THREE.Line(geometry2, material2);

scene.add(line);
scene.add(line2);

renderer.render(scene, camera);

// // Animate function
// function animate() {
//     renderer.render(scene, camera);

// }
// // Telling to use the animate function
// renderer.setAnimationLoop(animate);