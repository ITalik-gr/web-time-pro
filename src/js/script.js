// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 150,

//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.feedback-slider-next',
//     prevEl: '.feedback-slider-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     dragSize: 45,
//   },

//   breakpoints: {
//     // when window width is >= 320px
//     376: {
//       scrollbar: {
//         dragSize: 69,
//       },
//     },
//   }
// });
var mySwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 150,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.feedback-slider-next',
    prevEl: '.feedback-slider-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 45,
  },
});

var mySwiper2 = new Swiper('.case-slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


let menu = document.querySelector('.menu'),
    toggle = document.querySelector('.nav-toggle'),
    closeMenu = document.querySelector('.menu-close'),
    closeCookies = document.querySelector('.close-cookies'),
    cookies = document.querySelector('.cookies');

toggle.addEventListener('click', function() {
  menu.classList.toggle('menu-active');
});
closeMenu.addEventListener('click', function() {
  menu.classList.remove('menu-active');
});

closeCookies.addEventListener('click', function() {
  cookies.classList.add('cookies-close');
})


var modal = document.getElementById('form');

var myBtn = document.getElementsByClassName('open-form');
var close = document.getElementsByClassName('form-close')[0];
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
  modal.style.display = "flex";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}




const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
	