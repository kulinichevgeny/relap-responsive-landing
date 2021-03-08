@@include('slick.min.js')

$(document).ready(function () {
	$('.carousel').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 700,
		easing: 'ease',
		infinite: true,
		initialSlide: 0,
		draggable: false,
		swipe: true,
		touchMove: true,
		responsive: [
			{
				breakpoint: 150,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});