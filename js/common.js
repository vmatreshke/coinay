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

});