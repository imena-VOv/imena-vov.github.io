var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

 $(function () {
var element = $(".zagolovok"), display;
$(window).scroll(function () {
display = $(this).scrollTop() <= 1;
display != element.css('opacity') && element.stop().animate({ 'opacity': display }, 150);
});
});

