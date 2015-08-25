// function createSky(){
// 	var skyGeo = new THREE.BoxGeometry(5000, 5000, 5000);
// 	var texture = THREE.ImageUtils.loadTexture( "images/mapping01.jpg" );
// 	texture.wrapS = THREE.RepeatWrapping;
// 	texture.wrapT = THREE.RepeatWrapping;
// 	texture.repeat.set( 1, 1 );
// 	var material = new THREE.MeshPhongMaterial({
// 		map: texture,
// 		depthWrite: false} ,function(){
// 			renderer.render(scene);
// 		});
// 	var sky = new THREE.Mesh(skyGeo, material);
// 	sky.material.side = THREE.DoubleSide;
// 	scene.add(sky);
// }

function createSky(){
	var skyGeo = new THREE.SphereGeometry(100000, 50, 50);
	var texture = THREE.ImageUtils.loadTexture( "images/space.jpg" );
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set( 1, 1 );
	var material = new THREE.MeshPhongMaterial({
		map: texture,
		depthWrite: false} ,function(){
			renderer.render(scene);
		});
	var sky = new THREE.Mesh(skyGeo, material);
	sky.material.side = THREE.DoubleSide;
	scene.add(sky);
}
