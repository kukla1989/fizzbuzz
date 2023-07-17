/* eslint-disable @typescript-eslint/no-unused-vars */

const initialNumberOfFizzBuzzElements = 100;
const fizzbuzz = document.querySelector('.fizzbuzz');

if (fizzbuzz) {
  updateFizzBuzzItems(initialNumberOfFizzBuzzElements);
}

const numberFizzBuzzInput = document.querySelector('.number-fizzbuzz') as HTMLInputElement;
if (numberFizzBuzzInput) {
  numberFizzBuzzInput.value = initialNumberOfFizzBuzzElements.toString();
}


function createFizzBuzzValues(limit: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= limit; i++) {
    let value = i.toString();

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

function handleFizzBuzzInput(value: string) {
  const limit = parseInt(value, 10);
  const errorMessage = document.querySelector('.error-message');

  if (limit < 1) {
    console.log(errorMessage, 'less then 1')
    if (errorMessage) {
      errorMessage.textContent = 'Please enter a number greater than or equal to 1.';
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
    updateFizzBuzzItems(limit);
  }
}

function updateFizzBuzzItems(limit: number) {
  const fizzBuzzDIV = document.querySelector('.fizzbuzz');
  if (fizzBuzzDIV) {
    fizzBuzzDIV.innerHTML = '';

    const fizzBuzzValues = createFizzBuzzValues(limit);

    fizzBuzzValues.forEach((value) => {
      const newFizzBuzzItemDIV = document.createElement('div');
      newFizzBuzzItemDIV.classList.add('fizzbuzz_item');
      newFizzBuzzItemDIV.textContent = value;
      fizzBuzzDIV.appendChild(newFizzBuzzItemDIV);
    });
  }
}
