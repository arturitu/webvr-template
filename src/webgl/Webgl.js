"use strict";

var THREE = require('three');

var renderer = require('./Renderer'),
clock = new THREE.Clock(),
camera,
scene,
cube;


function Webgl() {
	this.init();
}

Webgl.prototype.init = function() {
	
	camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 10000 );

	var geometry = new THREE.BoxGeometry( 10, 10, 10 );
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );

	cube = new THREE.Mesh( geometry, material );
	cube.position.set(0,0,-50);

	scene = new THREE.Scene();
	scene.add( cube );

	window.addEventListener( 'resize', this.onWindowResize, false );

	this.onWindowResize();

	animate();
};

Webgl.prototype.onWindowResize = function( event ) {
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;

	camera.aspect = newWidth / newHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( newWidth, newHeight );
	
}

function animate() {
	requestAnimationFrame( animate );
	render();

}

function render() {
	var delta = clock.getDelta();

	//controls.update ( delta );

	cube.rotation.y += delta;

	camera.position.y += delta;

	renderer.render ( scene, camera );

}

module.exports = Webgl;