const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;
    const fecha = document.getElementById("fecha_nac").value;

    console.log("Nombre y Apellido:", nombre);
    console.log("Correo:", correo);
    console.log("Teléfono:", telefono);
    console.log("Ciudad:", ciudad);
    console.log("Fecha de nacimiento:", fecha);

    alert("Formulario enviado correctamente");
});