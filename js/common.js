head.ready(function() {
	smoothScroll.init({
	    offset: 68 // Integer. How far to offset the scrolling anchor location in pixels
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

	$('.js-mobile-nav').on('click', function() {
		$(".owp-settings-list").slideToggle();
	});

	function onepage(){
		var windowheight = $(window).height();
		var oneslide = (windowheight);
		var navheight = (windowheight - 68);

		var slideHeight = $('.js-slide').css('height',navheight);
		var slideone = $('.js-slide1').css('height',oneslide);
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

	$('.js-nav li').on('click', function() {
		$(".navbar-collapse").removeClass("in");
	});

});