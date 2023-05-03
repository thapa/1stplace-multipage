const swiper_sections = document.querySelectorAll('.slider-component');
swiper_sections.forEach((section) => {
    const slider = section.querySelector('.swiper');
    const prevArrow = section.querySelector('.swiper-arrow-prev');
    const nextArrow = section.querySelector('.swiper-arrow-next');
    const slidesPerView = section.dataset.slidesPerView;
    const slidesPerViewMb = section.dataset.slidesPerViewMb;
    const swiper = new Swiper(slider, {
        slidesPerView: slidesPerViewMb,
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: nextArrow,
            prevEl: prevArrow,
        },
        breakpoints: {

            768: {
                slidesPerView: slidesPerView,
                spaceBetween: 20,

            }

        }

    });
});

const collapses = document.querySelectorAll('.widget');
collapses.forEach((collapse) => {
    const button = collapse.querySelector('button');
    const content = collapse.querySelector('.widget-content');
    button.addEventListener('click', () => {
        button.closest('.widget').classList.toggle('active');
    })
})

const perosnlizeBtnAll = document.querySelectorAll('[data-modal-target]');
perosnlizeBtnAll.forEach((modal) => {
    modal.addEventListener('click', () => {
        const modalId = '#' + modal.getAttribute('data-modal-target');
        document.querySelector(modalId).setAttribute('aria-modal', 'true');
        document.querySelector('html').classList.add('modal-open');

    })
})