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
    return newNumberOne.div(newNumberTwo).toString();
  }
  if (operation === '%') {
    return newNumberOne.mod(newNumberTwo).toString();
  }

  return 0;
};

export default operate;
