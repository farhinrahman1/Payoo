// alert()
// Prevent form submission and page reload by using event.preventDefault()
document.getElementById('login-btn').addEventListener('click', function (event) { 
    event.preventDefault();
    // console.log('Login button clicked');
    const accountNumber = document.getElementById('account-number').value;
    // console.log(accountNumber);
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber);
    const convertedPinNumber = parseInt(pinNumber);
    if (accountNumber.length === 11) {
        // console.log('Valid account number');
        if (convertedPinNumber === 1234) {
            // console.log('Login successful')
            //to redirect to another page, here main.html
            window.location.href="./main.html"
        }else { alert('Invalid pin number'); }
    } else {
        alert('Account number must be 11 digits long');
    }


});