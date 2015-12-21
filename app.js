var main = function() {

$('.dropdown-menu').hide();
$('.dropdown-menu2').hide();
$('.dropdown-menu3').hide();

$('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
});

$('.dropdown-toggle2').click(function() {
    $('.dropdown-menu2').toggle();
});

$('.dropdown-toggle3').click(function() {
    $('.dropdown-menu3').toggle();
});

}

$(document).ready(main);
