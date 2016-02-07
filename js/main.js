jQuery(document).ready(function($) {
	
	$('ul.c_invest-tabs__caption').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.closest('div.c_invest-tabs').find('div.c_invest-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});