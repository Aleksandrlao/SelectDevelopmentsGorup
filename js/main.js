jQuery(document).ready(function($) {


// top line
	var $menu = $(".header");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });

// slider about us
	$('.c_about-slider').bxSlider({adaptiveHeight:true, controls: false});
	
// tabs invest
	$('ul.c_invest-tabs__caption').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.closest('div.c_invest-tabs').find('div.c_invest-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});




});