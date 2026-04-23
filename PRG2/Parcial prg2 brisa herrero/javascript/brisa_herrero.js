const form = document.getElementById("registros");

form.addEventListener("submit", function(event) {
event.preventDefault();

const nombre = document.getElementById("nombre").value;
const correo = document.getElementById("correo").value;
const telefono = document.getElementById("telefono").value;
const ciudad = document.getElementById("ciudad").value;
const fecha = document.getElementById("fecha").value;

console.log("nombre", nombre);
console.log("correo electronico", correo);
console.log("telefono", telefono);
console.log("ciudad", ciudad);
console.log("fecha de nacimiento", fecha);

alert("formulario enviado con exito");


});


