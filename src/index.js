"use strict";
var quickLoader = require( "quick-loader" );

global.window.onload = function() {


	//quickLoader.addChunk(['img/pattern.png','img/pattern2.png', 'audio/menu.mp3', 'data/A330s.json']);
	quickLoader.add('img/pattern.png', {weight: 47} );
	quickLoader.add('img/pattern2.png', {weight: 47} );
	quickLoader.add('audio/menu.mp3', {weight: 1600} );
	quickLoader.add('data/A330s.json', {weight: 1600} );
	quickLoader.start(function(percent){
    
    // assuming the files are loaded in the same order as above 
    // it will log 0.25, 0.5, 1.0 
    console.log(percent);
    document.getElementById( 'preload' ).innerHTML = Math.round(percent*100 ) + '%';

    if(percent === 1) {
        document.getElementById( 'preload' ).classList.add('hidden');

        // run engine
		var WebGL = require( './webgl/Webgl' );
		var webGL = new WebGL();
        
        // the listener was removed at this point and it 
        // will not have any stacked async issue so you can 
        // load something else again. 
        //quickLoader.add(...);
        //quickLoader.start(...);
    }
 
});
	
};