document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumberCashOut = getInputFieldValueById('input-pin-cash-out')
    // console.log(cashOut, pinNumberCashOut)
    if (pinNumberCashOut === 1234) {
        const balance = getTextFieldById('account-balance')
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('no money for you')
    }

})