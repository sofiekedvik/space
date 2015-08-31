

// var dirLight = new THREE.DirectionalLight(0xfff3a0, .7);
// dirLight.position.set(0, 0, 10);
// scene.add(dirLight);

// var ambLight = new THREE.AmbientLight("rgba(255, 255, 255, .5)");
// scene.add(ambLight);

var pointLight = new THREE.PointLight( "#fdabab", 1, 150000 );
pointLight.position.set( 50, 50, 50 );
scene.add( pointLight );
// var hemLight = new THREE.HemisphereLight(0x00e4ff, 0x089eb0, .5);
// scene.add(hemLight);
