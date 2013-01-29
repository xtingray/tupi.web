//Tupi.web JavaScript.Js Code

var visibleItems = [];
var hiddenItems = [];
var path;
var pathStyle = {
	strokeColor : '#E4141B',
	strokeWidth : 2,
	strokeCap : 'butt'
};

paper.install(window);

$(function() {
	console.log("Installing PaperScript Global Scope");
	paper.setup("canvas");
	$('#submit-button').click(function() {		
		$('#hiddenSVG').addClass('hasSVG');
		var svg = paper.project.exportSvg();
		//This should be done by the PaperScript
		svg.setAttribute('width', $('#canvas').width());
        svg.setAttribute('height', $('#canvas').height());
        $('#hiddenSVG').empty();
		$('#hiddenSVG').append(svg);		
		var svg = $('<div>').append($('#hiddenSVG').children().clone()).html();
		$.post("http://tupitube.com/svg/upload/file",{'svg':svg})		
		console.log("SVG:" + svg);

	});

})

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
	paper.view.draw();
}

function redo() {
	pathToRedo = hiddenItems.pop();
	if (pathToRedo) {
		pathToRedo.visible = true;
		visibleItems.push(pathToRedo);
	}
	paper.view.draw();

}
