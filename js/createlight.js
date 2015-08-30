// var pointLight = new THREE.PointLight( "#a0daff", 1, 0 );
// pointLight.position.set( 0, 0, 0 );
// scene.add( pointLight );

// var dirLight = new THREE.DirectionalLight(0xfff3a0, .7);
// dirLight.position.set(0, 0, 10);
// scene.add(dirLight);

var ambLight = new THREE.AmbientLight("rgba(255, 255, 255, .8)");
scene.add(ambLight);

// var hemLight = new THREE.HemisphereLight(0x00e4ff, 0x089eb0, .8);
// scene.add(hemLight);
