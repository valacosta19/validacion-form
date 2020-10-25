var form = document.querySelector('form');

form.onsubmit = function(form) {
    var nombre = document.getElementById('user');
    var password = document.getElementById('pass');
    var regex = /@/
    
    if (nombre.value === '' || password.value === '') {
        form.preventDefault();
        alert('Completa los campos');
    } else if (!(regex.test(nombre.value))){
        form.preventDefault();
        alert('El usuario debe contener un @');
    } else {
        console.log('Valida')
        return true
    }
}