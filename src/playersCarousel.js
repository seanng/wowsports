$(document).ready(function(){

  $("#players-content").owlCarousel({
    items: ( ($(window).width() < 767) ? 1 : 3 ),
    autoPlay: true,
    loop: true,
    autoplayHoverPause: true,
    autoPlaySpeed: 3000
  });



});