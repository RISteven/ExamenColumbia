function validateForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
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

document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Formulario enviado correctamente.");
        document.getElementById("clientForm").reset();
    }
});

/*
    Autor: Fredy Arca
    Fecha de creación: 22-04-2026
    Descripción: Examen Parcial - PR2
    Universidad Columbia del Paraguay
*/