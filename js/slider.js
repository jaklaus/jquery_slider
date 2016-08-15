
$('document').ready(function(){

	fadeInImage();
	nextButton();
	backButton();
	slideHover();
	
});
	var sliderInt = 1;
	var count = $('img').length
	var startLoop = window.setInterval(loopLogic, 6000);

function restartLoop(){
		startLoop = window.setInterval(loopLogic, 6000);
	}

function fadeInImage(){
		$("img#" + sliderInt).fadeIn(1000);
		slideDisplay();
	}

function nextButton(){
	$('#next, img').click(function(){
		sliderInt += 1;
		fadeToNext();
	})
}

function backButton(){
	$('#back').click(function(){
		sliderInt -= 1;
		fadeToNext();
	})
}

function fadeToNext(){
	if(sliderInt > count){
		sliderInt = 1;
	}

	if(sliderInt < 1){
		sliderInt = count;
	}
	$('img').fadeOut(0);
	$('img#' + sliderInt).fadeIn(1300);
	slideDisplay();
}

function stopLoop(){
	window.clearInterval(startLoop);
}

function loopLogic(){
	if(sliderInt === count){
		sliderInt = 0;
	}
		sliderInt += 1

	$('img').fadeOut(300);
	$('img#' + sliderInt).fadeIn(300);
	slideDisplay();
	};

function slideDisplay(){
	$('#slide-num').html("<strong>"+ sliderInt + "</strong>");
}

function slideHover(){
	$('#container').hover(function(){
			stopLoop();
		}, function(){
			restartLoop();
	});
}
