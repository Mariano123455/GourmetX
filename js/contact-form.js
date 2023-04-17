$(document).ready(function () {
  console.log('Doc ready!');

  /* Contact Form Validate */
  $('#contact-form').validate({
    rules: {
      firstname: {
        required: true,
        minlength: 3,
      },
      lastname: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        number: true,
        digits: true,
      },
    },
    messages: {
      firstname: {
        required: 'Este campo es obligatorio',
        minlength: 'Debe tener almenos 3 caracteres',
      },
      lastname: {
        required: 'Este campo es obligatorio',
        minlength: 'Debe tener almenos 3 caracteres',
      },
      email: {
        required: 'Este campo es obligatorio',
        email: 'Ingresa un email válido',
      },
      phone: {
        required: 'Este campo es obligatorio',
        number: 'Solo se permiten números',
        minlength: 'Debe ser un teléfono válido',
      },
    },
    submitHandler: function (form) {
      let firstName = $('#firstname').val();
      let lastName = $('#lastname').val();
      let email = $('#email').val();
      let phone = $('#phone').val();

      /* Saving Form Data */
      let url = `/html/contact-success.html?nombre=${firstName}&apellido=${lastName}&email=${email}&telefono=${phone}`; 
      window.location.href = url;
    },
  });
});
