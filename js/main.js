function positionBg(){
	var scroll = $(document).scrollTop();
	$('.overlay-bg').css('background-position-y',scroll/4);
	$('.overlay-bg.dois').css('background-position-y',scroll/3);
}

$(document).ready(function(){

	$(window).scroll(function(){

		positionBg();

	});
});