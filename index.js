// Slider for section 1

var mainSliderCounter = 1;
setInterval(function () {
  document.getElementById("radio" + mainSliderCounter).checked = true;
  mainSliderCounter++;
  if (mainSliderCounter > 3) {
    mainSliderCounter = 1;
  }
}, 5000);

// PHONES LAPTOP AND COMPUTER MOVER ---------------------

var indexValue = 1;
showImg(indexValue);
function side_slide(e) {
  showImg((indexValue += e));
}

function showImg(e) {
  var i;
  const img = document.querySelectorAll(".section3 .body .image-cont .img");
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  // all image opacity set to 0
  for (i = 0; i < img.length; i++) {
    img[i].style.opacity = 0;
  }

  // required image opacity set to 1
  img[indexValue - 1].style.opacity = 1;
}

var indexValue2 = 1;
showImg2(indexValue2);
function side_slide2(e) {
  showImg2((indexValue2 += e));
}

function showImg2(e) {
  var i;
  const img2 = document.querySelectorAll(".section4 .body .image-cont .img");
  if (e > img2.length) {
    indexValue2 = 1;
  }
  if (e < 1) {
    indexValue2 = img2.length;
  }
  // all image opacity set to 0
  for (i = 0; i < img2.length; i++) {
    img2[i].style.opacity = 0;
  }

  // required image opacity set to 1
  img2[indexValue2 - 1].style.opacity = 1;
}

var indexValue3 = 1;
showImg3(indexValue3);
function side_slide3(e) {
  showImg3((indexValue3 += e));
}

function showImg3(e) {
  var i;
  const img3 = document.querySelectorAll(".section5 .body .image-cont .img");
  if (e > img3.length) {
    indexValue3 = 1;
  }
  if (e < 1) {
    indexValue3 = img3.length;
  }
  // all image opacity set to 0
  for (i = 0; i < img3.length; i++) {
    img3[i].style.opacity = 0;
  }

  // required image opacity set to 1
  img3[indexValue3 - 1].style.opacity = 1;
}

//   all ------------------ TESTIMONIALS SLIDER_______________-------------//
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // bubbles -----------------

  setInterval(function () {
    var size = randomValue(sArray);
    $(".bubbles").append(
      '<div class="individual-bubble" style="left: ' +
        randomValue(bArray) +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px;"></div>'
    );
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});
