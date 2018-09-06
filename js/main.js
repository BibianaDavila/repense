var rotation = 0;
var rotation1 = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};
function animation(){
	var scroll = $(document).scrollTop();
	$('.overlay-bg').css('background-position-y',scroll/4);
	$('.overlay-bg.dois').css('background-position-y',scroll/3);

	var height = 100-scroll/3;
	//$('#home article').css('min-height',height+'vh');

	var sec1 = $('#prim').offset().top;
	var sec2 = $('#seg').offset().top;
	var sec3 = $('#ter').offset().top;
	var sec4 = $('#sex').offset().top;
	var sec5 = $('#qui').offset().top;
	var sec6 = $('#quar').offset().top;
	var sec7 = $('#set').offset().top;

	/* home */
	if(scroll<sec1){
		
	}
	/* primeiro */
	else if(scroll<sec2){
		$('.earth').css('marginLeft',scroll/3);
	}
	/* segundo */
	else if(scroll<sec3){
		var offset = $('#dois').offset();
		var scroll2 = scroll - offset.top;
		$('.fish').css('marginTop',0-scroll2/4);
		$('.fish').css('marginLeft',0-scroll2);
		$('.fish2').css('marginTop',0-scroll2/4);
		$('.fish2').css('marginRight',0-scroll2);
	}
	/* terceiro */
	else if(scroll<sec4){

	}
	/* quarto */
	else if(scroll<sec5){

	}
	/* quinto */
	else if(scroll<sec6){
		var offset = $('#qui').offset();
		var scroll2 = scroll - offset.top;
		$('.img-gar').css('marginTop',100-scroll2/2);
		rotation -= 5;
    	$('.img-gar.um').rotate(rotation);
    	rotation1 += 5;
    	$('.img-gar.dois').rotate(rotation1);
	}
	/* sexto */
	else if(scroll<sec7){
		var offset = $('#quar').offset();
		var scroll2 = scroll - offset.top;
		$('.coffee').css('marginTop',100-scroll2/2);
		$('.coffee').css('marginLeft',0-scroll2/2);
		$('.coffee2').css('marginTop',0-scroll2/2);
		$('.coffee2').css('marginRight',100-scroll2/2);
	}
	/* sétimo */
	else{
		var offset = $('#set').offset();
		var scroll2 = scroll - offset.top;
		$('.drop').css('marginTop',0-scroll2);
	}
}

$(document).ready(function(){

	animation();

	$(window).scroll(function(){
		animation();
	});
	$('#close').click(function(){

		$('#menu').addClass('close');
		$('#menu').find('article .content-center').hide();
	   	$('#menu').animate({height: 0}, 400);
	   	$('#open').show();

	});
	$('#open').click(function(){

		$('#open').hide();
		$('#menu').removeClass('close');
		$('#menu').find('article .content-center').show();
	   	 var curHeight = $('#menu').height(),
		   	autoHeight = $('#menu').css('height', 'auto').height();

		$('#menu').height(curHeight).animate({height: autoHeight}, 200);

	});
});