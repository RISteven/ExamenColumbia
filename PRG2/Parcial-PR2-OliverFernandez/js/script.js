
document.getElementById("formRegistro").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Datos registrados correctamente");
});

function mostrarMensaje(texto, tipo = "info") {

    const div = document.getElementById("mensaje");

    div.textContent = texto;

}




