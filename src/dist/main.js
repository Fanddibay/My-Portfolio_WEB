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

// loader
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// scroll reveral js
const sr = ScrollReveal({
  origin: "top",
  duration: 1500,
  distance: "20px",
  delay: 200,
  reset: true,
});

sr.reveal(`.anotherProject, #project, #contact, .certificateHeading`);
sr.reveal(`.certificate1, .certificate2, .certificate3`, { interval: 100 });
sr.reveal(`.certificate4, .certificate5, .certificate6`, { interval: 150 });
sr.reveal(`.about-text, .redesign-2`, { origin: `right` });
sr.reveal(`.about-img, .redesign-1`, { origin: `left` });
sr.reveal(`.redesign-3`, { origin: `bottom` });
