document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputPinCashOut = document.getElementById('input-pin-cash-out').value;

    if(inputPinCashOut === '1234') {
        const balance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(inputCashOut);

        const newBalance = balanceNumber - cashOutNumber;


        document.getElementById('account-balance').innerText = newBalance;


    }
    else{
        alert('failed to cashout');
    }


})