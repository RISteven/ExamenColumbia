document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const messageDiv = document.getElementById('message');

    // Validate that email and phone are not empty
    if (correo === '' || telefono === '') {
        messageDiv.textContent = 'Error: El correo y el teléfono no pueden estar vacíos.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Confirmado el registro';
        messageDiv.style.color = 'green';
        // Optionally reset the form
        this.reset();
    }
});

/*Paola Escurra*/
