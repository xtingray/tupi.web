//Tupi.web PaperScipt.Js Code

var isMouseDown = false;
var paths = [];
var undoPaths = [];
var path;
var pathStyle = {
		strokeColor : '#E4141B',
		strokeWidth : 2,
		strokeCap : 'butt'
	}; 

function onMouseMove(event) {
	if (isMouseDown) {
		path.add(event.point);
	}
}

function onMouseDown(event) {
	isMouseDown = true;
	path = new Path();
	path.style = pathStyle;

}

function onMouseUp(event) {
	isMouseDown = false;
	if (path) {
		path.smooth();
		paths.push(path);
		path.fullySelected = false;
		path.strokeColor = '#e4141b';
	}
}

function undo(){
		pathToRemove = paths.pop();
		if(pathToRemove.remove())
			undoPaths.push(pathToRemove);
}

function redo(){
	pathToRestore = undoPaths.pop();
}

function setPathStyle(style){
	pathStyle = style;
}
