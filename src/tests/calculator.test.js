const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator extended operations', () => {
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });
});

describe('Edge cases', () => {
  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(1, 0)).toThrow('Modulo by zero');
  });

  test('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });

  test('operations accept numeric strings via Number conversion in CLI not in function', () => {
    // functions expect numbers; ensure they behave with numeric inputs
    expect(add(Number('2'), Number('3'))).toBe(5);
  });
});
