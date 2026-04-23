document.getElementById('btnAccion').addEventListener('click', function () {

    var nombre = document.getElementById('name').value;
    var email  = document.getElementById('email').value;
    var cell   = document.getElementById('cell').value;
    var city   = document.getElementById('city').value;
    var birth  = document.getElementById('birth').value;

    if (nombre === '' || email === '' || cell === '' || city === '' || birth === '') {
        alert('Por favor completá todos los campos.');
        return;
    }
    if (!email.includes('@')) {
        alert('Correo válido.');
        return;
    }
    document.getElementById('confirmacion').style.display = 'block';
    document.getElementById('confirmacion').textContent = 'Regsitro completado, graciasss ' + nombre + ' :)';
    
});
/* Alex Alcaraz */
