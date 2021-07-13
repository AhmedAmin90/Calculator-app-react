import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const newNumberOne = Big(numberOne);
  const newNumberTwo = Big(numberTwo);

  if (operation === '+') {
    return newNumberOne.plus(newNumberTwo).toString();
  }
  if (operation === '-') {
    return newNumberOne.minus(newNumberTwo).toString();
  }
  if (operation === 'X') {
    return newNumberOne.times(newNumberTwo).toString();
  }
  if (operation === '÷') {
    if (numberTwo === '0') {
      return 'Can not divide numbers by Zero !';
    }

    return newNumberOne.div(newNumberTwo).toString();
  }

  return 0;
};

export default operate;
