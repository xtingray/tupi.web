//Tupi.web PaperScript.Js Code


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

