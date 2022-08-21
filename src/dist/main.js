// scroll reveral js
const sr = ScrollReveal({
  origin: "top",
  duration: 1500,
  distance: "20px",
  reset: false,
});

sr.reveal(`.anotherProject, #project, #contact, .certificateHeading, #home`);
sr.reveal(`.certificate1, .certificate2, .certificate3`, { interval: 150 });
sr.reveal(`.certificate4, .certificate5, .certificate6`, { interval: 250 });
sr.reveal(`.about-text, .redesign-2`, { origin: `right` });
sr.reveal(`.about-img, .redesign-1`, { origin: `left` });
sr.reveal(`.redesign-3`, { origin: `bottom` });

$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});

// swiper js
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});