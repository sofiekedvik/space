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

var particleCount = 500;


for (var i = 0; i < particleCount; i++){
	posX = randomGenerator() * 2;
	posY = randomGenerator() * 2;
	posZ = randomGenerator() * 2;
	cloneParticle = particleMesh.clone();
	cloneParticle.position.set(posX, posY, posZ);
	cloneParticle.rotation.set(posX, posY, posZ);


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
	renderer.setClearColor( 0x000000, 0.5 );

	document.body.appendChild(renderer.domElement);

};



var arrayX = [];
var arrayY = [];
var arrayZ = [];
var rotate = {
	x: 0.01,
	y: 0.01
};



function animate(){ //Animerar scenen "detta är en loop"
	var timer = new Date().getTime() * 0.0001;

	controls.update();
	THREE.AnimationHandler.update( clock.getDelta() );
	renderer.render(scene, camera);
	requestAnimationFrame(function(){
		if (sunArray.length > 6) {
			while (waitTimer <= 3){
				waitTimer += 0.01;
			};

			sunArray[0].position.x = Math.cos(timer  / 2) * 1600 * 2;
			sunArray[0].position.y = Math.sin(timer / 2) * 1600 * 2;
			sunArray[0].position.z = 1600;


			sunArray[1].position.x = Math.cos(timer / 8) * 2000 * 2;
			sunArray[1].position.y = Math.sin(timer / 8) * 2000 * 2;
			sunArray[1].position.z = 3000;

			sunArray[2].position.x = Math.cos(timer / 4) * 3000 * 2;
			sunArray[2].position.y = Math.sin(timer / 4) * 3000 * 2;
			sunArray[2].position.z = 4000;

			sunArray[3].position.x = Math.cos(timer / 3) * 4000 * 2;
			sunArray[3].position.y = Math.sin(timer / 3) * 4000 * 2;
			sunArray[3].position.z = 5000;

			sunArray[4].position.x = Math.cos(timer / 6) * 5000 * 2;
			sunArray[4].position.y = Math.sin(timer / 6) * 5000 * 2;
			sunArray[4].position.z = 6000;

			sunArray[5].position.x = Math.cos(timer / 2) * 6000 * 2;
			sunArray[5].position.y = Math.sin(timer / 2) * 6000 * 2;
			sunArray[5].position.z = 7000;

			sunArray[6].position.x = Math.cos(timer / 10) * 7000 * 2;
			sunArray[6].position.y = Math.sin(timer / 10) * 7000 * 2;
			sunArray[6].position.z = 8000;

			sunArray[7].position.x = Math.cos(timer) * 8000 * 2;
			sunArray[7].position.y = Math.sin(timer) * 8000 * 2;
			sunArray[7].position.z = 9000;

			for (var i = 0; i < 8; i++){
				sunArray[i].rotation.x += rotate.x;
				sunArray[i].rotation.y += rotate.y;
			};

			if (waitTimer >= 3){
				sunMesh.rotation.x += 0.001;
				sunMesh2.rotation.y += 0.001;
				sunMesh3.rotation.x += 0.001;
			};
		}
		animate();
	});

}
var waitTimer = 0;

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
	container.classList.add("show");
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

informationBox.addEventListener("click", function(){
	this.classList.remove("show");
});

function drawWorld(){ // Ritar världen utifrån vad som finns i sunArray kommer att ta in fler värden senare
	var scale;
	for (var i = 0; i < sunArray.length; i++){
		scale = randomPlanetGenerator();
		sunArray[i].scale.set(scale,scale,scale);
		scene.add(sunArray[i]);
	}
}


function randomGenerator(){
	return Math.floor((Math.random() * 10000) - 5000);
};


document.addEventListener("click", function(e){
	var stringCount = 0;

	if (e.srcElement.id == "planets"){
		for (var i = 0; i < 8; i++){
			createObject.sphere2.create(randomGenerator() * randomGenerator ()); // Sätter unika id för de nya objekten
		}
		createObject.sphere.create();
		e.srcElement.classList.add("hide");
		drawWorld();
	}
	render();
});

var xhr = new XMLHttpRequest();
var information = [];
xhr.onreadystatechange = function() {

	if(xhr.readyState === 4){
		var fact = JSON.parse(xhr.responseText);

		for(var facts in fact){
			information.push(fact[facts]);
		}
		return information;
	}

}

xhr.open("GET", "data/facts.json");
xhr.send();



