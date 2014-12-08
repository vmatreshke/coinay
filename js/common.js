head.ready(function() {

    $('body').on('click', function() {
        $('.lang__list').slideUp(200);
        $('.popup').fadeOut(200);
    });

    $('.lang').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).find('.lang__list').slideToggle(200);
    });

    $('.lang__list').on('click', function(event) {
        event.stopPropagation();
    });

    $('.menu-btn').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleMenu();
    });

    $('.js-show-popup').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var popup = $('#' + $(this).data('popup'));
        popup.fadeIn(200);
    });

    $('.popup__close').on('click', function(event) {
        event.preventDefault();
        var popup = $(this).parents('.popup');
        popup.fadeOut(200);
    });

    $('.popup__inner').on('click', function(event) {
        event.stopPropagation();
    });

    $('.popup').on('click', function(event) {
        $(this).fadeOut(200);
    });



    // functions

    var toggleMenu = function() {
        $('.menu-btn').toggleClass('is-active');
        $('.header__menu').toggleClass('is-visible');
        $('body').toggleClass('no-scroll');
        toggleOverlay();
    };

    var toggleOverlay = function() {
        var overlay = $('.overlay');
        if ( !overlay.is(':visible') ) {
            overlay.fadeIn(200);
        } else {
            overlay.fadeOut(200);
        }
    };

    var toggleBodyScroll = function () {
        var body        = $('body');
        var targetClass = 'no-scroll';
        if (body.hasClass(targetClass)) {
            body.removeClass(targetClass);
        } else {
            body.addClass(targetClass);
        }
    };

});