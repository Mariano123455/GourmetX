/* Export to PDF */
function generatePDF() {
  if ($('#complaint-form').valid()) {
    let firstname = $('#firstname').val();
    let lastname = $('#lastname').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let date = $('#date').val();
    let billnumber = $('#billnumber').val();
    let product = $('#product').val();
    let price = $('#price').val();
    let problem = $('#problem').val();

    const doc = new jsPDF();

    doc.text(20, 20, 'Formulario de Reclamo');
    doc.text(20, 30, `Nombre: ${firstname}`);
    doc.text(20, 40, `Apellido: ${lastname}`);
    doc.text(20, 50, `Email: ${email}`);
    doc.text(20, 60, `Teléfono: ${phone}`);
    doc.text(20, 70, `Fecha de Compra: ${date}`);
    doc.text(20, 80, `Numero de Factura: ${billnumber}`);
    doc.text(20, 90, `Producto: ${product}`);
    doc.text(20, 100, `Precio: ${price}`);
    doc.text(20, 110, `Descripción del Problema: ${problem}`);

    doc.save('formulario-reclamo.pdf');
  } else {
    alert('Antes de Exportar a PDF complete todos los campos');
  }
}
