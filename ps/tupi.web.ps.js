//Tupi.web PaperScript.Js Code


function onMouseMove (event) {

}

function onMouseDown(event) {
	path = new Path();
	path.style = pathStyle;
}

function onMouseDrag(event){
	path.add(event.point);
}

function onMouseUp(event) {
	if (path) {
		path.simplify();
		visibleItems.push(path);
	}

}

