
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

var materialPlanets = {};

for (var i = 0; i < 30; i++){
	materialPlanets["material" + i] = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(planetImages[i])});
}

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
//		material: materialPlanets[0],
		material: materialPlanets.material0,
		name: randomGenerator(), // Om klotet ska få ett unikt namn.
		create: function(id){ // index från loopen som kallar på denna funktion
			var randomValue = randomImageGenerator();
			this.material = materialPlanets["material" + randomValue];
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
	return Math.floor((Math.random() * 29));
};


// THE SUN
var sunGeometry = new THREE.SphereGeometry(1000,50,50);
var sunMaterial = new THREE.MeshLambertMaterial( {
	map: THREE.ImageUtils.loadTexture("images/sun.jpg"),
	side: THREE.BackSide,
	depthWrite: false,
	emissive: "rgba(254,245,109,.6"

} );
var sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
sunMesh.position.set(0,0,0);



scene.add( sunMesh );

// THE SUN GLOW
var sunGeometry2 = new THREE.SphereGeometry(1090,20,20);
var sunMaterial2 = new THREE.MeshLambertMaterial( {
	transparent: true,
	opacity: 0.3,
	emissive: "#ff6c00",
	depthWrite: false
//	emissive: "white"

} );
var sunMesh2 = new THREE.Mesh(sunGeometry2, sunMaterial2);
sunMesh2.position.set(0,0,0);



scene.add( sunMesh2 );

// THE SUN GLOW
var sunGeometry3 = new THREE.SphereGeometry(1090,20,20);
var sunMaterial3 = new THREE.MeshLambertMaterial( {
	transparent: true,
	opacity: 0.3,
	emissive: "#ff6c00",
	depthWrite: false
//	emissive: "white"

} );
var sunMesh3 = new THREE.Mesh(sunGeometry3, sunMaterial3);
sunMesh2.position.set(0,0,0);



scene.add( sunMesh3 );
