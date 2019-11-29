(function($) {
	$(document).ready(function($) {

		$('ul.menu li').each(function() {
			$(this).find('a.active').parent('li').addClass('active').parent('ul').parent('li').children('a').addClass('active');
		});
		$('ul.menu li').find('a.active').addClass('active');
	});
})(jQuery);