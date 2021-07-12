import operate from '../../logic/operate';

describe(' Operate', () => {
  it('operate returns an string', () => {
    const result = operate('2', '4', '+');
    expect(typeof result).toEqual('string');
  });

  it('operate is a function', () => {
    expect(typeof operate).toEqual('function');
  });

  it('sum two numbers', () => {
    const result = operate('2', '4', '+');
    expect(result).toBe('6');
  });

  it('sustrate two numbers value', () => {
    const result = operate('2', '4', '-');
    expect(result).toEqual('-2');
  });

  it('divide two numbers', () => {
    const result = operate('2', '4', '÷');
    expect(result).toEqual('0.5');
  });

  it('multiple two numbers', () => {
    const result = operate('2', '4', 'X');
    expect(result).toEqual('8');
  });
});
