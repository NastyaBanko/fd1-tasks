$(document).ready(function () {
    $(window).on('scroll', function () {
        var scr = $(window).scrollTop();
        if (scr > 100) {
            $('.up').show();
        } else {
            $('.up').hide();
        }
    })
});

//scroll up
$('.up').on('click', function () {
    $('body,html').animate({scrollTop: 0}, 800);
})