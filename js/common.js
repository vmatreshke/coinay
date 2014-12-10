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

    $('.js-wallet').on('blur', function() {
        var wallet = $(this).val();
        console.log(wallet);
        $.get('http://blockexplorer.com/q/checkaddress/' + wallet, function(data) {
            alert('xxx == ' + data);
            console.log(data);
        });
    });

    // custom select
    $('.js-select').each(function() {
        var select         = $(this),
            wrapper        = select.parent(),
            input           = select.siblings('input');

        select.on('change', function() {
            selectedOption = select.find('option:selected');
            input.val(selectedOption.text());
            input.trigger('change');
        });

        select.on('focus', function() {
            input.addClass('is-active');
        });

        select.on('focusout', function() {
            input.removeClass('is-active');
        });

    });

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
                select = form.find('.select'),
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
                if (select.length !== 0) {
                    $(currentElement).on('change', function() {
                        var check = checkStatus($(currentElement));
                        var index = inputs.indexOf(currentElement);
                        status[index] = check;
                        toggleSubmitBtn();
                    });
                }
                // $(currentElement).on('blur', function(){
                //     if (!checkStatus($(currentElement))) {
                //         showInputError($(this));
                //     }
                // });
                // $(currentElement).on('focus', function(){
                //     hideInputError($(this));
                // });
            });
        });


        // var showInputError = function(input) {
        //     var wrapper = input.parent(),
        //         message = wrapper.find('.form__error');
        //         wrapper.addClass('is-error');
        //         message.fadeIn(300);
        //         setTimeout(function(){
        //             message.fadeOut(200);
        //         }, 5000);
        // };
        // var hideInputError = function(input) {
        //     var wrapper = input.parent(),
        //         message = wrapper.find('.form__error');
        //         wrapper.removeClass('is-error');
        //         message.fadeOut(300);
        // };

    }) ();

});