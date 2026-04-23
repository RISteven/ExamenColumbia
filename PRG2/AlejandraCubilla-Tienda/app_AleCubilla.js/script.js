document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let nombre = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let Telefono = document.getElementById("Telefono").value;
    let Ciudad = document.getElementById("Ciudad").value;
    let FechaNacimiento = document.getElementById("Fecha de Nacimiento").value;

    let valido = true;

    // limpiar errores
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorApellido").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorTelefono").textContent = "";
    document.getElementById("errorCiudad").textContent = "";
    document.getElementById("errorFechaNacimiento").textContent = "";
    document.getElementById("errorMensaje").textContent = "";

    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "Ingresa tu nombre";
        valido = false;
    }
     if (apellido === "") {
        document.getElementById("errorApellido").textContent = "Ingresa tu nombre";
        valido = false;
    }

    if (email === "") {
        document.getElementById("errorEmail").textContent = "Ingresa tu email";
        valido = false;
    }
     if (Telefono === "") {
        document.getElementById("errorTelefono").textContent = "Ingresa tu numero de telefono";
        valido = false;
    }
       if (Ciudad === "") {
        document.getElementById("errorCiudad").textContent = "Ingresa tu Ciudad";
        valido = false;

    }   if (Telefono === "") {
        document.getElementById("errorFechaNacimiento").textContent = "Ingresa tu fecha de nacimiento";
        valido = false;
    }

    if (valido) {
        alert("Formulario enviado correctamente");
    }
});

/*
Alumna Alejandra Cubilla
Examen Parcial 4to 1ero
Fecha 22/04/2026
*/