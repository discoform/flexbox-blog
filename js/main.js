
///////////////////////
///main-navigation
////////////////////////
jQuery(document).ready(function ($) {
	var isLateralNavAnimating = false;

	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function (event) {
		event.preventDefault();
		//stop if nav animation is running 
		if (!isLateralNavAnimating) {
			if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;

			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});



///////////////////////
///secondary-navigation
////////////////////////

jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});



