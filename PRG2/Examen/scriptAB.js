const formulario = document.getElementById('formularioAB');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let esValido = true;
    let mensajeError = "";

    if (!regexCorreo.test(correo.value)) {
        mensajeError += "El formato del correo es incorrecto.\n";
        esValido = false;
    }

    if (telefono.value.trim() === "") {
        mensajeError += "El campo de teléfono no puede estar vacío.\n";
        esValido = false;
    }

    if (esValido) {
        alert("Registro confirmado exitosamente.");
        formulario.reset();
    } else {
        alert(mensajeError);
    }
});