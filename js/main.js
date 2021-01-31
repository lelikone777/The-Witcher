// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


  
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: '1',
    navigation: {
      nextEl: '.arrow'
    },
    breakpoints: {
        540: {
          slidesPerView: 2,
        }
      }
  });

  


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
})