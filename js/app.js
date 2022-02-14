function getPin() {
    const pin   = Math.round(Math.random() * 10000);
    const pinString  = pin + '';

    if (pinString.length  == 4) {
        return pin;
    } else {
        // console.log('rfhur');
        return getPin();
    }
}


function genaratePin() {
    const pin  = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput  = document.getElementById('typed-numbers');
    
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber      = previousNumber + number;
        calcInput.value      = newNumber;
    }
   
});

function verifyPin() {
    const pinNumber     = document.getElementById('display-pin').value;
    const inputNumber   = document.getElementById('typed-numbers').value;

    const pinsuccess  = document.getElementById("notify-success");
    const pinError  = document.getElementById("notify-error");

    if (pinNumber == inputNumber) {
        pinsuccess.style.display = 'block'
        pinError.style.display = 'none';
    } else {
        pinError.style.display = 'block';
        pinsuccess.style.display = 'none'
    }
}