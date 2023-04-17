$(document).ready(function () {
  console.log('Doc ready!');

  let parameters = new URLSearchParams(location.search);
  let firstName = parameters.get('nombre');
  let lastName = parameters.get('apellido');
  let email = parameters.get('email');
  let phone = parameters.get('telefono');

  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'POST',
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
    },
    success: function (result) {
      console.log(result);
      $('#htmlanswer').html(
        ` <p class="api-rest__text">Nombre: ${result.first_name}</p>
            <p class="api-rest__text">Apellido: ${result.last_name}</p>
            <p class="api-rest__text">Email: ${result.email}</p>
            <p class="api-rest__text">Teléfono: ${result.phone}</p>
            <p class="api-rest__text">ID: ${result.id}</p>
            <p class="api-rest__text">Fecha de creación: ${result.createdAt}</p>`
      );
    },
    error: function (xhr, status, error) {
      alert(`Ha ocurrido un error: ${error}`);
    },
  });
});
