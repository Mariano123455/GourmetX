$(document).ready(function () {
  console.log('Doc ready!');

  /* Summar (No Editable) */
  $(document).on('click', '.btn-next-3', function (event) {
    event.preventDefault();

    let firstname = $('#firstname').val();
    let lastname = $('#lastname').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let date = $('#date').val();
    let billnumber = $('#billnumber').val();
    let product = $('#product').val();
    let price = $('#price').val();
    let problem = $('#problem').val();

    if ($('#summary p').length === 0) {
      $('<p class="summaryText">').text(`Nombre: ${firstname}`).appendTo('#summary');
      $('<p class="summaryText">').text(`Apellido: ${lastname}`).appendTo('#summary');
      $('<p class="summaryText">').text(`Email: ${email}`).appendTo('#summary');
      $('<p class="summaryText">').text(`Teléfono: ${phone}`).appendTo('#summary');
      $('<p class="summaryText">').text(`Fecha de Compra: ${date}`).appendTo('#summary');
      $('<p class="summaryText">').text(`Numero de Factura: ${billnumber}`).appendTo('#summary');
      $('<p class="summaryText">').text(`Producto: ${product}`).appendTo('#summary');
      $('<p class="summaryText">').text(`Precio: ${price}`).appendTo('#summary');
      $('<p class="summaryText">')
        .text(`Descripcion del Problema: ${problem}`)
        .appendTo('#summary');
    }
  });

  /* Remove Summary */
  $('.btn-prev-3').click(function () {
    $('.summaryText').remove();
  });
});
