$(document).ready(function() {
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 5000);
});
