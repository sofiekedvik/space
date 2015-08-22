var sunArray = [];
var sunParameters = [2,15,15];
var countedObjects;
var createObject = { // Liten "motor" som bygger objekt och stoppar dem i en array (sunArray)
	sphere: {
		geometryStars: new THREE.SphereGeometry(50,15,15),
		materialStars: new THREE.MeshLambertMaterial({
			color: "rgb(255, 255, 255)" // rbg funkar
		}),
		param1: sunParameters[0], // Diametern
		param2: sunParameters[1],
		param3: sunParameters[2],
		positionX: 200, //Ändra till dynamiska variabler
		positionY: 200,
		positionZ: 200,
		name: randomGenerator(), // Om klotet ska få ett unikt namn.
		color: "#00ff31", // Färg på klotet om det behövs.
		create: function(id){ // index från loopen som kallar på denna funktion
			var mesh = new THREE.Mesh(this.geometryStars, this.materialStars);
			mesh.position.set(this.positionX, this.positionY, this.positionZ);
			mesh.material.color.set = this.color;
			mesh.name = this.name * randomGenerator() + id; //sätter unikt id på alla klot
			sunArray.push(mesh);
		}
	},
	square2: {
		geometryStars: new THREE.SphereGeometry(800,15,15),
		materialStars: new THREE.MeshLambertMaterial({
			color: "rgb(255, 235, 0)" // rbg funkar
		}),
		param1: sunParameters[0], // Diametern
		param2: sunParameters[1],
		param3: sunParameters[2],
		positionX: 200, //Ändra till dynamiska variabler
		positionY: 200,
		positionZ: 200,
		name: randomGenerator(), // Om klotet ska få ett unikt namn.
		color: "#00ff31", // Färg på klotet om det behövs.
		create: function(id){ // index från loopen som kallar på denna funktion
			var mesh = new THREE.Mesh(this.geometryStars, this.materialStars);
			mesh.position.set(this.positionX, this.positionY, this.positionZ);
			mesh.material.color.set = this.color;
			mesh.name = this.name * randomGenerator() + id; //sätter unikt id på alla klot
			sunArray.push(mesh);
		}
	},
};
