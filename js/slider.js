	var sliderInt = 1;
	var sliderNext = 2;

$('document').ready(function(){

	fadeInImage();
	startSlider();
});

function startSlider(){
	var count = $('img').length
	var loop = setInterval(function(){

		$('img').fadeOut(1000);
		$('img#' + sliderNext).fadeIn(1000);

		sliderInt = sliderNext
		sliderNext += 1;
		
		if(sliderInt === count){
			sliderNext = 1;
		}

	}, 3000)
};

function fadeInImage(){
		$("img#" + sliderInt).fadeIn(1000);
	}