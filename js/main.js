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
        menu: '.menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        afterRender: function () {
            $('.projects__last').html($('.projects__slides').length);
        },
        afterSlideLoad: function (section, origin, destination) {
            $('.projects__first').html(++destination.index);
        }
    });

    $(document).on('click', '.fixed__hamburger', openMenu);
    $(document).on('click', '.main-menu__close', closeMenu);
    $(document).on('click', '.projects__mini a', changeImg);
    $(document).on('input', '.calc', changeInput);
    $(document).on('click', '.scroll-down', function () {
        fullpage_api.moveSectionDown();
    });

    function openMenu() {
        $('.main-menu').addClass('main-menu--active');
    }

    function closeMenu() {
        $('.main-menu').removeClass('main-menu--active');
    }

    $(window).on('click', function (event) {
        if (event.target == $('.main-menu--active')[0]) {
            $('.main-menu').removeClass('main-menu--active');
        }
    })

    function changeImg(event) {
        event.preventDefault();
        $('.projects__big img').attr('src', $(this).attr('data-src'));
    }
    let price = 16000;
    function changeInput(event) {
        event.preventDefault();
        $(this).find('.calc__range output').val($(this).find('.calc__range input').val());
    }

    $('.calc__button').on('click', function (event) {
        event.preventDefault();
        $('.calc').find('.calc__result span').html($('.calc').find('.calc__range input').val()*price);
    });

    let modalOverlay = $('.modal-overlay');
    $('[data-modal="button-call"]').on('click', function () {
        modalOverlay.addClass('modal-overlay--active');
        if ($('.main-menu--active')[0]) {
            closeMenu();
        }
    });

    $('#modal-close').on('click', function () {
        modalOverlay.removeClass('modal-overlay--active');
    })

    $(window).on('click', function (event) {
        if (event.target == modalOverlay[0]) {
            modalOverlay.removeClass('modal-overlay--active');
        }
    })
});