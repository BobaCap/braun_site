/*отступы для новигации по сайту*/
$("a[href='#']").click(function(){
	let linc = $(this).attr("href");
	$('html, body').animate({scrollTop: $(linc).offset().top - 100 + "px"});
});

/*перелистывание с отступом*/
$(window). scroll(() => {
	let scrolldis = $(window).scrollTop();

	$(".section").each((i, el) => {

		if($(el).offset().top - $("nav").outerHeight() <= scrolldis){
			$("nav a").each((i, el) =>{
				if ($(el).hasClass("active")){
					$(el).removeClass("active");
				}
			});
			$("nav a:eq('+ i +')").find('a').addClass('active');
		} 
	});
});

/*слайдеры*/
$(document).ready(function(){
	$(".cases_img").slick({
		slidesToShow: 1,
		initialSlide: 3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		variableWidth:false, 
	});
});

/*второй слайдер*/
$(document).ready(function(){
	$(".recall_img").slick({
		arrows:false,
		dots:true,
		slidesToShow: 1,
		initialSlide: 3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		variableWidth:false, 
	});
});

/*расчёт стоимости*/
function calc (){
	/*тип сайта*/
	var position1 = document.getElementById('list1').value;
	/*дизайн сайта*/
	var position2 = document.getElementById('list2').value;
	/*адаптивность*/
	var position3 = document.getElementById('list3').value;

	var result_price, result_duration;
	var price_1, price_2, price_3;
	var duration_1, duration_2, duration_3;

	switch (position1) {
		case 'Opt1':
			price_1 = 2000;
			duration_1 = 2;
			break;
		case 'Opt2':
			price_1 = 3000;
			duration_1 = 3;
			break;
		case 'Opt3':
			price_1 = 5000;
			duration_1 = 5;
			break;
	};

	switch (position2) {
		case 'Opt1':
			price_2 = 5000;
			duration_2 = 5;
			break;
		case 'Opt2':
			price_2 = 3000;
			duration_2 = 3;
			break;
		case 'Opt3':
			price_2 = 2000;
			duration_2 = 2;
			break;
	};

	switch (position3) {
		case 'Opt1':
			price_3 = 2000;
			duration_3 = 2;
			break;
		case 'Opt2':
			price_3 = 2000;
			duration_3 = 2;
			break;
		case 'Opt3':
			price_3 = 5000;
			duration_3 = 5;
			break;
	};

	result_duration = duration_1 + duration_2 + duration_3;
	result_price = price_1 + price_2 + price_3;

	/*сроки*/
	document.getElementById('out1').innerHTML = result_duration + " дней";
	/*цена*/
	document.getElementById('out2').innerHTML = result_price + "₽";
};



/*анимация цифр*/
function numb (num){
	var number = document.querySelector(num),
	numberTop = number.getBoundingClientRect().top,
	start = +number.innerHTML, end = +number.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval = setInterval(function() {
				number.innerHTML = ++start;
				if(start == end) {
					clearInterval(interval);
				}
			}, 5);
		}
	});
};
function num2 (num){
	var number = document.querySelector(num),
	numberTop = number.getBoundingClientRect().top,
	start = +number.innerHTML, end = +number.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval = setInterval(function() {
				number.innerHTML = "4," + ++start;
				if(start == end) {
					clearInterval(interval);
				}
			}, 5);
		}
	});
};
numb (".number1");
num2 (".number2");
numb (".number3");
numb (".number4");

$(document).ready(function(){
	$("#inputphone").mask("8(999) 999-9999");
});