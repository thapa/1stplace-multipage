const swiper_sections = document.querySelectorAll(".slider-component");
swiper_sections.forEach((section) => {
  const slider = section.querySelector(".swiper");
  const prevArrow = section.querySelector(".swiper-arrow-prev");
  const nextArrow = section.querySelector(".swiper-arrow-next");
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
      },
    },
  });
});

const collapses = document.querySelectorAll(".widget");
collapses.forEach((collapse) => {
  const button = collapse.querySelector("button");
  const icon = button.querySelector("svg");
  const content = collapse.querySelector(".widget-content");
  button.addEventListener("click", () => {
    //button.closest('.widget').classList.toggle('collapsed');
    content.classList.toggle("collapsed");
    icon.classList.toggle("rotate-180");
  });
});

const perosnlizeBtnAll = document.querySelectorAll("[data-modal-target]");
perosnlizeBtnAll.forEach((modal) => {
  modal.addEventListener("click", () => {
    const modalId = "#" + modal.getAttribute("data-modal-target");
    document.querySelector(modalId).setAttribute("aria-modal", "true");
    document.querySelector("html").classList.add("modal-open");
  });
});

const openFilter = document.querySelectorAll("[data-open-filter]");
openFilter.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("overflow-hidden");
    document
      .querySelector("#off-canvas-menu")
      .classList.toggle("transform-none");
    document.querySelector("[drawer-backdrop]").classList.toggle("hidden");
  });
});

const quickView = document
  .querySelector("[data-quick-view]")
  .addEventListener("click", () => {
    //const modalId = '#' + modal.getAttribute('data-modal-target');
    document.querySelector("#quickview").setAttribute("aria-modal", "true");
    document.querySelector("html").classList.add("modal-open");
  });

const closeQuickView = document.querySelectorAll("[data-close-quick-view]");
closeQuickView.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#quickview").setAttribute("aria-modal", "false");
    document.querySelector("html").classList.remove("modal-open");
  });
});

document.addEventListener("click", function (event) {
  var target = event.target;

  // Check if the clicked element or its parent has the attribute 'aria-expanded'
  var label = target.closest("label[aria-expanded]");
  if (label) {
    var isExpanded = label.getAttribute("aria-expanded");

    // Close all other expanded items
    document
      .querySelectorAll('[aria-expanded="true"]')
      .forEach(function (item) {
        if (item !== label) {
          item.setAttribute("aria-expanded", "false");
        }
      });

    // Toggle the 'aria-expanded' attribute value of the clicked item
    if (isExpanded === "true") {
      label.setAttribute("aria-expanded", "false");
    } else {
      label.setAttribute("aria-expanded", "true");
    }
  }
});

document.querySelector("#search").addEventListener("blur", function (e) {
  // Access the input element using 'this'
  const input = this;

  // Access the input value using 'this.value'
  const inputValue = this.value;

  if (this.value) {
    this.style.width = "200px";
    this.style.borderColor = "#000";
  } else {
    this.style.width = "";
    this.style.borderColor = "";
  }
});

document.querySelectorAll(".price-widget").forEach((widget) => {
  const rangeInput = widget.querySelectorAll(".range-input input"),
    priceInput = widget.querySelectorAll(".price-input input"),
    range = widget.querySelector(".slider .progress");
  let priceGap = 10;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
});
