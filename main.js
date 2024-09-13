/**
 * Firt things first, I was really tired when I made the first lines of code so... Yeah! Definitely some brain rot xD
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Main function of this program
 */
function main() {
    const canvas = document.querySelector("#c"); // Obtaining the canvas from the document
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas }); // Creating the renderer with WebGL

    // Settings camera
    const fov = 75; // FOV of the camera
    const aspect = window.innerWidth / window.innerHeight; // Aspect ratio calculated with window properties
    const near = 0.1; // See from very close...
    const far = 5; // ... To further away (adjust it if you need it)
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 2); // Position of the camera (center and 2 units back there)

    // Creating a scene
    const scene = new THREE.Scene();

    // Creating a box to mess with
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    // (Do I really need to explain the 3 lines above?...)
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth); // The box geometry (pretty obvious)
    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // Ooooh a fancy greenish blue!

    const cube = new THREE.Mesh(geometry, material); // Putting it all together to create a cube
    scene.add(cube); // Don't forget to add it to your scene

    /**
    * Main render function (for requestAnimationFrame)
    * @param {number} time Elapsed time
    */
    function render(time) {
        time *= 0.001; // Convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera); // Tell the program to render things again (otherwise, it will be a static scene you are looking at)
        requestAnimationFrame(render); // Call the function again
    }

    requestAnimationFrame(render); // First call of the render(time) function
}

main(); // Call the main function (important because it doesn't call itself lol)