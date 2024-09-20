document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-amount').value;
    const pinInput = document.getElementById('input-pin').value;

    if (pinInput === '1234') {

    
        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        
        document.getElementById('account-balance').innerText = newBalance;


    }
    else {
        alert('failed, try again !');
    }
})