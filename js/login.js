



document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault(); //to  prevent reloading the page when click submit button.

    const phoneNumber = document.getElementById('phone-number').value;
    const passwordPin = document.getElementById('password-pin').value;

    // this is temporary, there is no justification to check password in this method.
    if (phoneNumber === '5' && passwordPin === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else {
        alert('wrong pin or phone number.')
    }
    

})