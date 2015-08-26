var buttonBox = document.getElementById("box");
var informationBox = document.getElementById("container-facts");
var camera;
var controls;
var scene;
var renderer;
init();

var particleMaterial = new THREE.MeshLambertMaterial({
	emissive: "#12d1ea",
	doubleSided: true,
	transparent: true,
	emissive: "#4d61d1",
	map: THREE.ImageUtils.loadTexture("images/spriteparticle.png")

});

var posX,
	posY,
	posZ,
	cloneParticle;

var particleGeometry = new THREE.CircleGeometry(50,20);
var particleMesh = new THREE.Mesh(particleGeometry, particleMaterial);
<<<<<<< HEAD
var particleCount = 1000;
=======
var particleCount = 100;
>>>>>>> origin/master
for (var i = 0; i < particleCount; i++){
	posX = randomGenerator();
	posY = randomGenerator();
	posZ = randomGenerator();
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
	camera.position.set(0,150,3500);
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

	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

function render(){
	raycaster.setFromCamera( mouse, camera);// update the picking ray with the camera and mouse position
	var intersects = raycaster.intersectObjects(scene.children);// calculate objects intersecting the picking ray
	for ( var i = 0; i < intersects.length; i++ ){ // Kollar om strålen träffar något
		for (var j = 0; j < sunArray.length; j++){ // Kollar i sunArrayn om strålen matchar
			if (intersects[i].object.name == sunArray[j].name)
				for (var k = 0; k < scene.children.length; k++){ // Tar bort objektet ur scenen
					if (sunArray[j].name == scene.children[k].name){
						if (scene.children[k].type != "DirectionalLight"){
							if (scene.children[k].uuid == "star"){
							// här ska du lägga vad som händer om man trycker på en planet variabeln informationBox
								factLoader();

							}
							if (scene.children[k].uuid == "sun"){
							}
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
		sunArray[i].position.set(randomGenerator(),randomGenerator(),randomGenerator());

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

