$(document).ready(function () {

    $('.questionz__plus').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300)
    });
});