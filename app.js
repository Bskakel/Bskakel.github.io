var main = function() {
$('.dropdown-menu').hide();

$('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
});

}

$(document).ready(main);
