/* СКРИПТ ДЛЯ СЛАЙДЕРА */
    $('.slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:$('.left'),
        nextArrow: $('.right')
      });


    /* МАСКА ДЛЯ ВАЛИДАЦИИ */
    $('#forms-task').validate({
        errorClass:"invalid",
        errorElement:"div",
        rules:{
            username:{
                required:true,
                minlength:3,
                maxlength:15
            },
            email:{
                required:true,
                email:true
            }
        },
        messages: {
            username:"Укажите ваше имя",
            email: "Укажите ваш email"
        }
});

/* МАСКА ДЛЯ ТЕЛЕФОНА */
$('.input-tell').mask('+7 (999) 999-99-99');
