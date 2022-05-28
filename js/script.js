const hamburger = document.querySelector('.header__hamburger'),
    menu = document.querySelector('.header__nav'),
    closeElem = document.querySelector('div.header__close');


hamburger.addEventListener('click', () => {
    menu.classList.add('header__nav_active');

});

closeElem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
});


//var slider = tns({
//   container: '.clients__slider',
//   items: 5,
//   slideBy: 'page',
//    autoplay: true
//});
var slider = tns({
    container: '.clients__slider',
    "rewind": true,
    mode: 'gallery',
    "swipeAngle": false,
    "items": 1,
    "gutter": 10,
    "swipeAngle": false,
    "speed": 400,
});


jQuery(document).ready(function () {
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                }
            },
            messages: {
                name: {
                    required: "Будь ласка, введіть ваше ім'я",
                    minlength: jQuery.validator.format(" Введіть {0} символів!")
                },
                phone: "Будь ласка, введіть ваш номер телефону",
                email: {
                    required: "Будь ласка, введіть вашу електронну адресу",
                    email: "Неправильно введена електронна адреса",
                },
            },

        });
    }
    validateForms('.prices__wrapper-form form');


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});
new WOW().init();