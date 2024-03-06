Fancybox.bind("[data-fancybox]", {
  Thumbs: {
    showOnStart: false,
  },
});
$(".beforeAfter  .slide").twentytwenty();
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("open");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("open");
});

$(".moreText").click(function (event) {
  $(".shadow").toggleClass("open");
  $(this).closest("section").find(".textBlock").toggleClass("open");
  if ($(this).text() == "Eще") $(this).text("Свернуть");
  else $(this).text("Eще");
});
$(window).scroll(function () {
  var scrollPosition = $(this).scrollTop();

  if (scrollPosition > 250) {
    $(".filerOpenBtn").addClass("scrolled");
    $(".location-select").addClass("scrolled");
  } else {
    $(".filerOpenBtn").removeClass("scrolled");
    $(".location-select").removeClass("scrolled");
  }
});
$(".faq-item").click(function (event) {
  let parentListItem = $(this).closest("li");
  let isPlusOpen = parentListItem.find(".plus").hasClass("open");
  $(".plus").removeClass("open");
  $(".answer").removeClass("open");
  $(".faq-item").removeClass("open");
  if (isPlusOpen) {
    parentListItem.find(".answer").removeClass("open");
    parentListItem.removeClass("open");
  } else {
    parentListItem.addClass("open");
    parentListItem.find(".answer").addClass("open");
    parentListItem.find(".plus").addClass("open");
  }
});

//---------------------SLIDERS------------------------//

$(window).on("load resize", function () {
  if ($(window).width() < 744) {
    $(".homeServices-list").slick({
      slidesToShow: 1,
      prevArrow: $(".homeServices").find(".prev"),
      nextArrow: $(".homeServices").find(".next"),
    });
  }
});

$(".home-review-slider").slick({
  slidesToShow: 4,
  arrows: true,
  prevArrow: $(".home-review").find(".prev"),
  nextArrow: $(".home-review").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
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
  autoplaySpeed: 1000,
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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".gallery_list1").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 1500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".gallery_list2").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 1500,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});
$(".beforeAfter-slider").slick({
  slidesToShow: 1,
  draggable: false,
  swipeToSlide: false,
  swipe: false,
  prevArrow: $(".beforeAfter").find(".prev"),
  nextArrow: $(".beforeAfter").find(".next"),
});
$(".otherServices-list").slick({
  slidesToShow: 3,
  arrows: true,
  prevArrow: $(".otherServices").find(".prev"),
  nextArrow: $(".otherServices").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".location-select").click(function () {
  $(this)
    .closest(".search-location")
    .find(".locationSelect-list")
    .toggleClass("open");
  $(this).find(".arrow").toggleClass("open");
});
$(".locationSelect-item").click(function () {
  $(".locationSelect-item").removeClass("select");
  $(this).addClass("select");
  var selectedLocation = $(this).text();
  $(".location-select .city").text(selectedLocation);
  $(".locationSelect-list").removeClass("open");
  $(".location-select").find(".arrow").removeClass("open");
});
$(".locationSelect-list .close").click(function () {
  $(".locationSelect-list").removeClass("open");
});
$(document).click(function (event) {
  if (
    !$(event.target).closest(".locationSelect-list").length &&
    !$(event.target).closest(".select-wrapper").length
  ) {
    $(".locationSelect-list").removeClass("open");
    $(".location-select").find(".arrow").removeClass("open");
  }
});

setClassBasedOnWidth();

$(window).resize(function () {
  setClassBasedOnWidth();
});

//---------------------FORM---------------------------//

// const validation = new JustValidate("#main-form");

// var x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function (e) {
//       var y, i, k, s, h, sl, yl;
//       s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       sl = s.length;
//       h = this.parentNode.previousSibling;
//       for (i = 0; i < sl; i++) {
//         if (s.options[i].innerHTML == this.innerHTML) {
//           s.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName("same-as-selected");
//           yl = y.length;
//           for (k = 0; k < yl; k++) {
//             y[k].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function (e) {
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }
// function closeAllSelect(elmnt) {
//   var x,
//     y,
//     i,
//     xl,
//     yl,
//     arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i);
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// document.addEventListener("click", closeAllSelect);

// validation
//   .addField("#name", [
//     {
//       rule: "required",
//       errorMessage: "Name is required",
//     },
//     {
//       rule: "minLength",
//       value: 2,
//     },
//   ])
//   .addField("#tel", [
//     {
//       rule: "required",
//       errorMessage: "Phone number is required",
//     },
//     {
//       rule: "minLength",
//       value: 14,
//       errorMessage: "The field must contain a minimum of 10 characters",
//     },
//   ])
//   .addField("#email", [
//     {
//       rule: "required",
//       errorMessage: "Email is required",
//     },
//     {
//       rule: "email",
//       errorMessage: "Email is invalid!",
//     },
//   ]);
