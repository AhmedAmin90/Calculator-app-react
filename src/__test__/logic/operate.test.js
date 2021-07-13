import operate from '../../logic/operate';

describe(' Operate', () => {
  it('operate returns an string', () => {
    const result = operate('2', '4', '+');
    expect(typeof result).toEqual('string');
  });

  it('operate is a function', () => {
    expect(typeof operate).toEqual('function');
  });

  it('sum two numbers , and do not return null', () => {
    const result = operate('2', '4', '+');
    expect(result).toBe('6');
    expect(result).not.toBe(null);
  });

  it('sustrate two numbers value , and do not return null', () => {
    const result = operate('2', '4', '-');
    expect(result).toEqual('-2');
    expect(result).not.toBe(null);
  });

  it('divide two numbers , and do not return null', () => {
    const result = operate('2', '4', '÷');
    expect(result).toEqual('0.5');
    expect(result).not.toBe(null);
  });

  it('Can not divide by zero', () => {
    const result = operate('2', '0', '÷');
    expect(result).toEqual('Can not divide numbers by Zero !');
  });

  it('multiple two numbers , and do not return null', () => {
    const result = operate('2', '4', 'X');
    expect(result).toEqual('8');
    expect(result).not.toBe(null);
  });
});
