	var sliderInt = 1;
	var sliderNext = 2;
	var count = $('img').length

$('document').ready(function(){

	fadeInImage();
	startSlider();
	nextButton();
	backButton();
});

function startSlider(){
	var loop = setInterval(function(){
		if(sliderInt === count)
			sliderInt = 0;

		sliderInt += 1

		$('img').fadeOut(300);
		$('img#' + sliderInt).fadeIn(300);



	}, 5000)
};

function fadeInImage(){
		$("img#" + sliderInt).fadeIn(1000);
	}

function nextButton(){
	$('#next').click(function(){
		sliderInt += 1;
		fadeToNext(sliderInt);
	})
}

function backButton(){
	$('#back').click(function(){
		sliderInt -= 1;
		fadeToNext(sliderInt);
		
	})
}

function fadeToNext(id){
	if(id > count){
		id = 1;
		sliderInt = 1;
	}

	if(id < 1){
		id = count;
		sliderInt = count;
	}
	$('img').fadeOut(1000);
	$('img#' + id).fadeIn(1000);
	
}