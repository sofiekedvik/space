var buttonBox = document.getElementById("box");
var camera;
var controls;
var scene;
var renderer;

init(); //Måste ligga i toppen
animate(); //Måste ligga i toppen

function init(){
	//Kamera
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 400000);
	camera.position.z = -2000;
	//Kontrollerna som flyttar kameran
	controls = new THREE.TrackballControls(camera);
	controls.addEventListener("change", render); //För varje förändring som sker så renderas scenen
	controls.rotateSpeed = 10; //Snabbheten på kameran
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

};

function animate(){ //Animerar scenen "detta är en loop"
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

function render(){
	raycaster.setFromCamera( mouse, camera);// update the picking ray with the camera and mouse position
	var intersects = raycaster.intersectObjects(scene.children);// calculate objects intersecting the picking ray
	for ( var i = 0; i < intersects.length; i++ ){ // Kollar om strålen träffar något
		for (var j = 0; j < sunArray.length; j++){ // Kollar i sunArrayn om strålen matchar
			if (intersects[i].object.name == sunArray[j].name)
				for (var k = 0; k < scene.children.length; k++){ // Tar bort objektet ur scenen
					if (sunArray[j].name == scene.children[k].name){
						console.log(scene.children[k]);
						if (scene.children[k].type != "DirectionalLight"){
							scene.remove(scene.children[k]);
							console.log(sunArray[j].name);
							sunArray.splice(j, 1);
						}
					}
				}
		}
	};
	renderer.render(scene, camera);
	//	console.log(scene.children);
};

function drawWorld(){ // Ritar världen utifrån vad som finns i sunArray kommer att ta in fler värden senare
	for (var i = 0; i < sunArray.length; i++){
		sunArray[i].position.set(randomGenerator(),randomGenerator(),randomGenerator());
		scene.add(sunArray[i]);
	}
}


function randomGenerator(){
	var number = Math.floor((Math.random() * 40000) - 20000);
	return number;
};

function randomString(length) {
	return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

var light = new THREE.DirectionalLight("white", 1); // Denna ska nog inte vara kvar.
light.position.set(0,-450,400).normalize();
scene.add(light);

$("#sun").on("click", function(){ //testat lite jQuery
	for (var i = 0; i < 1000; i++){

		createObject.sphere.create(randomGenerator() * randomGenerator ()); // Sätter unika id för de nya objekten
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

