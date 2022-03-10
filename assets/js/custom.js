jQuery(document).ready(function(){ 

	// Home owlCarousel
	jQuery('.hero_slider_image_area').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		items:1,
		autoplay:false,
		navText: ['<img src="assets/images/icon/angle-left.png">','<img src="assets/images/icon/angle-right.png">'],
		dots:false,
	});
	// Mobile menu
	$('.nav-icon').click(function () {
		$('.mobile_menu').toggleClass('canvas-menu');
		return false;

	});


});