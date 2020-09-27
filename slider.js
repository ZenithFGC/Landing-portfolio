const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 28,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	  },
	  loop: true,
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 34
		},
		1025: {
			slidesPerView: 3,
			spaceBetween: 28
		},
		
	  }  
});