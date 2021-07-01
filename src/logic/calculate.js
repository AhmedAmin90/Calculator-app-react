/* eslint-disable no-self-assign */
import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', 'X', '÷'];

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if (btnName === '.') {
    if (!total) {
      total = '0.';
    }

    // if (total  && !operation) {
    //   total += '.';
    // }

    if (total && !next) {
      if (operation) {
        next += '0.';
      } else if (total.indexOf('.') === -1) {
        total += '.';
      }
    }

    if (total && operation && next) {
      if (next.indexOf('.') === -1) {
        next += '.';
      }
    }
  }

  if (btnName === '%') {
    if (!next) {
      total /= 100;
    } else {
      next /= 100;
    }
  }

  if (operations.includes(btnName)) {
    if (!total) total = '0';
    if (total && !next) {
      operation = btnName;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
    }
  }

  if (numbers.includes(btnName)) {
    if (!operation) {
      if (!total) {
        total = btnName;
      } else {
        total += btnName;
      }
    } else if (!next) {
      next = btnName;
    } else {
      next += btnName;
    }
  }

  if (btnName === '=') {
    if (total && !next) {
      total = total;
    }
    if (!total && !next) {
      total = '0';
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
