var buttonBox = document.getElementById("box");
var informationBox = document.getElementById("container-facts");
var camera;
var controls;
var scene;
var clock;
var renderer;
var sunArray = [];
init();

var particleMaterial = new THREE.MeshLambertMaterial({
	emissive: "#ffffff",
	doubleSided: true,
	transparent: true,
	map: THREE.ImageUtils.loadTexture("images/spriteparticle.png")

});

var posX,
	posY,
	posZ,
	cloneParticle;

var particleGeometry = new THREE.CircleGeometry(50,20);
var particleMesh = new THREE.Mesh(particleGeometry, particleMaterial);

var particleCount = 300;

for (var i = 0; i < particleCount; i++){
	posX = randomGenerator() * 2;
	posY = randomGenerator() * 2;
	posZ = randomGenerator() * 2;
	cloneParticle = particleMesh.clone();
	cloneParticle.position.set(posX, posY, posZ);
	cloneParticle.rotation.set(posX, posY, posZ);
	cloneParticle.position.normalize();
	cloneParticle.position.multiplyScalar( 30000 );
	scene.add(cloneParticle);
};


//Måste ligga i toppen
animate(); //Måste ligga i toppen
createSky();

function init(){
	//Kamera
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000000);
	camera.position.set(0,150,15500);
	//Kontrollerna som flyttar kameran
	clock = new THREE.Clock;
	controls = new THREE.TrackballControls(camera);
	controls.addEventListener("change", render); //För varje förändring som sker så renderas scenen
	// controls.rotateSpeed = 10; //Snabbheten på kameran
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

};



var arrayX = [];
var arrayY = [];
var arrayZ = [];


function animate(){ //Animerar scenen "detta är en loop"
	var timer = new Date().getTime() * 0.0001;

	controls.update();
	THREE.AnimationHandler.update( clock.getDelta() );
	renderer.render(scene, camera);
	requestAnimationFrame(function(){
		if (sunArray.length > 3) {
			sunArray[0].position.x = Math.cos( timer / 2) * arrayX[0] * 3;
			sunArray[0].position.y = Math.cos( timer / 2) * arrayY[0] * 3;
			sunArray[0].position.z = Math.sin( timer / 2) * arrayZ[0] * 3;
			sunArray[0].rotation.y += 0.01;

			sunArray[1].position.x = Math.cos( timer / 4) * arrayX[1] * 3;
			sunArray[1].position.y = Math.cos( timer / 4) * arrayY[1] * 3;
			sunArray[1].position.z = Math.sin( timer / 4) * arrayZ[1] * 3;
			sunArray[1].rotation.y += 0.01;

			sunArray[2].position.x = Math.cos( timer / 2) * arrayX[2] * 2;
			sunArray[2].position.y = Math.cos( timer / 2) * arrayY[2] * 2;
			sunArray[2].position.z = Math.sin( timer / 2) * arrayZ[2] * 2;
			sunArray[2].rotation.y += 0.01;

			sunArray[3].position.x = Math.cos( timer / 2) * arrayX[3] * 2;
			sunArray[3].position.y = Math.cos( timer / 2) * arrayY[3] * 2;
			sunArray[3].position.z = Math.sin( timer / 2) * arrayZ[3] * 2;
			sunArray[3].rotation.y += 0.01;

			sunArray[4].position.x = Math.cos( timer / 3) * arrayX[4] * 4;
			sunArray[4].position.y = Math.cos( timer / 3) * arrayY[4] * 4;
			sunArray[4].position.z = Math.sin( timer / 3) * arrayZ[4] * 4;
			sunArray[4].rotation.y += 0.01;

			sunArray[5].position.x = Math.cos( timer / 2) * arrayX[5] * 4;
			sunArray[5].position.y = Math.cos( timer / 2) * arrayY[5] * 4;
			sunArray[5].position.z = Math.sin( timer / 2) * arrayZ[5] * 4;
			sunArray[5].rotation.y += 0.01;

			sunArray[6].position.x = Math.cos( timer / 2) * arrayX[6] * 2;
			sunArray[6].position.y = Math.cos( timer / 2) * arrayY[6] * 2;
			sunArray[6].position.z = Math.sin( timer / 2) * arrayZ[6] * 2;
			sunArray[6].rotation.y += 0.01;

			sunArray[7].position.x = Math.cos( timer / 4) * arrayX[7] * 5;
			sunArray[7].position.y = Math.cos( timer / 4) * arrayY[7] * 5;
			sunArray[7].position.z = Math.sin( timer / 4) * arrayZ[7] * 5;
			sunArray[7].rotation.y += 0.01;

			sunArray[8].position.x = Math.cos( timer / 3) * arrayX[8] * 2;
			sunArray[8].position.y = Math.cos( timer / 3) * arrayY[8] * 2;
			sunArray[8].position.z = Math.sin( timer / 3) * arrayZ[8] * 2;
			sunArray[8].rotation.y += 0.01;

			sunArray[9].position.x = Math.cos( timer / 5) * arrayX[9] * 4;
			sunArray[9].position.y = Math.cos( timer / 5) * arrayY[9] * 4;
			sunArray[9].position.z = Math.sin( timer / 5) * arrayZ[9] * 4;
			sunArray[9].rotation.y += 0.01;
			//
		}
		sunMesh.rotation.x += 0.001;
		sunMesh2.rotation.y += 0.001;
		sunMesh3.rotation.x += 0.001;
		animate();
	});

}


function detectLeftButton(){
	evt = window.event;
	var button = 0;
	if (evt) button = evt.which || evt.button;
	return (button == 1 ? true : false);
}

function render(){
	raycaster.setFromCamera( mouse, camera);// update the picking ray with the camera and mouse position
	var intersects = raycaster.intersectObjects(scene.children);// calculate objects intersecting the picking ray
	for ( var i = 0; i < intersects.length; i++ ){ // Kollar om strålen träffar något
		for (var j = 0; j < sunArray.length; j++){ // Kollar i sunArrayn om strålen matchar
			if (intersects[i].object.name == sunArray[j].name)
				for (var k = 0; k < scene.children.length; k++){ // Tar bort objektet ur scenen
					if (sunArray[j].name == scene.children[k].name){
						if (scene.children[k].uuid == "planet" && detectLeftButton() == true){
							factLoader();
						}

					}
				}
		}
	};
	renderer.render(scene, camera);
	//	console.log(scene.children);
};



function factLoader(){
	var container = document.getElementById("container-facts");
	container.removeAttribute("hidden");
	NodeList.prototype.remove = HTMLCollection.prototype.remove = function(){
		for(var l = this.length - 1; l >= 0; l--){
			if(this[l] && this[l].parentElement){
				this[l].parentElement.removeChild(this[l]);
			}
		}
	}
	var deleted = document.getElementsByClassName('newContent').remove();
	var content = document.createElement("div");
	container.appendChild(content);
	content.className = "newContent";
	content.innerHTML += "<h3>" + information[0].title + "</h3>";
	content.innerHTML += "<p>" + information[0].content + "</p>";
	content.innerHTML += "<p>" + information[0].copyright + "</p>";
	information.push(information.shift());

}

function drawWorld(){ // Ritar världen utifrån vad som finns i sunArray kommer att ta in fler värden senare
	for (var i = 0; i < sunArray.length; i++){
		sunArray[i].position.set(randomGenerator() ,randomGenerator(),randomGenerator());
		var x = sunArray[i].position.x;
		var y = sunArray[i].position.y;
		var z = sunArray[i].position.z;
		arrayX.push(x);
		arrayY.push(y);
		arrayZ.push(z);
		scene.add(sunArray[i]);
	}
}


function randomGenerator(){
	return Math.floor((Math.random() * 10000) - 5000);
};


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



