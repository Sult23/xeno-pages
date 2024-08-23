$('.slider').slick({
	dots: false,
	infinite: true,
	slidesToShow: 1,
	adaptiveHeight: true,
	adaptiveWidth: true,
	variableWidth: true,
	responsive:[{
		breakpoint: 400
	}],
	prevArrow:
		'<button type="button" class="slick-btn slick-prev"><img src="img/icons/arrow-left.svg"></button>',
	nextArrow:
		'<button type="button" class="slick-btn slick-next"><img src="img/icons/arrow-right.svg"></button>',
})
