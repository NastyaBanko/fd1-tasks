$(document).ready(function () {
    $('.fa-bars111').on('click', function () {
        $(this).hide();
        $('.fa-times').show();
    });

    $('.fa-times').on('click', function () {
        $(this).hide();
        $('.fa-bars111').show();
    })
});