// alert('Cash Out section clicked')
document.getElementById('cash-out-btn').addEventListener('click', function (event) { 
    event.preventDefault();
    const pinDocument = document.getElementById('cashOut-pin-number').value;
    const convertedPin = parseInt(pinDocument);
    const amountDocument = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amountDocument);
    const currentAmount = document.getElementById('current-amount').innerText;
    const convertedCurrentAmount = parseFloat(currentAmount);
    if (convertedPin === 1234) {
        sum = convertedCurrentAmount - convertedAmount;
        // console.log(sum);
        document.getElementById('current-amount').innerText = sum;
        
    } else {
        alert('Your pin is incorrect');
    }
});