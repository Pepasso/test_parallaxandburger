$(document).ready(function () {
  $('.parallax__list>li').addClass('layer');
  $('.wrapper').addClass('active');
  var scene = $('.parallax__list').get(0);
  var parallaxInstance = new Parallax(scene);
});