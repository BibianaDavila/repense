function positionBg(){
	var scroll = $(document).scrollTop();
	$('.overlay-bg').css('background-position-y',scroll/4);
	$('.overlay-bg.dois').css('background-position-y',scroll/3);
	var height = 100-scroll/3;
	$('#home article').css('min-height',height+'vh');
	$('.earth').css('marginTop',scroll/2);
	$('.earth').css('marginLeft',scroll);


	console.log('wait');
	var offset = $('#dois').offset();
	var scroll2 = scroll - offset.top;
	$('.fish').css('marginTop',0-scroll2/3);
}

$(document).ready(function(){

	$(window).scroll(function(){

		positionBg();

	});
});