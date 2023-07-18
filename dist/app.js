/* eslint-disable @typescript-eslint/no-unused-vars */
let initialNumberOfFizzBuzzElements = 100;
let fizzbuzz = document.querySelector('.fizzbuzz');
if (fizzbuzz) {
    updateFizzBuzzItems(initialNumberOfFizzBuzzElements);
}

let numberFizzBuzzInput = document.querySelector('.amount-fizzbuzz');
if (numberFizzBuzzInput) {
    numberFizzBuzzInput.value = initialNumberOfFizzBuzzElements.toString();
}

function isFizz(number) {
    return number % 3 === 0;
}

function isBuzz(number) {
    return number % 5 === 0;
}

function createFizzBuzzValue(number) {
    if (isFizz(number) && isBuzz(number)) {
        return 'FizzBuzz';
    }

    if (isFizz(number)) {
        return 'Fizz';
    }

    if (isBuzz(number)) {
        return 'Buzz';
    }

    return number.toString();
}

function createFizzBuzzValues(limit) {
    let result = [];
    for (let index = 1; index <= limit; index++) {
        result.push(createFizzBuzzValue(index));
    }
    return result;
}

function handleFizzBuzzInput(value) {
    let limit = parseInt(value, 10);
    let errorMessage = document.querySelector('.error-message');
    if (limit < 1 && errorMessage) {
        errorMessage.textContent = 'Please enter a number greater than or equal to 1.';
    }
    else if (errorMessage) {
        errorMessage.textContent = '';
        updateFizzBuzzItems(limit);
    }
}

function updateFizzBuzzItems(limit) {
    let fizzBuzzDIV = document.querySelector('.fizzbuzz');
    if (fizzBuzzDIV) {
        fizzBuzzDIV.innerHTML = '';
        let fizzBuzzValues = createFizzBuzzValues(limit);
        fizzBuzzValues.forEach(function (value) {
            let newFizzBuzzItemDIV = document.createElement('div');
            newFizzBuzzItemDIV.classList.add('fizzbuzz_item');
            newFizzBuzzItemDIV.textContent = value;
            fizzBuzzDIV.appendChild(newFizzBuzzItemDIV);
        });
    }
}
