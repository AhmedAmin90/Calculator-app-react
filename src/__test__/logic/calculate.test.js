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
});
