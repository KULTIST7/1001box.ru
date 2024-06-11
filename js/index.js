$(document).ready(() => {
    $('.call-request-btn').on('click', () => {
        $('.call-form').addClass('call-open');
        $('body').addClass('body-noscroll');
    });

    $('.call-form .call__close-button').on('click', () => {
        $('.call-form').removeClass('call-open');
        $('body').removeClass('body-noscroll');
    });

    $('.call-form .call__space').on('click', () => {
        $('.call-form').removeClass('call-open');
        $('body').removeClass('body-noscroll');
    });

    $('.call-success .call__close-button').on('click', () => {
        $('.call-success').removeClass('call-open');
        $('body').removeClass('body-noscroll');
    });

    $('.call-success .call__space').on('click', () => {
        $('.call-success').removeClass('call-open');
        $('body').removeClass('body-noscroll');
    });

    $('#call-request').on('click', () => {
        $('.call-form').removeClass('call-open');
        $('.call-success').addClass('call-open');
    });


     //блокировка формы
    document.querySelector('.call-form form').addEventListener('submit', function(event) {
        event.preventDefault(); 
    });

    $('input[type=tel]').inputmask({
        mask: '+7 (*{1}99) 999-99-99',
        placeholder: "+7 (___) ___-__-__",
        definitions: {
            '*': {
                validator: "[0-6,9]"
            }
        }
    });
});