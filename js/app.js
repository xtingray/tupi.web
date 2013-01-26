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


$( function(){
   console.log("adsfasdfasdf");

   
	paper.setup("canvas");

   $('#submit-button').click(function(){
     document.getElementById('svg').appendChild(paper.project.exportSvg());
     var svg = $('<div>').append($('#svg').clone()).html();
     $.post("http://tupitube.com/svg/upload/file",{'svg':svg})
   });




})

function changeStrokeColor(){
	document.getElementById('svg').appendChild(paper.project.exportSvg());
}
