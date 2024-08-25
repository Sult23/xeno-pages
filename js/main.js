// select component
$(document).ready(function () {
	$('.select-selected').click(function () {
		$('.select-items').toggle() // Показать/скрыть список при клике
	})

	$('.select-items div').click(function () {
		var selected = $(this).text()
		$('.select-selected').text(selected) // Обновить выбранный текст
		$('.select-items').hide() // Скрыть список после выбора
	})

	// Закрытие списка при клике вне его
	$(document).click(function (event) {
		if (!$(event.target).closest('.custom-select').length) {
			$('.select-items').hide()
		}
	})
})

//  слайдер

$('.slider').slick({
	dots: false,
	infinite: true,
	slidesToShow: 1,
	adaptiveHeight: true,
	adaptiveWidth: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 400,
		},
	],
	prevArrow:
		'<button type="button" class="slick-btn slick-prev"><img src="img/icons/arrow-left.svg"></button>',
	nextArrow:
		'<button type="button" class="slick-btn slick-next"><img src="img/icons/arrow-right.svg"></button>',
})

// мультиязычность

var arrLang = {
	'en': {
		'generator': 'white pages Generator',
		'description':
			'Our automated system allows you to quickly and easily create pages that meet the requirements of all advertising platforms.',
		'create': 'Create account',
		'begin': 'Begin using',
		'welcome':
			'Welcome to the automated Xeno Pages system - your reliable assistant in creating White Pages.',
		'signin': 'Sign in',
		'benefits':
			'In just two minutes you will receive a ready-made website, fully configured for a successful upload!',
		'registr':
			'Register, add servers, Cloudflare accounts and domains. The generator is ready for use. The first 3 whites are free!',
	},
	'ru': {
		'generator': 'генератор White pages',
		'description':
			'Наша автоматизированная система позволяет быстро и просто создавать страницы, соответствующие требованиям всех рекламных платформ.',
		'create': 'Создать аккаунт',
		'begin': 'Начать использование',
		'welcome':
			'Добро пожаловать в автоматизированную систему Xeno Pages– ваш надежный помощник в создании White Pages.',
		'signin': 'Войти',
		'benefits':
			'Всего за две минуты вы получите готовый сайт, полностью настроенный для успешного залива! ',
		'registr':
			'Зарегистрируйтесь, добавьте сервера, аккаунты Cloudflare и домены. Генератор готов к работе. Первые 3 вайта - бесплатно!',
	},
}

$(function () {
	$('.translate').click(function () {
		var lang = $(this).attr('id')
		$('.lang').each(function (index, item) {
			$(this).text(arrLang[lang][$(this).attr('key')])
		})
	})
})
