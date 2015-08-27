
var planetImages = [
	"images/planet1.jpg",
	"images/planet2.jpg",
	"images/planet3.jpg",
	"images/planet4.jpg",
	"images/planet5.jpg",
	"images/planet6.jpg",
	"images/planet7.jpg",
	"images/planet8.jpg",
	"images/planet9.jpg",
	"images/planet10.jpg",
	"images/planet11.jpg",
	"images/planet12.jpg",
	"images/planet13.jpg",
	"images/planet14.jpg",
	"images/planet15.jpg",
	"images/planet16.jpg",
	"images/planet17.jpg",
	"images/planet18.jpg",
	"images/planet19.jpg",
	"images/planet20.jpg",
	"images/planet21.jpg",
	"images/planet22.jpg",
	"images/planet23.jpg",
	"images/planet24.jpg",
	"images/planet25.jpg",
	"images/planet26.jpg",
	"images/planet27.jpg",
	"images/planet28.jpg",
	"images/planet29.jpg",
	"images/planet30.jpg",
];
var starImages = [
	"images/star.jpg"
];

var materialPlanets = [
	material1 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[0])}),
	material2 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[1])}),
	material3 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[2])}),
	material4 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[3])}),
	material5 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[4])}),
	material6 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[5])}),
	material7 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[6])}),
	material8 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[7])}),
	material9 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[8])}),
	material10 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[9])}),
	material11 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[10])}),
	material12 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[11])}),
	material13 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[12])}),
	material14 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[13])}),
	material15 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[14])}),
	material16 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[15])}),
	material17 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[16])}),
	material18 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[17])}),
	material19 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[18])}),
	material20 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[19])}),
	material21 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[20])}),
	material22 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[21])}),
	material23 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[22])}),
	material24 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[23])}),
	material25 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[24])}),
	material26 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[25])}),
	material27 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[26])}),
	material28 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[27])}),
	material29 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[28])}),
	material30 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[29])}),
];

var materialStars = [
	materialStar1 = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(starImages[0])})
];

var countedObjects;
var createObject = { // Liten "motor" som bygger objekt och stoppar dem i en array (sunArray)
	sphere: {
		name: randomGenerator(), // Om klotet ska få ett unikt namn.
		geometry: new THREE.SphereGeometry(5,50,50),
		material: materialStars[0],
		create: function(id){ // index från loopen som kallar på denna funktion
			var mesh = new THREE.Mesh(this.geometry, this.material);
			mesh.uuid = "star";
			mesh.name = this.name * randomGenerator() + id; //sätter unikt id på alla klot
			mesh.material.needsUpdate = true;
			renderer.render(scene, camera);
			sunArray.push(mesh);
		}
	},

	sphere2: {
		geometry: new THREE.SphereGeometry(200,50,50),
		material: materialPlanets[0],
		name: randomGenerator(), // Om klotet ska få ett unikt namn.
		create: function(id){ // index från loopen som kallar på denna funktion
			var randomValue = randomImageGenerator();
			this.material = materialPlanets[randomValue];
			var mesh = new THREE.Mesh(this.geometry, this.material);
			mesh.uuid = "planet";
			mesh.name = this.name * randomGenerator() + id; //sätter unikt id på alla klot
			mesh.material.needsUpdate = true;
			renderer.render(scene, camera);
			sunArray.push(mesh);

		}
	},
};
function randomImageGenerator(){
	var number = Math.floor((Math.random() * 29));
	return number;
};


// THE SUN
var sunGeometry = new THREE.SphereGeometry(1000,50,50);
var sunMaterial = new THREE.MeshLambertMaterial( {
	map: THREE.ImageUtils.loadTexture("images/sun.jpg"),
	side: THREE.BackSide,
	depthWrite: false
//	emissive: "white"

} );
var sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
sunMesh.position.set(0,0,0);



scene.add( sunMesh );
