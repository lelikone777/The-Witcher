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

  
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');

menuButton.addEventListener('click', event => {
    const target = event.target;
    
   
      if (!menuButton.classList.contains('menu-button-active')) { 
        header.classList.add('header-active');
        menuButton.classList.add('menu-button-active');
      } else {
        menuButton.classList.remove('menu-button-active');
        header.classList.add('header-hiding');
        setTimeout(() => {
          header.classList.remove('header-active');
          header.classList.remove('header-hiding');
        }, 400)
      }
    
  });





// var menuButton = document.querySelector('.menu-button');
// var header = document.querySelector('.header');
// menuButton.addEventListener('click', function () {
//   menuButton.classList.toggle('menu-button-active');
//   header.classList.toggle('header-active');
// })


