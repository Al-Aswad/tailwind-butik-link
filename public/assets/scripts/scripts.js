
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

let sMenu = false;
menuOpen.onclick = () => {
    $('#sidebar-menu').addClass('active');
}
menuClose.onclick = () => {
    $('#sidebar-menu').removeClass('active');
}





var swiper = new Swiper(".mySwiper ", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    // autoplay: {
    //      delay: 9000,
    //      disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination ",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
});

var swiper = new Swiper(".slideProduct ", {
    effect: "coverflow ",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto ",
    slidesPerView: 1,
    // spaceBetween: -30,
    loop: true,
    autoplay: {
        delay: 90000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 30,
        stretch: 170,
        // depth: 100,
        modifier: 1,

        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination ",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
});

var swiper = new Swiper(".slideTestimoni ", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination ",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
});
var swiper = new Swiper(".slideEvent ", {
    effect: "card ",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto ",
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 150,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination ",
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
});
