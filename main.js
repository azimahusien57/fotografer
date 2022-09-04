// style scrol
window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
    })
    // contacct btn
const textButtons = document.querySelectorAll('.contact_btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform:rotate(${index*12}deg)">${character}</span>`).join('')

})

// sweper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});
// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     spaceBetween: 20,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,

//         },
//         768: {
//             slidesPerView: 2,

//         },
//         1020: {
//             slidesPerView: 3,

//         },
//     },
// });