var buttonBox = document.getElementById("box");
var camera;
var controls;
var scene;
var renderer;
var geometryStars = new THREE.SphereGeometry(400,15,15);
var materialStars = new THREE.MeshLambertMaterial({
	color: "rgb(255, 0, 0)"
});

var geometryPlanets = new THREE.SphereGeometry(50,50,10);
var materialPlanets = new THREE.MeshLambertMaterial({
	color: "#ffffff"
});

init();
animate();

function init(){
	//camera
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
	camera.position.z = 40000;
	//controls
	controls = new THREE.TrackballControls(camera);
	controls.addEventListener("change", render);
	controls.rotateSpeed = 25;
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
	renderer.render(scene, camera);
};


function randomGenerator(){
	var number = Math.floor((Math.random() * 400000) - 200000);
	return number;
};



var light = new THREE.DirectionalLight("white", 1);
light.position.set(0,-450,400).normalize();
scene.add(light);
var sunInterval;
$("#sun").on("click", function(){
	var stringCount = 0;
	for (var i = 0; i < 50; i++){
		var mesh = new THREE.Mesh(geometryStars, materialStars);
		mesh.position.set(randomGenerator(),randomGenerator(),randomGenerator());
		scene.add(mesh);
	}
	$("#information").empty();
	clearInterval(sunInterval);
	sunInterval = setInterval(function(){
		var str = "";
		if (sunText[stringCount] == "¤") str = "<br>";
		else str = sunText[stringCount];
		if (stringCount == sunText.length) clearInterval(sunInterval);
		$("#information").append(str);
		stringCount += 1;
	}, (1000 / 30));
});



document.addEventListener("click", function(e){
	var stringCount = 0;
	if (e.srcElement.id == "planets"){
		for (var i = 0; i < 1000; i++){
			var mesh = new THREE.Mesh(geometryPlanets, materialPlanets);
			mesh.position.set(randomGenerator(),randomGenerator(),randomGenerator());
			scene.add(mesh);
		}
	}

	if (e.srcElement.id == "light"){
		light.position.set(randomGenerator(),randomGenerator(),randomGenerator()).normalize();
		scene.add(light);
		setInterval(function(){
			$("#information").append(lightText[stringCount]);
			stringCount += 1;
		},1000 / 60);
		clearInterval(setInterval);
	}
	render();
});




var sunText = "> This method in THREEJS creates a sphere ¤> with the parameters  radius, ¤ > width segments, and  height segments ¤ > new THREE.SphereGeometry(0,0,0); ¤ > A random generator generates the position ¤ > of all the suns in the galaxy.";

var lightText = "lorem	ipsum";


