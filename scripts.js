document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    let valid = true;

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const textarea = document.getElementById('textarea').value.trim();

    if (!nombre) {
        valid = false;
        alert('Por favor, ingrese su nombre.');
    }

    if (!edad || edad < 6 || edad > 100) {
        valid = false;
        alert('Por favor, ingrese una edad válida entre 6 y 100 años.');
    }

    if (!telefono) {
        valid = false;
        alert('Por favor, ingrese su número de teléfono.');
    }

    if (!correo) {
        valid = false;
        alert('Por favor, ingrese su correo electrónico.');
    }

    if (!textarea) {
        valid = false;
        alert('Por favor, escriba su consulta.');
    }

    if (valid) {
        this.submit();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuLinks = document.getElementById('menu-links');

    menuIcon.addEventListener('click', function() {
        menuLinks.classList.toggle('show');
    });
});