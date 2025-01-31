document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validación simple de inicio de sesión
    if (username === 'admin' && password === '1234') {
        alert('Inicio de sesión exitoso');
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});
