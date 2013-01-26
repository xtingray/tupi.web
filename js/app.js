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
   $('#color-button').click(function(){
     console.log("hello world");
   });
	paper.setup("canvas");
  }
  
)

function changeStrokeColor(){
	document.getElementById('svg').appendChild(paper.project.exportSvg());
}

function changeStyleColor(){
	pathStyle.strokeColor = '#'+ $('#color-button').val();
}

function changeStrokeSize(change){
	pathStyle.strokeWidth = pathStyle.strokeWidth+change;
}
