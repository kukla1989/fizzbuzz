/* eslint-disable @typescript-eslint/no-unused-vars */

const initialNumberOfFizzBuzzElements = 100;
const fizzbuzz = document.querySelector('.fizzbuzz');

if (fizzbuzz) {
  updateFizzBuzzItems(initialNumberOfFizzBuzzElements);
}

const numberFizzBuzzInput = document.querySelector('.amount-fizzbuzz') as HTMLInputElement;
if (numberFizzBuzzInput) {
  numberFizzBuzzInput.value = initialNumberOfFizzBuzzElements.toString();
}

function isFizz(number: number) {
  return number % 3 === 0;
}

function isBuzz(number: number) {
  return number % 5 === 0;
}

function createFizzBuzzValue(number: number) {
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

function createFizzBuzzValues(limit: number): string[] {
  const result: string[] = [];

  for (let index = 1; index <= limit; index++) {
    result.push(createFizzBuzzValue(index));
  }

  return result;
}

function handleFizzBuzzInput(value: string) {
  const limit = parseInt(value, 10);
  const errorMessage = document.querySelector('.error-message');

  if (limit < 1 && errorMessage) {
    errorMessage.textContent = 'Please enter a number greater than or equal to 1.';
  } else if (errorMessage) {
    errorMessage.textContent = '';
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
