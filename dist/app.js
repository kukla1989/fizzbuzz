/* eslint-disable @typescript-eslint/no-unused-vars */
var initialNumberOfFizzBuzzElements = 100;
var fizzbuzz = document.querySelector('.fizzbuzz');
if (fizzbuzz) {
    updateFizzBuzzItems(initialNumberOfFizzBuzzElements);
}
var numberFizzBuzzInput = document.querySelector('.number-fizzbuzz');
if (numberFizzBuzzInput) {
    numberFizzBuzzInput.value = initialNumberOfFizzBuzzElements.toString();
}
function createFizzBuzzValues(limit) {
    var result = [];
    for (var i = 1; i <= limit; i++) {
        var value = i.toString();
        if (i % 3 === 0) {
            value = 'Fizz';
        }
        if (i % 5 === 0) {
            value = 'Buzz';
        }
        if (i % 3 === 0 && i % 5 === 0) {
            value = 'FizzBuzz';
        }
        result.push(value);
    }
    return result;
}
function handleFizzBuzzInput(value) {
    var limit = parseInt(value, 10);
    var errorMessage = document.querySelector('.error-message');
    if (limit < 1) {
        console.log(errorMessage, 'less then 1');
        if (errorMessage) {
            errorMessage.textContent = 'Please enter a number greater than or equal to 1.';
        }
    }
    else {
        if (errorMessage) {
            errorMessage.textContent = '';
        }
        updateFizzBuzzItems(limit);
    }
}
function updateFizzBuzzItems(limit) {
    var fizzBuzzDIV = document.querySelector('.fizzbuzz');
    if (fizzBuzzDIV) {
        fizzBuzzDIV.innerHTML = '';
        var fizzBuzzValues = createFizzBuzzValues(limit);
        fizzBuzzValues.forEach(function (value) {
            var newFizzBuzzItemDIV = document.createElement('div');
            newFizzBuzzItemDIV.classList.add('fizzbuzz_item');
            newFizzBuzzItemDIV.textContent = value;
            fizzBuzzDIV.appendChild(newFizzBuzzItemDIV);
        });
    }
}
