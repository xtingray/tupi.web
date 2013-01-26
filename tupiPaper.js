// Adapted from the following Processing example:
		// http://processing.org/learning/topics/follow3.html

		var isMouseDown = false;
		var paths = []; 
		var path = new Path();
		path.style = {
			strokeColor: '#E4141B',
			strokeWidth: 5,
			strokeCap: 'round'
		};
		var size = 25;
		var segments = path.segments;
		var start = view.center / [10, 1];
		//for (var i = 0; i < size; i++)
		//	path.add(start + new Point(i * 100, 0));

		function onMouseMove(event) {
			if(isMouseDown)
				path.add(event.point);
		}

		function onMouseDown(event) {
			isMouseDown = true;
			//path.fullySelected = true;
			//path.strokeColor = '#e08285';			
		}

		function onMouseUp(event) {
			path.smooth();
			isMouseDown = false;
			path.fullySelected = false;
			path.strokeColor = '#e4141b';
		}