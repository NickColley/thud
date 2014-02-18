window.onload = function(){

	var log = document.querySelector('.log');
	
	var axesPrev = [],
	    deflection = 0;
	
	var tilt = function (axes) {
		if (axesPrev) {
			for (var i = 0; i < axes.length; i++) {
				var delta = axes[i] - axesPrev[i];
				if (Math.abs(delta) > Math.abs(deflection)) {
					deflection = delta;

					log.innerHTML = 'lol';
					if(deflection > 100) {
						log.innerHTML = deflection;
					}
				}
			}
		}	
		axesPrev = axes;
	};
	
	if (window.DeviceOrientationEvent) {
	    window.addEventListener('deviceorientation', function(event) {
	    	console.log('tilt1');
	        tilt([event.beta, event.gamma]);
	    }, true);
	} else if (window.DeviceMotionEvent) {
	    window.addEventListener('devicemotion', function(event) {
	    	console.log('tilt2');
	        tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
	    }, true);
	}

};