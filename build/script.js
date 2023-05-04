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
    const icon = button.querySelector('svg');
    const content = collapse.querySelector('.widget-content');
    button.addEventListener('click', () => {
        //button.closest('.widget').classList.toggle('collapsed');
        content.classList.toggle('collapsed');
        icon.classList.toggle('rotate-180');

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

const openFilter = document.querySelector('#open-filter').addEventListener("click", () => {
    document.body.classList.toggle('overflow-hidden');
    document.querySelector('#off-canvas-menu').classList.toggle('transform-none');
})