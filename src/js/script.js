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
		draggable: true,
		swipe: true,
		touchMove: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});