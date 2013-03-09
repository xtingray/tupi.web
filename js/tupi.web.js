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
	$('#submit-button').click(submitCanvas);
})

function submitCanvas() {
    var tmpDiv = $('<div>');
	var svg = paper.project.exportSvg();
	//This should be done by the PaperScript
	svg.setAttribute('width', $('#canvas').width());
	svg.setAttribute('height', $('#canvas').height());

	tmpDiv.empty();
	tmpDiv.append(svg);
	var svg = $('<div>').append(tmpDiv.children().clone()).html();
	var postInfo = {
		'title' : 'DummyTitle',
		'version' : 'v0.1',
		'tags' : '#NotImplementedYet #TagsList',
		'description' : 'DummyDescription',
		'svg' : svg
	}
	//var openURL = new MozActivity({name: "view",data: {type: "url", url:"http://tupitube.com"}});
	//var shareActivity = new MozActivity({name: "share",data: {type: "url", url:"http://tupitu.be"}});
	$.post("http://tupitu.be/svg/upload/file", postInfo, function(response) {	
		console.log(response);
		var shareActivity = new MozActivity(
		{name: "view", 
		data: {
			type: "url", 
			url: response}
			});
	});
	
}

function showPalettePopup(){
	console.log('Mostando Palette');
	var palette = $('#popup');
	 ColorPicker(
        document.getElementById('popup'),
        function(hex, hsv, rgb) {
          console.log(hsv.h, hsv.s, hsv.v);         // [0-359], [0-1], [0-1]
          console.log(rgb.r, rgb.g, rgb.b);         // [0-255], [0-255], [0-255]
         	pathStyle.strokeColor = hex;        // #HEX
         	$('#popup').hide();
        });
        
	palette.show();
}

function closePalettePopup(){
		$('#popup').hide();
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
