function guardarDatos(nombre, correo, telefono, ciudad, fecha) {
    // Simulación
    return true;
}

function mostrarMensaje(texto, tipo = "ok") {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.style.color = (tipo === "error") ? "red" : "green";
}

document.getElementById("FormRegistro").addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("CorreoElectronico").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let ciudad = document.getElementById("ciudad").value.trim();
    let fecha = document.getElementById("fecha").value;

    if (telefono.length === 0) {
        mostrarMensaje("El teléfono es obligatorio", "error");
        return;
    }

    // Validar formato de correo
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        mostrarMensaje("El correo no tiene un formato válido", "error");
        return;
    }

    let ok = guardarDatos(nombre, correo, telefono, ciudad, fecha);

    if (ok) {
        mostrarMensaje("Registro exitoso");
        document.getElementById("FormRegistro").reset();
    } else {
        mostrarMensaje("Error al guardar", "error");
    }
});