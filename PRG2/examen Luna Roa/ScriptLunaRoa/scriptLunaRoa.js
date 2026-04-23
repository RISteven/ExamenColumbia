function mostrarMensaje(texto, tipo) {
    let mensajeDiv = document.getElementById("mensajeConfirmacion");
    mensajeDiv.textContent = texto;
    mensajeDiv.className = "mensaje " + tipo;
}

document.getElementById("formregistro").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let ciudad = document.getElementById("ciudad").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();

    if (nombre === "" || email === "" || telefono === "" || ciudad === "" || fechaNacimiento === "") {
        mostrarMensaje("Por favor complete todos los campos.", "error");
        return;
    }

    if (email.includes("@") === false || email.includes(".") === false) {
        mostrarMensaje("El correo no tiene un formato válido.", "error");
        return;
    }

    if (telefono === "") {
        mostrarMensaje("El teléfono no debe estar vacío.", "error");
        return;
    }

    mostrarMensaje("Registro guardado correctamente.", "ok");
});