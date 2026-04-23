function validateForm() {
  var email = document.getElementById("correo").value;
  var phone = document.getElementById("telefono").value;
    if (!email.includes("@")) {
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      return false;
    }
    if (phone.length < 10) {
      alert("El número de teléfono debe tener al menos 10 caracteres.");
      return false;
    }
      return true;
}

document.getElementById("guardar").addEventListener("click", function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Formulario enviado correctamente.");
    document.getElementById("clientForm").reset();
  }
});
