function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


const consultWindow = document.createElement('section')
consultWindow.classList.add('consultation')
consultWindow.innerHTML = `
	<div class="consultation__close"><span></span></div>
	<div class="consultation__content">
		<h1>Получить<br>консультацию</h1>
		<p>Мы всегда рады обсудить с вами ваш проект<br>или ответить на вопросы.</p>
		<form class="form">
			<div class="form__row">
				<div class="input">
					<input type="name" placeholder="Имя">
				</div>
				<div class="input">
					<input type="phone" placeholder="Телефон">
				</div>
				<div class="input">
					<input type="email" placeholder="E-mail">
				</div>
				<div class="textarea">
					<textarea placeholder="Описание задачи"></textarea>
				</div>
			</div>
		</form>
		<div class="wrap">
			<div class="consultation__content-politic">
				<div class="checkbox">
					<div class="check">L</div>
				</div>
				<p>Я согласен с политикой конфиденциальности</p>
			</div>
			<button>Отправить заявку</button>
		</div>
	</div>
	<div class="consultation__footer">
		<div class="container">
			<p>© 2021 vr-design</p>
		</div>
	</div>`
const pageHeader = document.querySelectorAll('.header')[0]
let logo = document.querySelectorAll('.header-logo svg path')
const getConsult = document.querySelectorAll('.consult')[0]
const transition = 200
const checkBox = document.querySelectorAll('.checkbox')[0]
let consultMob = document.createElement('div')
consultMob.setAttribute('class', 'menu__col')
consultMob.style.marginBottom = '10px'
consultMob.style.textAlign = 'center'
consultMob.style.width = '100%'

let consultMobPar = document.createElement('a')
consultMobPar.innerHTML = 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'
consultMobPar.style.color = '#fff'
consultMobPar.style.borderBottom = '1px solid #fff'
consultMobPar.style.paddingBottom = '1px'
consultMobPar.style.fontFamily = 'var(--common-font-r), serif'
consultMobPar.style.lineHeight = '0.6px'

consultMob.appendChild(consultMobPar)

let numBlock = document.createElement('div')
numBlock.setAttribute('class', 'menu__col')
numBlock.style.textAlign = 'center'
numBlock.style.width = '100%'

let numText = document.createElement('a')
numText.innerHTML = '+7 928 123 45 67'
numText.style.color = '#fff'
numText.style.fontFamily = 'var(--headings-font-l), serif'
numText.style.lineHeight = '0.6px'

numBlock.appendChild(numText)

// Блок с бургер меню

const burger = document.querySelector('.mainpage__burger')

let burgerMenu = document.createElement('section')
burgerMenu.classList.add('menu')
burgerMenu.innerHTML = `
<div class="menu__wrap">
	<div class="menu__content">
		<img src="img/net.png" alt="" class="menu__net">
		<div class="menu__col">
			<ul>
				<li style="--count:'01'"><a href="#main" data-num="0">Главная</a></li>
				<li style="--count:'02'"><a href="#tech" data-num="1">Технологии</a></li>
				<li style="--count:'03'"><a href="#services" data-num="2">Услуги</a></li>
				<li style="--count:'04'"><a href="#about" data-num="3">О нас</a></li>
			</ul>
		</div>
		<div class="menu__col">
			<ul>
				<li style="--count:'05'"><a href="#doc" data-num="4">Сертификаты</a></li>
				<li style="--count:'06'"><a href="#team" data-num="5">Команда</a></li>
				<li style="--count:'07'"><a href="#contacts" data-num="6">Контакты</a></li>
			</ul>
		</div>
	</div>
	<div class="menu__footer">
		<p>© 2021 vr-design</p>
	</div>
</div>`

let consultOpened = false
let menuOpened = false

let vrBgwebp = document.querySelector('[srcset="img/VRbg.webp"]')
let vrBgpng = document.querySelector('[src="img/VRbg.png"]')

function resizeWidth() {
	if (window.screen.width <= 1024 && window.screen.width > 768) {
		vrBgwebp.setAttribute('srcset', 'img/VRbg768.webp')
		vrBgpng.setAttribute('src', 'img/VRbg768.png')
	} else if (window.screen.width <= 768) {
		vrBgwebp.setAttribute('srcset', 'img/VRbgmob.webp')
		vrBgpng.setAttribute('src', 'img/VRbgmob.png')
	} else {
		vrBgwebp.setAttribute('srcset', 'img/VRbg.webp')
		vrBgpng.setAttribute('src', 'img/VRbg.png')
	}
}

let mobileAdditionBool = false

function mobileAddition() {
	if (menuOpened) {
		mobileAdditionBool = true
		document.querySelectorAll('.menu__content')[0].appendChild(consultMob)
		document.querySelectorAll('.menu__content')[0].appendChild(numBlock)
	}
}

function mobileDeletion() {
	if (menuOpened) {
		mobileAdditionBool = false
		consultMob.parentNode.removeChild(consultMob)
		numBlock.parentNode.removeChild(numBlock)
	}
}

function changeBlock(elem, block, where) {
	block.insertAdjacentElement(where, elem);
}

window.onresize = function () {
	setScroll()
	resizeWidth()
	downDeleter()
	sliderChanging()
	giveProjectReplace()
	if (window.screen.width <= 1024) {
		changeBlock(document.querySelector('.solutions__description'), document.querySelector('.solutions header'), 'beforeend')
	} else if (window.screen.width > 1024) {
		changeBlock(document.querySelector('.solutions__description'), document.querySelector('.col.mark'), 'afterbegin')
	}
}

window.onload = function () {
	resizeWidth()
	sliderChanging()
	downDeleter()
	setScroll()
	giveProjectReplace()
	if (window.screen.width <= 1024) {
		changeBlock(document.querySelector('.solutions__description'), document.querySelector('.solutions header'), 'beforeend')
	} else if (window.screen.width > 1024) {
		changeBlock(document.querySelector('.solutions__description'), document.querySelector('.col.mark'), 'afterbegin')
	}
}
const sliders = document.querySelectorAll('.documents__slider-wrapper .slide__item')

function sliderChanging() {
	if (window.screen.width < 1024) {
		document.querySelector('.documents__slider-wrapper').style.flexWrap = 'wrap';
		document.querySelector('.documents__slider-wrapper').style.display = 'flex';
		document.querySelector('.documents__slider-wrapper').style.height = '666px';
		document.querySelectorAll('.team__person')[5].style.marginLeft = '35px';
		document.querySelector('.team__slider-wrapper').style.flexWrap = 'wrap';
		document.querySelector('.description__content').style.display = 'none';
		document.querySelector('.description__content.mobile').style.display = 'block';
		for (let i = 0; i < sliders.length; i++) {
			sliders[i].style.height = 'calc((100% - 55px) / 2)'
		}
		if (window.screen.width <= 768) {
			document.querySelector('.team__slider-wrapper').style.flexWrap = 'nowrap';
			document.querySelector('.documents__slider-wrapper').style.flexWrap = 'nowrap';
			document.querySelector('.documents__slider-wrapper').style.height = 'unset';
			document.querySelector('.documents__slider-wrapper').style.display = 'inline-flex';


		}
	} else if (window.screen.width > 1024) {
		document.querySelector('.documents__slider-wrapper').style.flexWrap = 'nowrap';
		document.querySelector('.documents__slider-wrapper').style.display = 'inline-flex';
		document.querySelector('.documents__slider-wrapper').style.height = 'unset';
		document.querySelectorAll('.team__person')[5].style.marginLeft = '0';
		document.querySelector('.team__slider-wrapper').style.flexWrap = 'nowrap';
		document.querySelector('.description__content').style.display = 'flex';
		document.querySelector('.description__content.mobile').style.display = 'none';
		for (let i = 0; i < sliders.length; i++) {
			sliders[i].style.height = 'unset'
		}
	}
}

const downBlocks = document.querySelectorAll('.team__person.down')

function downDeleter() {
	if (window.screen.width <= 1024 && window.screen.width >= 768) {
		for (let i = 0; i < downBlocks.length; i++) {
			downBlocks[i].style.top = '0'
		}
	} else if (window.screen.width > 1024) {
		for (let i = 0; i < downBlocks.length; i++) {
			downBlocks[i].style.top = '30px'
		}
	}
}

function giveProjectReplace() {
	if (window.screen.width <= 768) {
		document.querySelectorAll('.form__col')[1].insertAdjacentElement('beforeend', document.querySelector('.giveproject .form__checkbox'))
		document.querySelectorAll('.form__col')[1].insertAdjacentElement('beforeend', document.querySelector('.giveproject .form__col button'))
	}
}



const text = [
	'МОДЕЛИРОВАНИЕ И ВИЗУАЛИЗАЦИЯ 3D-ОБЪЕКТОВ В ФОРМАТЕ ВИРТУАЛЬНОЙ РЕАЛЬНОСТИ'
];

let line = 0;
let count = 0;
let result = '';
function typeLine() {
	let interval = setTimeout(
		() => {

			result += text[line][count];
			document.querySelector('p').innerHTML = result + '|';
			count++;

			if (count >= text[line].length) {
				count = 0;
				line++;
				if (line >= text.length) {
					clearTimeout(interval);
					document.querySelector('p').innerHTML = result;
					return true
				}
			}
			typeLine();
		}, getRandomInt(200))
}

typeLine()

function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}


// Динамическое создание окна с консультацией на десктопе

getConsult.addEventListener('click', function () {
	if (consultOpened) {
		consultOpened = false
		consultWindow.classList.remove('active')
		consultWindow.parentNode.removeChild(consultWindow)
		pageHeader.classList.remove('consult')
		for (i = 0; i < logo.length; i++) {
			if (logo[i].getAttribute('fill') == 'black') {
				logo[i].setAttribute('fill', 'white')
			}
		}
	} else {
		consultOpened = true
		document.querySelector('.page').insertAdjacentElement('afterend', consultWindow)
		consultWindow.classList.add('active')
		pageHeader.classList.add('consult')

		setTimeout(function () {
			for (i = 0; i < logo.length; i++) {
				if (logo[i].getAttribute('fill') == 'white') {
					logo[i].setAttribute('fill', 'black')
				}
			}
		}, transition)

		document.querySelector('.consultation__close').onclick = function () {
			consultWindow.classList.remove('active')
			consultOpened = false
			pageHeader.classList.remove('consult')
			consultWindow.parentNode.removeChild(consultWindow)
			for (i = 0; i < logo.length; i++) {
				if (logo[i].getAttribute('fill') == 'black') {
					logo[i].setAttribute('fill', 'white')
				}
			}
		}

		document.querySelector('.consultation__content-politic .checkbox').onclick = function () {
			if (!this.classList.contains('active')) {
				this.classList.add('active')
			} else {
				this.classList.remove('active')
			}
		}

	}
})


document.querySelector('.form__checkbox .checkbox').onclick = function () {
	if (!this.classList.contains('active')) {
		this.classList.add('active')
	} else {
		this.classList.remove('active')
	}
}
// Динамическое создание окна с консультацией на mobile


consultMob.addEventListener('click', function () {
	if (consultOpened) {
		if (menuOpened) {
			burgerMenu.insertAdjacentElement('afterbegin', document.querySelector('.header'))
		}
		consultOpened = false
		consultWindow.classList.remove('active')
		consultWindow.parentNode.removeChild(consultWindow)
		pageHeader.classList.remove('consult')
		for (i = 0; i < logo.length; i++) {
			if (logo[i].getAttribute('fill') == 'black') {
				logo[i].setAttribute('fill', 'white')
			}
		}
	} else {
		if (menuOpened) {
			consultWindow.insertAdjacentElement('afterbegin', document.querySelector('.header'))
		}
		consultOpened = true
		document.querySelector('.page').insertAdjacentElement('afterend', consultWindow)
		consultWindow.classList.add('active')
		pageHeader.classList.add('consult')

		setTimeout(function () {
			for (i = 0; i < logo.length; i++) {
				if (logo[i].getAttribute('fill') == 'white') {
					logo[i].setAttribute('fill', 'black')
				}
			}
		}, transition)
		document.querySelector('.consultation.active').style.zIndex = '12';
		consultWindow.insertAdjacentElement('afterbegin', document.querySelector('.header'));
		document.querySelector('.consultation__close').onclick = function () {
			if (menuOpened) {
				burgerMenu.insertAdjacentElement('afterbegin', document.querySelector('.header'))
			}
			consultOpened = false
			consultWindow.classList.remove('active')
			consultWindow.parentNode.removeChild(consultWindow)
			pageHeader.classList.remove('consult')
			for (i = 0; i < logo.length; i++) {
				if (logo[i].getAttribute('fill') == 'black') {
					logo[i].setAttribute('fill', 'white')
				}
			}
		}
	}
})


// Динамическое создание бургер меню
burger.addEventListener('click', function () {
	if (!menuOpened) {
		if (consultOpened && window.screen.width > 768) {
			burgerMenu.style.zIndex = '13';
		}
		menuOpened = true
		document.querySelector('.page').insertAdjacentElement('afterend', burgerMenu)
		burger.classList.add('active');
		pageHeader.classList.add('menu-active');
		burgerMenu.classList.add('active');
		setTimeout(function () {
			document.querySelectorAll('.header-info h1')[0].style.display = 'none';
		}, transition);

		if (pageHeader.classList.contains('consult')) {
			setTimeout(function () {
				for (i = 0; i < logo.length; i++) {
					if (logo[i].getAttribute('fill') == 'black') {
						logo[i].setAttribute('fill', 'white')
					}
				}
			}, transition)
		};
		if (window.screen.width <= 768) {
			mobileAddition()
			burgerMenu.insertAdjacentElement('afterbegin', document.querySelector('.header'));

		} else if (window.screen.width > 768) {
			if (mobileAdditionBool) {
				mobileDeletion()
			}
		}

		$('.menu__col ul li a').on('click', function () {
			pageSlider.slideTo(this.dataset.num, 800, true)
			menuOpened = false
			burger.classList.remove('active')
			pageHeader.classList.remove('menu-active')
			document.querySelector('.wrapper').insertAdjacentElement('afterbegin', document.querySelector('.header'))
			burgerMenu.classList.remove('active')
			if (consultOpened) {
				consultOpened = false
				wrapper.insertAdjacentElement('afterbegin', document.querySelector('.header'))
				consultWindow.classList.remove('active')
				pageHeader.classList.remove('consult')
				consultWindow.parentNode.removeChild(consultWindow)
			}
		})
	} else {
		if (consultOpened) {
			if (window.screen.width <= 768) {
				consultOpened = false
				burgerMenu.insertAdjacentElement('afterbegin', document.querySelector('.header'))
				consultWindow.classList.remove('active')
				pageHeader.classList.remove('consult')
				consultWindow.parentNode.removeChild(consultWindow)
				for (i = 0; i < logo.length; i++) {
					if (logo[i].getAttribute('fill') == 'black') {
						logo[i].setAttribute('fill', 'white')
					}
				}
			} else {
				menuOpened = false
				burger.classList.remove('active')
				pageHeader.classList.remove('menu-active')
				burgerMenu.parentNode.removeChild(burgerMenu)
				burgerMenu.classList.remove('active')
				if (pageHeader.classList.contains('consult')) {
					setTimeout(function () {
						for (i = 0; i < logo.length; i++) {
							if (logo[i].getAttribute('fill') == 'white') {
								logo[i].setAttribute('fill', 'black')
							}
						}
					}, 0)
				}
			}
			return
		}

		menuOpened = false
		burger.classList.remove('active')
		pageHeader.classList.remove('menu-active')
		document.querySelector('.wrapper').insertAdjacentElement('afterbegin', document.querySelector('.header'))
		burgerMenu.parentNode.removeChild(burgerMenu)
		burgerMenu.classList.remove('active')
		if (pageHeader.classList.contains('consult')) {
			setTimeout(function () {
				for (i = 0; i < logo.length; i++) {
					if (logo[i].getAttribute('fill') == 'white') {
						logo[i].setAttribute('fill', 'black')
					}
				}
			}, 0)
		}
	}
})


const wrapper = document.querySelector('.wrapper')

const pageSlider = new Swiper('.page', {
	observer: true,
	observeParents: true,
	wrapperClass: "page__wrapper",
	slideClass: "screen",
	direction: 'vertical',
	slidesPerView: 'auto',
	parallax: true,
	allowSlideNext: true,
	simulateTouch: true,
	navigation: {
		nextEl: '.arrows__next_page',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensivity: 1,
	},
	watchOverflow: true,
	speed: 800,

	observeSlideChildren: true,
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: 'page__bullet',
		bulletActiveClass: "page__bullet_active"
	},
	scrollbar: {
		el: '.page__scroll',
		dragClass: 'page__drag-scroll',
		draggable: true,
	},
	init: false,
	on: {
		init: function () {
			wrapper.classList.add('loaded');
			setScroll();
		}
	},
	scrollbar: {
		el: '.page__scrollbar',
		draggable: true,
		dragClass: 'page__scrollbar_drag'
	},

})

const teamSlider = new Swiper('.team__slider', {
	wrapperClass: "team__slider-wrapper",
	slideClass: "team__person",
	allowSlideNext: true,
	observer: true,
	observeParents: true,
	allowSlidePrev: true,
	slidesPerView: 4.5,
	simulateTouch: true,
	navigation: {
		nextEl: '.arrows__next',
		prevEl: '.arrows__prev',
	},
	pagination: {
		el: '.team__pagination',
		type: 'fraction',
		clickable: true,
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero
	},
	spaceBetween: 35,
	breakpoints: {
		1024: {
			slidesPerView: 4.5,
			grid: {
				rows: 1,
				fill: 'column',
			},
		},
		769: {
			slidesPerView: 3,
			grid: {
				rows: 2,
				fill: 'row',
			},
		},
		320: {
			slidesPerView: 'auto',
			grid: {
				rows: 1,
			},
		}
	},
})

function addZero(num) {
	return (num > 9) ? num : '0' + num;
}

const documentsSlider = new Swiper('.documents__slider', {
	wrapperClass: "documents__slider-wrapper",
	slideClass: "slide__item",
	allowSlideNext: true,
	allowSlidePrev: true,
	slidesPerView: 3,
	simulateTouch: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: '.arrows__next',
		prevEl: '.arrows__prev',
	},
	slidesPerGroup: 3,
	pagination: {
		el: '.documents__pagination',
		type: 'fraction',
		clickable: true,
		fractionClass: 'documents__bullet',
		fractionActiveClass: "documents__bullet_active",
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero
	},
	grid: {
		rows: 1,
		fill: 'column',
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 55,
		},
		769: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 30,
			grid: {
				rows: 2,
				fill: 'row',
			},
		},
		320: {
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			spaceBetween: 30,
			grid: {
				rows: 1,
				fill: 'column',
			},
		}
	},
	autoHeight: false,
})

const descriptionSlider = new Swiper('.description__content.mobile', {
	wrapperClass: "mobile__wrapper",
	slideClass: "col",
	slidesPerView: 1,
	navigation: {
		nextEl: '.arrows__next',
		prevEl: '.arrows__prev',
	},
})


function setScroll() {
	if (wrapper.classList.contains('free')) {
		wrapper.classList.remove('free');
		pageSlider.params.freeMode.enabled = false;
		document.querySelector('.header').style.background = 'transparent'
		document.querySelector('.header').style.paddingTop = '20px';
		document.querySelector('.header').style.paddingBottom = 'unset';

	}
	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight + +/\d+/.exec($('.page').css('padding-top'))[0] - 2;
			if (pageSlideContentHeight > window.innerHeight) {
				console.log(pageSlide)
				document.querySelector('.header').style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(51,24,80,1) 33%, rgba(34,27,51,1) 100%)';
				document.querySelector('.header').style.paddingTop = '5px';
				document.querySelector('.header').style.paddingBottom = '5px';
				wrapper.classList.add('free')
				pageSlider.params.freeMode.enabled = true;
				break;
			}
		}
	}
}

const colors = ['#B0347D', '#E5546D', '#FF865B', '#FFBF55', '#F9F871', '#1e4fc6', 'white']
pageSlider.on('slideChange', function () {
	document.querySelector('.page__scrollbar_drag').style.background = colors[Math.floor(Math.random() * colors.length)];
	document.querySelector('.page__scrollbar_drag').style.transitionDuration = '400ms';

})

const documentMore = document.createElement('div')
const documentImage = document.createElement('img')
documentImage.src = 'img/document.png'
documentImage.style.maxWidth = '510px';
documentImage.style.maxHeight = '70%';
documentMore.classList.add('documents__overlay');
documentMore.style.position = 'fixed';
documentMore.style.display = 'flex';
documentMore.style.alignItems = 'center';
documentMore.style.justifyContent = 'center';
documentMore.style.width = '100%';
documentMore.style.height = '100%';
documentMore.style.top = '0';
documentMore.style.left = '0';
documentMore.style.zIndex = '1000';
documentMore.style.background = 'rgba(0,0,0,0.6)';


documentMore.insertAdjacentElement('afterbegin', documentImage)


$('.documents .slide__item').on('click', function () {
	document.querySelector('body').insertAdjacentElement('afterbegin', documentMore);
});

$(documentMore).on('click', function () {
	documentMore.parentNode.removeChild(documentMore);
});


pageSlider.init();