Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".beforeAfter .card .slide").twentytwenty();
$(".faq-item").click(function (event) {
  $(this).toggleClass("open");
});
// $(window).scroll(function () {
//   let header = $(".header");
//   let scrollPosition = $(window).scrollTop();
//   if (scrollPosition > 100) {
//     header.addClass("header-scroll");
//   } else {
//     header.removeClass("header-scroll");
//   }
// });

// const forms = document.querySelectorAll("#main-form form");
// if (forms.length) {
//   forms.forEach((form) => {
//     form.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const formData = new FormData(form);
//       const res = await fetch(form.attributes.action.value, {
//         method: form.attributes.method.value,
//         body: formData,
//       }).then((res) => res.json());
//     });
//   });
// }
if ($(window).width() <= 768) {
  $(".services-item:gt(3)").hide();

  $("#showMoreButton").click(function () {
    $(".services-item:gt(3)").toggle();
    let buttonText =
      $(this).closest(".more").find(".title_16").text() === "Load more"
        ? " Hide"
        : "Load more";
    $(this).closest(".more").find(".title_16").text(buttonText);
  });
}

//-------------------------_SLIDERS_---------------------------//

// $(".services-slider").slick({
//   slidesToShow: 4,
//   prevArrow: $(".other-servise").find(".prev"),
//   nextArrow: $(".other-servise").find(".next"),
//   dots: true,
//   responsive: [
//     {
//       breakpoint: 1100,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 500,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });
$(".issues-slider").slick({
  slidesToShow: 3,
  prevArrow: $(".issues").find(".prev"),
  nextArrow: $(".issues").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".brands-slider").slick({
  slidesToShow: 7,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
