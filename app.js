var main = function() {

$('.dropdown-menu').hide();
$('.dropdown-menu2').hide();
$('.dropdown-menu3').hide();

$('.dropdown-toggle').hover(function() {
    $('.dropdown-menu').toggle();
});

$('.cell').hover(function() {
    $('.dropdown-menu').toggle();
});

$('.dropdown-toggle2').hover(function() {
    $('.dropdown-menu2').toggle();
});

$('.cell2').hover(function() {
    $('.dropdown-menu2').toggle();
});

$('.dropdown-toggle3').hover(function() {
    $('.dropdown-menu3').toggle();
});

$('.cell3').hover(function() {
    $('.dropdown-menu3').toggle();
});

}

$(document).ready(main);
