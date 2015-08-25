var light = new THREE.DirectionalLight("white", 1);
light.position.set(0,-450,400).normalize();
scene.add(light);


var light2 = new THREE.DirectionalLight("white", 1);+
light2.position.set(500,550,-400).normalize();
scene.add(light2);
