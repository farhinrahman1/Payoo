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

    if (convertedPinNumber === 1234) {
        // alert('Transaction successful!');
        const sum = convertedCurrentAmount + convertedAmount;
        console.log(sum);
        document.getElementById('current-amount').innerText = sum;
    } else {
        // alert('Invalid pin. Transaction failed.');
    }

 });