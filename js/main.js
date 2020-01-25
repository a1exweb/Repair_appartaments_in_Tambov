$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.fixed').addClass('fixed--active');
    } else {
        $('.fixed').removeClass('fixed--active');
    }
});