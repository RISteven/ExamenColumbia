
const form = document.getElementById("registro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;
    const fecha = document.getElementById("fecha").value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Correo:", correo);
    console.log("Teléfono:", telefono);
    console.log("Ciudad:", ciudad);
    console.log("Fecha de nacimiento:", fecha);

    alert("Formulario enviado");
});
