



document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault(); //to  prevent reloading the page when click submit button.

    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber)
})