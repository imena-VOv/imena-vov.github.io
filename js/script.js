var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

 $(function () {
var element = $("#hidden_block"), display;
$(window).scroll(function () {
display = $(this).scrollTop() <= 1;
display != element.css('opacity') && element.stop().animate({ 'opacity': display }, 40);
});
});

$(document).ready(function(){
    $(this).scrollTop(0);
});