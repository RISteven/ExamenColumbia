document.getElementById("formRegistroCliente").addEventListener("submit", function(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
       if (nombre === "" || apellido === "" || email === "") {
        alert("Complete los campos obligatorios");
        return;
        }
    alert("Se ha registrado correctamente");
    this.reset();
});