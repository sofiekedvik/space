var buttonBox = document.getElementById("box");
var camera;
var controls;
var scene;
var renderer;

init(); //Måste ligga i toppen
animate(); //Måste ligga i toppen

function init(){
	//Kamera
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
	camera.position.z = 400;
	//Kontrollerna som flyttar kameran
	controls = new THREE.TrackballControls(camera);
	controls.addEventListener("change", render);
	controls.rotateSpeed = 10; //Snabbheten på kameran
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
};

function animate(){
	requestAnimationFrame(animate);
	controls.update();
}

function render(){
	renderer.render( scene, camera );
};

function randomGenerator(){
	var number = Math.floor((Math.random() * 40000) - 20000);
	return number;
};

var light = new THREE.DirectionalLight("white", 1); // Denna ska nog inte vara kvar.
light.position.set(0,-450,400).normalize();
scene.add(light);

$("#sun").on("click", function(){ //testat lite jQuery
	for (var i = 0; i < 1000; i++){
		createObject.sphere.create();
		var mesh = sunArray[i];
	mesh.position.set(sunArray[i].position.x,sunArray[i].position.y,sunArray[i].position.z);
	}
	countedObjects = sunArray.length;
	document.getElementById("countedObjects").innerHTML = countedObjects;
});

document.addEventListener("click", function(e){
	var stringCount = 0;
	if (e.srcElement.id == "planets"){
		drawWorld();
	}
	if (e.srcElement.id == "light"){
		light.position.set(randomGenerator(),randomGenerator(),randomGenerator()).normalize();
		scene.add(light);
	}
	render();
});

