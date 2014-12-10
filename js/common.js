head.ready(function() {

    var body    = $('body'),
        overlay = $('.overlay'),
        menuBtn = $('.menu-btn'),
        menu    = $('.header__menu');

    body.on('click', function() {
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

    $('.menu-btn').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleMenu();
    });

    menu.on('click', function(event) {
        event.stopPropagation();
        $('.lang__list').slideUp(200);
    });

    $('.js-show-popup').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var targetPopup = $('#' + $(this).data('popup'));
        showPopup(targetPopup);
    });

    $('.popup__close').on('click', function(event) {
        event.preventDefault();
        var targetPopup = $(this).parents('.popup');
        hidePopup(targetPopup);
    });

    $('.popup__inner').on('click', function(event) {
        event.stopPropagation();
    });

    $('.popup').on('click', function(event) {
        event.stopPropagation();
        var targetPopup = $(this);
        hidePopup(targetPopup);
    });

    //mask for input bitcoin code
    $('.js-code').mask('0000-0000-0000-0000', {'translation': {0: {pattern: /[A-Za-z0-9]/}}});

    // $('.js-code').on('focusout', function() {
    //     var str = $(this).val();
    //     console.log(str);
    //     function newString(string) {
    //         var newstring = '';
    //         for (var i = 0; i <= string.length-1; i++) {
    //             if (str[i] !== '-') {
    //                 newstring += str[i];
    //             }
    //         }
    //         return newstring;
    //     }
    //     var newstr = newString(str);
    //     console.log(newstr);
    // });

    var toggleMenu = function() {
        menuBtn.toggleClass('is-active');
        menu.toggleClass('is-visible');
        overlay.fadeToggle(200);
        toggleBodyScroll();
    };

    var toggleBodyScroll = function() {
        body.toggleClass('no-scroll');
        if (body.hasClass('no-scroll')) {
            var posTop = -$(document).scrollTop();
            body.css({
                position : 'fixed',
                top      : posTop
            });
        } else {
            var scrollPos = -body.offset().top;
            body.css({
                position : '',
                top      : ''
            });
            $(window).scrollTop(scrollPos);
        }
    };

    var showPopup = function(popup) {
        popup.fadeIn(200);
        toggleBodyScroll();
    };

    var hidePopup = function(popup) {
        popup.fadeOut(200);
        toggleBodyScroll();
    };

    //scroll to target section
    (function() {
        $('.nav li a').on('click', function() {

            if ($(window).width() < 700 ) {
                toggleMenu();
            }

            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }) ();

    //active or inactive submit button in forms
    (function() {

        $('.js-form').each(function() {
            var form   = $(this),
                btn    = form.find('button[type="submit"]'),
                input  = form.find('input:not([type="checkbox"], [type="radio"]), textarea'),
                inputs = [],
                status = []; // [false, false, false, true, ...]

            // check if input has value
            var checkStatus = function(input) {
                if (input.val()) {
                    return true;
                } else {
                    return false;
                }
            };

            // toggle button
            var toggleSubmitBtn = function() {
                if (status.indexOf(false) !== -1 ) {
                    if ( !btn.is(':disabled') ) {
                        btn.attr('disabled', 'disabled');
                    }
                } else {
                    if ( btn.is(':disabled') ) {
                        btn.removeAttr('disabled');
                    }
                }
            };

            // add each input to array and create status array
            input.each(function() {
                inputs.push($(this));
                status.push(checkStatus($(this)));
            });

            toggleSubmitBtn();


            // check if
            $(inputs).each(function() {
                var currentElement = this;
                $(currentElement).on('input', function() {
                    var check = checkStatus($(currentElement));
                    var index = inputs.indexOf(currentElement);
                    status[index] = check;
                    toggleSubmitBtn();
                });
            });
        });

    }) ();




});