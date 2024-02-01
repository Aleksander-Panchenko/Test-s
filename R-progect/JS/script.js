$(function() {
    $('.red__line').marquee({
        duration: 13000,
        startVisible: true,
        duplicated: true
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },    
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});