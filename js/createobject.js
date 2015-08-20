var sunArray = [];
var sunParameters = [2,15,15];
var countedObjects;

var geometryPlanets = new THREE.SphereGeometry(50,50,10);
var materialPlanets = new THREE.MeshLambertMaterial({
	color: "#ffffff" // Hexa funkar
});

var geometryStars = new THREE.SphereGeometry(20,15,15);
var materialStars = new THREE.MeshLambertMaterial({
	color: "rgb(4, 178, 255)" // rbg funkar
});


var createObject = { // Liten "motor" som bygger objekt och stoppar dem i en array (sunArray)
	sphere: {
		param1: sunParameters[0], // Diametern
		param2: sunParameters[1],
		param3: sunParameters[2],
		positionX: 200, //Ändra till dynamiska variabler
		positionY: 200,
		positionZ: 200,
		name: "sphereSun", // Om klotet ska få ett unikt namn.
		color: "#00ff31", // Färg på klotet om det behövs.
		create: function(){
			var mesh = new THREE.Mesh(geometryStars, materialStars);
			mesh.position.set(this.positionX, this.positionY, this.positionZ);
			mesh.name = this.name;
			sunArray.push(mesh);
		}
	},
	square: {
		// Lägg till senare om det är nödvändigt
	}
};

function drawWorld(){ // Ritar världen utifrån vad som finns i sunArray kommer att ta in fler värden senare
	for (var i = 0; i < sunArray.length; i++){
		var newObject = sunArray[i]
		newObject.position.set(randomGenerator(),randomGenerator(),randomGenerator());
		scene.add(newObject);
	}

}
