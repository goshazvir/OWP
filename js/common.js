head.ready(function() {
	smoothScroll.init({
	    offset: 68, // Integer. How far to offset the scrolling anchor location in pixels

	});

	$('.js-minislide').flexslider({
		namespace: "minislide-",
		smoothHeight: true,
		animation: "fade",
		selector: ".js-minislide-in > .minislide-item",
		directionNav: false,
		slideshowSpeed: 7000,
		// controlsContainer: ".slider",
		useCSS: false,
		controlNav: false,
		slideshow: true
	});

	$(".js-nav a").click(function (){
	  $(this).parent().addClass('is-active').siblings().removeClass('is-active');
	});

	function onepage(){
		var windowheight = $(window).height();
		var slideHeight = $('.js-slide').css('height',windowheight);
	}
	if ($(".js-slide").length > 0){
	  onepage();
	}

	// RESIZE
	$(window).resize(function(){
	  if ($(".js-slide").length > 0){
	    onepage();
	  }
	});

});