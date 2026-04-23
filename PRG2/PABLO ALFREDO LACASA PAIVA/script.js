document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formCliente");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");

        let valido = true;

        // limpiar clases
        [nombre, apellido, correo, telefono].forEach(campo => {
            campo.classList.remove("error", "ok");
        });

        
        if (nombre.value.trim() === "") {
            nombre.classList.add("error");
            valido = false;
        } else {
            nombre.classList.add("ok");
        }

        
        if (apellido.value.trim() === "") {
            apellido.classList.add("error");
            valido = false;
        } else {
            apellido.classList.add("ok");
        }

        // validar correo
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(correo.value)) {
            correo.classList.add("error");
            valido = false;
        } else {
            correo.classList.add("ok");
        }

        // validar telefono
        if (telefono.value.trim() === "") {
            telefono.classList.add("error");
            valido = false;
        } else {
            telefono.classList.add("ok");
        }

        // resultado
        if (!valido) {
            alert("⚠️ Complete correctamente los campos obligatorios");
            return;
        }

        alert("✅ Registro exitoso");
        form.reset();
    });

});