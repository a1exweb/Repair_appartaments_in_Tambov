// $(window).scroll(function () {
//     if ($(this).scrollTop() > 40) {
//         $('.fixed').addClass('fixed--active');
//     } else {
//         $('.fixed').removeClass('fixed--active');
//     }
// });

$(document).ready(function() {
	$('.fullpage').fullpage({
        scrollOverflow: true,
        scrollOverflowOptions: {click: false},
        afterRender: function () {
            $('.projects__last').html($('.projects__slides').length);
        },
        afterSlideLoad: function (section, origin, destination) {
            $('.projects__first').html(++destination.index);
        }
    });

    $(document).on('click', '.projects__mini a', changeImg);

    function changeImg(event) {
        event.preventDefault();
        $('.projects__big img').attr('src', $(this).attr('data-src'));
    }
});