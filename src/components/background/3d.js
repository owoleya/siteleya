import * as THREE from 'three';
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 400;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x101010);
document.body.appendChild(renderer.domElement);

var spheres = [];

// Add cloud
for (let i = 0; i <= 2500; i++) {
  const geometry = new THREE.SphereGeometry(
    Math.random() * 0.4,
    Math.random() * 16,
    Math.random() * 16
  );
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
  });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.x += Math.round(Math.random() * 500) - 250;
  sphere.position.y += Math.round(Math.random() * 500) - 250;
  sphere.position.z += Math.round(Math.random() * 300);
  scene.add(sphere);
  spheres.push(sphere);
}

// Control
var mouseTolerance = 0.01;

document.onmousemove = function (e) {
  var centerX = window.innerWidth * 0.5;
  var centerY = window.innerHeight * 0.5;

  camera.position.x = (e.clientX - centerX) * mouseTolerance;
  camera.position.y = (e.clientY - centerY) * mouseTolerance;
};

function render() {
  requestAnimationFrame(render);

  spheres.forEach((sphere) => {
    sphere.position.x += (Math.random() - 0.5) * 0.02; 
    sphere.position.y += (Math.random() - 0.5) * 0.02; 
    sphere.position.z += (Math.random() - 0.5) * 0.02; 
  });

  renderer.render(scene, camera);
}

render();



export function mount( container ) {

	if( container ) {

		container.insertBefore( renderer.domElement, container.firstChild );
		render();
    

	} else {

		renderer.domElement.remove();

	}

}