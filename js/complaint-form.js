$(document).ready(function () {
  console.log('Doc ready!');

  /* Complaint Form Validate */
  $('#complaint-form').validate({
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
      date: {
        required: true,
      },
      billnumber: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      product: {
        required: true,
      },
      price: {
        required: true,
        minlength: 2,
        number: true,
        digits: true,
      },
      problem: {
        required: true,
        maxlength: 100,
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
      date: {
        required: 'Este campo es obligatorio',
      },
      billnumber: {
        required: 'Este campo es obligatorio',
        minlength: 'Debe contener exactamente 10 digitos',
        maxlength: 'Debe contener exactamente 10 digitos',
      },
      product: {
        required: 'Este campo es obligatorio',
      },
      price: {
        required: 'Este campo es obligatorio',
        minlength: 'Ingrese un precio válido',
      },
      problem: {
        required: 'Este campo es obligatorio',
        maxlength: 'Por favor sea más breve',
      },
    },
    submitHandler: function (form) {
      window.location.href = '/html/complaint-success.html';
    },
  });

  var current = 1;

  /* Complaint Form Script */

  $(document).on('click', '.btn-next-1', function (event) {
    if (
      $('#firstname').valid() &&
      $('#lastname').valid() &&
      $('#email').valid() &&
      $('#phone').valid()
    ) {
      $('.slide-page').css('marginLeft', '-25%');
      $('.progress-bar__text')
        .eq(current - 1)
        .addClass('progress-bar__text--active');
      $('.progress-bar__number')
        .eq(current - 1)
        .addClass('progress-bar__number--active');
      $('.progress-bar__bullet')
        .eq(current - 1)
        .addClass('progress-bar__bullet--active');
      $('.progress-bar__check')
        .eq(current - 1)
        .addClass('fa-solid--active');
      current++;
    }
  });

  $(document).on('click', '.btn-prev-1', function (event) {
    $('.slide-page').css('marginLeft', '0%');
    $('.progress-bar__text')
      .eq(current - 2)
      .removeClass('progress-bar__text--active');
    $('.progress-bar__number')
      .eq(current - 2)
      .removeClass('progress-bar__number--active');
    $('.progress-bar__bullet')
      .eq(current - 2)
      .removeClass('progress-bar__bullet--active');
    $('.progress-bar__check')
      .eq(current - 2)
      .removeClass('fa-solid--active');
    current--;
  });

  $(document).on('click', '.btn-next-2', function (event) {
    if (
      $('#date').valid() &&
      $('#billnumber').valid() &&
      $('#product').valid() &&
      $('#price').valid()
    ) {
      $('.slide-page').css('marginLeft', '-50%');
      $('.progress-bar__text')
        .eq(current - 1)
        .addClass('progress-bar__text--active');
      $('.progress-bar__number')
        .eq(current - 1)
        .addClass('progress-bar__number--active');
      $('.progress-bar__bullet')
        .eq(current - 1)
        .addClass('progress-bar__bullet--active');
      $('.progress-bar__check')
        .eq(current - 1)
        .addClass('fa-solid--active');
      current++;
    }
  });

  $(document).on('click', '.btn-prev-2', function (event) {
    $('.slide-page').css('marginLeft', '-25%');
    $('.progress-bar__text')
      .eq(current - 2)
      .removeClass('progress-bar__text--active');
    $('.progress-bar__number')
      .eq(current - 2)
      .removeClass('progress-bar__number--active');
    $('.progress-bar__bullet')
      .eq(current - 2)
      .removeClass('progress-bar__bullet--active');
    $('.progress-bar__check')
      .eq(current - 2)
      .removeClass('fa-solid--active');
    current--;
  });

  $(document).on('click', '.btn-next-3', function (event) {
    if ($('#problem').valid()) {
      $('.slide-page').css('marginLeft', '-75%');
      $('.progress-bar__text')
        .eq(current - 1)
        .addClass('progress-bar__text--active');
      $('.progress-bar__number')
        .eq(current - 1)
        .addClass('progress-bar__number--active');
      $('.progress-bar__bullet')
        .eq(current - 1)
        .addClass('progress-bar__bullet--active');
      $('.progress-bar__check')
        .eq(current - 1)
        .addClass('fa-solid--active');
      current++;
    }
  });

  $(document).on('click', '.btn-prev-3', function (event) {
    $('.slide-page').css('marginLeft', '-50%');
    $('.progress-bar__text')
      .eq(current - 2)
      .removeClass('progress-bar__text--active');
    $('.progress-bar__number')
      .eq(current - 2)
      .removeClass('progress-bar__number--active');
    $('.progress-bar__bullet')
      .eq(current - 2)
      .removeClass('progress-bar__bullet--active');
    $('.progress-bar__check')
      .eq(current - 2)
      .removeClass('fa-solid--active');
    current--;
  });
});
