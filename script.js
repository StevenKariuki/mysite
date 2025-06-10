$(document).ready(function () {
  // Typed.js instances
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed2 = new Typed(".typing-2", {
    strings: ["a Developer", "a Designer", "a Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed3 = new Typed(".typing-3", {
    strings: ["Thanks for visiting!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel init
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // Toggle menu for small screens
  $(".menu-btn").click(function () {
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Preloader fade out
  $(window).on("load", function () {
    $("#preloader").fadeOut();
  });
});
