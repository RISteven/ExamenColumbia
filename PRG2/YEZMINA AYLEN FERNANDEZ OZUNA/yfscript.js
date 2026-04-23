document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;
    const fechaNac = document.getElementById("fechaNac").value;

    if (telefono.trim() === "") {
        alert("El teléfono no puede estar vacío.");
        return;
    }

    alert(
        "Datos guardados correctamente"
    );
});