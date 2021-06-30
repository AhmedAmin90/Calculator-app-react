import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', 'X', '÷', '%'];

  // General buttons:
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
    return data;
  }

  if (btnName === 'AC') {
    total = '';
    next = '';
    operation = null;
    return data;
  }

  if (btnName === '.') {
    if (!total) {
      total = '0.';
    }

    if (total && !operation) {
      total += '.';
    }

    if (operation && !next) {
      next += '0.';
    }

    if (operation && next) {
      next += '0.';
    }

    return data;
  }

  // Operations and Number buttons:
  if (operations.includes(btnName)) {
    operation = btnName;
    return data;
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
    return data;
  }

  // Result button:
  if (btnName === '=') {
    let result;
    if (!total && !next) result = 0;
    if (total && !operation && !next) result = total;
    if (total && operation && !next) result = total;
    if (total && operation && next) {
      result = operate(total, next, operation);
    }
    return result;
  }

  return data;
};

export default calculate;
