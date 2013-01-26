//Tupi.web JavaScript.Js Code

var isMouseDown = false;
var paths = [];
var undoPaths = [];
var path;
var pathStyle = {
		strokeColor : '#E4141B',
		strokeWidth : 2,
		strokeCap : 'butt'
	}; 


$( function(){
   console.log("adsfasdfasdf");

   
	paper.setup("canvas");
	paper.install(window);

   $('#submit-button').click(function(){
     document.getElementById('svg').appendChild(paper.project.exportSvg());
     var svg = $('<div>').append($('#svg').clone()).html();
     //$.post("http://tupitube.com/svg/upload/file",{'svg':svg})
     alert('Subiendo...');
   });




})

function changeStrokeColor(){
	document.getElementById('svg').appendChild(paper.project.exportSvg());
}

function changeStyleColor(){
	pathStyle.strokeColor = '#'+ $('#color-button').val();
}

function changeStrokeSize(change){
	pathStyle.strokeWidth = pathStyle.strokeWidth+change;
}
