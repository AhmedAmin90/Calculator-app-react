import Big from 'big.js';

const operate = (numberOne, numberTwo , operation) => {

    numberOne = Big(numberOne);
    numberTwo = Big(numberTwo);

    if (operation === '+') {
        return numberOne.plus(numberTwo).toString();
    }
    else if (operation === '-') {
        return numberOne.minus(numberTwo).toString();
    }
    else if (operation === 'X') {
        return numberOne.times(numberTwo).toString();
    }
    else if (operation === '÷') {
        return numberOne.div(numberTwo).toString();
    }
    else if (operation === '%') {
        return numberOne.mod(numberTwo).toString();
    }
    else {
        return 0
    }
}


export default operate;