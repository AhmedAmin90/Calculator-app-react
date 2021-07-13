import calculate from '../../logic/calculate';

describe('calculate', () => {
  it('Caculate is a function', () => {
    expect(typeof calculate).toEqual('function');
  });

  it('Result return an object', () => {
    const result = calculate({ total: null, next: null, operation: null }, 9);
    expect(typeof result).toEqual('object');
  });

  it('Total result is a string', () => {
    const result = calculate({ total: '6', next: null, operation: null }, 9);
    expect(typeof result.total).toEqual('string');
  });

  it('Total total will be 0 if total and next are null and click on operation buttons', () => {
    const result = calculate({ total: null, next: null, operation: null }, '+');
    expect(result.total).toEqual('0');
    expect(result.next).toEqual(null);
  });

  it('If  operation, number will be added to the next', () => {
    const result = calculate({ total: '6', next: null, operation: '+' }, '9');
    expect(result.total).toEqual('6');
    expect(result.next).toEqual('9');
  });

  it('If next and operation is null , number will be added to the total', () => {
    const result = calculate({ total: '6', next: null, operation: null }, '9');
    expect(result.total).toEqual('69');
  });

  it('If  operation, number will be added to the next', () => {
    const result = calculate({ total: '6', next: null, operation: '+' }, '9');
    expect(result.total).toEqual('6');
    expect(result.next).toEqual('9');
  });

  it('AC return null for all data', () => {
    const result = calculate({ total: null, next: null, operation: null }, 'AC');
    expect(result).toEqual({ next: null, operation: null, total: null });
  });

  it(' "." return a decimal value', () => {
    const result = calculate({ total: null, next: null, operation: null }, '.');
    expect(result).toEqual({ next: null, operation: null, total: '0.' });
  });

  it('"+/-" return a negative value', () => {
    const result = calculate({ total: '6', next: null, operation: null }, '+/-');
    expect(result).toEqual({ next: -0, operation: null, total: -6 });
  });
  it('"%" return a percent value', () => {
    const result = calculate({ total: '6', next: null, operation: null }, '%');
    expect(result).toEqual({ next: null, operation: null, total: 0.06 });
  });
  it('"=" return total if next is null ', () => {
    const result = calculate({ total: '6', next: null, operation: null }, '=');
    expect(result.total).toEqual('6');
  });
  it('"=" return 0 if next and total are null ', () => {
    const result = calculate({ total: null, next: null, operation: null }, '=');
    expect(result.total).toEqual('0');
  });
  it('"=" return total equal to operation of next, total and operation return to null ', () => {
    const result = calculate({ total: '5', next: '6', operation: 'X' }, '=');
    expect(result.total).toEqual('30');
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
  });
});
