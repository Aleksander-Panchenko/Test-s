const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("menu-open");
})

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperTwo = new Swiper('.sertificates__slider', {
    loop: true,
    slidesPerView: 3 ,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      404: {
        slidesPerView: 1,
      },
    }
  });
  
  