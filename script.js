var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight,  1, 100 );

// 1. FOV -> field of views = bidang pandang kamera
// 2. Aspec rasio menyesuaikan ke layar kita
// 3. Near Clip -> seberapa dekat jarak yang bisa di lihat kamera
// 4. Far Clip -> seberapa jauh yang dapat di lihat oleh kamera

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var shape = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshBasicMaterial({ color: 0xebcf34 });
let box = new THREE.Mesh(shape, material);

scene.add(box);

camera.position.z = 5;

let animate = function(){
    requestAnimationFrame( animate );

    box.rotation.z += 0.01;
    box.rotation.x += 0.01;
    // box.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
