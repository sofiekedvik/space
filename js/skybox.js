function createSky(){
	var skyGeo = new THREE.SphereGeometry(50000, 25, 25);
	var texture = THREE.ImageUtils.loadTexture( "images/stars4.jpg" );
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set( 1, 1 );
	var material = new THREE.MeshBasicMaterial({
		ambient: "black",
		map: texture,
		depthWrite: false}
		);
	var sky = new THREE.Mesh(skyGeo, material);
	sky.material.side = THREE.BackSide;
	scene.add(sky);
}
