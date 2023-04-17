$(document).ready(function () {
  console.log('Doc ready!');

  /* Navbar Collapse */
  $('.header__button').click(function () {
    $('.nav').toggleClass('nav--active');
  });

  /* Newsletter Form Validate and Submit */

  $('#newsletter-form').validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: 'Este campo es obligatorio',
        email: 'Ingresa un email válido',
      },
    },
    submitHandler: function (form) {
      alert('Gracias por subscribirte!');
    },
  });
});
