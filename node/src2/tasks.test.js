jest.mock('random');
const createTasks = require('./tasks');

test('it should work', () => {
  const result = 1 + 2;
  expect(result).toBe(3);
});

describe('createTasks()', () => {
  it('should return an array with the lenght of 3', () => {
    const result = createTasks(3);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
  });

  it('should return a task', () => {
    const result = createTasks(1);
    expect(result[0].o1).toBe(2);
    expect(result[0].o2).toBe(2);
    expect(result[0].r).toBe(4);
  });

  it('should provide at least one task', () => {
    const result = createTasks();
    expect(result.length).toBe(1);
    expect(result[0].o1).toBe(2);
    expect(result[0].o2).toBe(2);
    expect(result[0].r).toBe(4);
  });

  it('should fail if we provide -1', () => {
    expect(() => createTasks(-1)).toThrowError('wrong number');
  });

  it('should handle big numbers', () => {
    expect(() => createTasks(9007199254740992)).toThrow();
  });

  it('should fail for booleans', () => {
    expect(() => createTasks(true)).toThrow();
  });
});
