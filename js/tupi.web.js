//Tupi.web JavaScript.Js Code

var visibleItems = [];
var hiddenItems = [];
var path;
var pathStyle = {
	strokeColor : '#E4141B',
	strokeWidth : 2,
	strokeCap : 'butt'
};

$(function() {
	console.log("Installing PaperScript Global Scope");
	paper.install(window);
	paper.setup("canvas");
	$('#submit-button').click(function() {
		document.getElementById('svg').appendChild(paper.project.exportSvg());
		var svg = $('<div>').append($('#svg').clone()).html();
		//$.post("http://tupitube.com/svg/upload/file",{'svg':svg})
		alert('Subiendo...');
	});

})
function changeStrokeColor() {
	document.getElementById('svg').appendChild(paper.project.exportSvg());
}

function changeStyleColor() {
	pathStyle.strokeColor = '#' + $('#button_palette').val();
}

function changeStrokeSize(change) {
	pathStyle.strokeWidth = pathStyle.strokeWidth + change;
}

function undo() {
	pathToUndo = visibleItems.pop();
	if (pathToUndo) {
		pathToUndo.visible = false;
		hiddenItems.push(pathToUndo);
	}
}

function redo() {
	pathToRedo = hiddenItems.pop();
	if(pathToRedo){
		pathToRedo.visible = true;
		visibleItems.push(pathToRedo);
	}
}
