// alert("hi")
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    // alert('You have added ' + convertedAmount + ' to your account.');
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber);
    const currentAmount = document.getElementById('current-amount').innerText;
    const convertedCurrentAmount = parseFloat(currentAmount);

    if (convertedAmount && pinNumber) {
        if (convertedPinNumber === 1234) {
            const sum = convertedCurrentAmount + convertedAmount;
            document.getElementById('current-amount').innerText = sum;
            alert('Transaction successful! You have added $' + convertedAmount + ' to your account.');
        } else {
            alert('Invalid pin. Transaction failed.');
        }
        
    } else {
        alert('Please enter an amount.');
    }

 });