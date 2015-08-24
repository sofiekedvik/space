var buttonBox = document.getElementById("box");
var informationBox = document.getElementById("information");
var camera;
var controls;
var scene;
var renderer;

init(); //Måste ligga i toppen
animate(); //Måste ligga i toppen
createSky();


function init(){
	//Kamera
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000000);
	camera.position.set(0,150,400);
	//Kontrollerna som flyttar kameran
	controls = new THREE.TrackballControls(camera);
	controls.addEventListener("change", render); //För varje förändring som sker så renderas scenen
	// controls.rotateSpeed = 10; //Snabbheten på kameran
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
							if (scene.children[k].uuid == "star"){
							informationBox.innerHTML = "You hit a star with random information! Yaaaaaayyyy!";}
							if (scene.children[k].uuid == "planet"){
							informationBox.innerHTML = "You hit a planet, it´s not earth, keep on searching starChild";
							}

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
	var number = Math.floor((Math.random() * 5000) - 2500);
	return number;
};


$("#sun").on("click", function(){ //testat lite jQuery
	for (var i = 0; i < 1000; i++){
		createObject.sphere.create(randomGenerator() * randomGenerator ()); // Sätter unika id för de nya objekten
	}
	countedObjects = sunArray.length;


	document.getElementById("countedObjects").innerHTML = countedObjects;
	drawWorld();
});

document.addEventListener("click", function(e){
	var stringCount = 0;
	if (e.srcElement.id == "planets"){
		drawWorld();
	}
	if (e.srcElement.id == "light"){
		for (var i = 0; i < 10; i++){

			createObject.sphere2.create(randomGenerator() * randomGenerator ()); // Sätter unika id för de nya objekten
		}
		drawWorld();
	}
	render();
});

