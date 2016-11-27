$(document).ready(function(){

  $(window).scroll(function() {
    if ($(window).scrollTop() > 350) {
      $('nav').addClass('nav-red');
    } else {
      $('nav').removeClass('nav-red');
    }
  });

});