head.ready(function() {

    $('body').on('click', function() {
        $('.lang__list').slideUp(200);
    });

    $('.lang').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).find('.lang__list').slideToggle(200);
    });

    $('.lang__list').on('click', function(event) {
        event.stopPropagation();
    });

    // $('.menu-btn').on('click', function(event) {
    //     $(this).toggleClass('is-active');
    //     $('.header__menu').toggleClass('is-visible');
    // });

    var toggleMenu = function() {
        $('.menu-btn').toggleClass('is-active');
        $('.header__menu').toggleClass('is-visible');
        $('body').toggleClass('no-scroll');
        $('.overlay').fadeToggle(200);
    };

    $('.menu-btn').on('click', function(event) {
        event.preventDefault();
        toggleMenu();
    });



});